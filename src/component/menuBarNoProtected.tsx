import { Link } from 'react-router-dom'

export default function MenuBarNoProtected() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-teal-700 font-bold text-xl">
                        <Link to="/">SIPEDIS</Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-teal-600 font-medium transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-teal-600 font-medium transition"
                        >
                            About
                        </Link>
                    </div>

                    <div className="flex space-x-4">
                        <Link
                            to="/auth/login"
                            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/auth/register"
                            className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
