import { useState, useEffect, useRef } from "react";
import { ArrowRepeat, ImageFill, SendFill, X } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type Message = {
  sender: "user" | "assistant";
  text?: string;
  imageUrl?: string;
};

const ChatBox: React.FC = () => {
  const params = useParams<{ roomId?: string }>();
  const navigate = useNavigate();

  const roomId = params.roomId || null; // langsung dari URL params

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Katakan apa yang kamu butuhkan, anda dapat mengupload sebuah gambar",
    },
  ]);
  const [input, setInput] = useState("");
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll ke bawah tiap pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  useEffect(() => {
    if (!roomId) {
      setMessages([]);
    }
  }, [roomId]);

  // Fetch chat setiap roomId berubah
  useEffect(() => {
    const fetchChat = async () => {
      if (!roomId) return;

      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`http://localhost:8080/chat/${roomId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === "success") {
          const rawMessages = response.data.data;

          const parsedMessages = rawMessages.map((msg: any) => ({
            sender: msg.sender_type === "user" ? "user" : "assistant",
            text: msg.content,
            imageUrl: msg.imagesUrl === "null" ? undefined : msg.imagesUrl,
          }));

          setMessages(parsedMessages);
        }
      } catch (error) {
        console.error("Failed to load chat:", error);
      }
    };

    fetchChat();
  }, [roomId]);

  // Kirim pesan baru ke server
  const sendMessage = async () => {
    if (!input.trim() && !pendingImage) return;

    const newMessage: Message = {
      sender: "user",
      text: input.trim() || undefined,
      imageUrl: pendingImage || undefined,
    };

    setMessages((prev) => [...prev, newMessage]);

    const body: { content?: string; image?: string; roomId?: string } = {};
    if (roomId) body.roomId = roomId;
    if (newMessage.text) body.content = newMessage.text;
    if (newMessage.imageUrl) body.image = newMessage.imageUrl;

    setIsLoading(true);
    setInput("");
    setPendingImage(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.post(`http://localhost:8080/chat`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resData = response.data;

      if (resData.status === "success" && resData.data) {
        const newRoomId = resData.data.roomId;
        const assistantText = resData.data.content;

        // Jika belum ada roomId (baru buat room), navigasi ke room baru
        if (!roomId && newRoomId) {
          navigate(`/chat/${newRoomId}`, { replace: true });
          // Jangan setRoomId karena kita sudah pakai params.roomId
        }

        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            text: assistantText,
            imageUrl:
              resData.data.imagesUrl && resData.data.imagesUrl !== "null"
                ? resData.data.imagesUrl
                : undefined,
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result?.toString();
      if (base64Image) {
        setPendingImage(base64Image);
      }
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gradient-to-b from-teal-100 to-green-50 px-4 flex items-center">
        <div className="w-full h-[700px] md:ml-55 shadow-lg overflow-hidden flex flex-col">
          <div className="flex justify-center items-center border-b p-4 font-bold text-lg text-teal-900">
            💡Chat Box
          </div>

          <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-fit max-w-[80%] px-4 py-2 rounded-md text-white break-words ${msg.sender === "user"
                  ? "bg-teal-400 self-end text-right ml-auto"
                  : "bg-teal-600 self-start"
                  }`}
              >
                {msg.imageUrl != null && (
                  <img
                    src={msg.imageUrl}
                    alt="uploaded"
                    className="rounded mt-2 max-w-full max-h-64"
                  />
                )}
                {msg.text && <div>{msg.text}</div>}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="border-t p-4 flex flex-col gap-2">
            {pendingImage && (
              <div className="relative inline-block w-24 h-24">
                <img
                  src={pendingImage}
                  alt="preview"
                  className="w-full h-full object-cover rounded"
                />
                <button
                  onClick={() => setPendingImage(null)}
                  className="absolute top-2 right-2 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 border rounded px-3 py-2 focus:outline-none"
                placeholder="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <label className="cursor-pointer text-teal-700 hover:text-teal-900 text-2xl">
                <ImageFill />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <button
                onClick={sendMessage}
                className="ml-1 text-teal-700 hover:text-teal-900 text-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <ArrowRepeat className="animate-spin" />
                ) : (
                  <SendFill />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
