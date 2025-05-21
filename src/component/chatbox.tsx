import { useState, useEffect, useRef } from "react";

type Message = {
  sender: 'user' | 'assistant';
  text: string;
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'sakit apaakamu?', sender: 'assistant' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll otomatis ke bawah saat pesan baru ditambahkan
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gradient-to-b from-teal-100 to-green-50 px-4 flex items-center">
        {/* Container chat box */}
        <div className="w-full h-[700px] md:ml-55 shadow-lg overflow-hidden flex flex-col">
            
            {/* Header Chat Box */}
            <div className="flex justify-center items-center border-b p-4 font-bold text-lg text-teal-900">💡Chat Box</div>

            {/* chat area */}
            <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
                <div
                key={idx}
                className={`w-fit max-w-[80%] px-4 py-2 rounded-md text-white break-words ${
                    msg.sender === 'user'
                    ? 'bg-teal-400 self-end text-right ml-auto'  // Chat dari user
                    : 'bg-teal-600 self-start'                   // Chat dari asisten
                }`}
                >
                {msg.text}
                </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input pesan + tombol kirim */}
            <div className="border-t p-4 flex items-center">
            <input
                type="text"
                className="flex-1 border rounded px-3 py-2 focus:outline-none"
                placeholder="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                onClick={sendMessage}
                className="ml-2 text-teal-700 hover:text-teal-900 text-2xl"
            >
                &gt;
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
