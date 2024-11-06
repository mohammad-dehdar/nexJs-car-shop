import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 text-gray-100 shadow-md rounded-b-3xl">
                <Link href={"/"}>
                    <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                        <div className="text-center sm:text-left mb-4 sm:mb-0">
                            <h1 className="text-2xl font-bold">Car Shop</h1>
                            <p className="text-sm text-gray-400">Choose and buy your car</p>
                        </div>
                    </div>
                </Link>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-gray-900 text-gray-100 rounded-t-3xl">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-sm text-gray-400 mb-2 sm:mb-0">
                        Car-shop project created by Mohammad Dehdar
                    </p>
                    <Link
                        href="https://github.com/mohammad-dehdar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        <span>GitHub</span>
                    </Link>
                </div>
            </footer>
        </div>
    )
}