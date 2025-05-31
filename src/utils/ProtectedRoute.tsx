import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "./AuthContext";
import { ArrowRepeat } from "react-bootstrap-icons";

interface User {
    id: number;
    email: string;
    name: string;
}

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/auth/login");
            return;
        }

        axios
            .get("https://sipedis-be-production.up.railway.app/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                // Pastikan data user ada di res.data (sesuaikan jika respons berbeda)
                setUser(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                localStorage.removeItem("token");
                navigate("/auth/login");
            });
    }, [navigate]);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen text-teal-500">
                <ArrowRepeat size={50} className="animate-spin" />
            </div>
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
