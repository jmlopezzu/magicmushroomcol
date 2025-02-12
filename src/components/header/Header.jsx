import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useCartStore } from '@/store/cartStore';
import MagicmushroomLogo from '@/assets/alice.png';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { items, cartOpen, toggleCart } = useCartStore();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <header className="bg-black relative h-14 px-8">
                <div className="h-10 w-full flex items-center justify-center">
                    <p className="text-white">🍄 Envío gratuito en Manizales para ordenes sobre $ 200 COP 🍄 </p>
                </div>

                <div className="absolute -bottom-1 left-0 w-full h-10">
                    <svg
                        viewBox="0 0 1440 100"
                        preserveAspectRatio="none"
                        className="w-full h-full text-white"
                    >
                        <path
                            fill="currentColor"
                            d="M0,40 C120,80 240,0 360,60 C480,120 600,20 720,80 C840,140 960,40 1080,90 C1200,140 1320,60 1440,80 L1440,100 L0,100 Z"
                        ></path>
                    </svg>
                </div>
            </header>
            
            <header className="bg-white shadow-sm h-20 flex items-center px-8 relative">
                <Link to="/" className="flex items-center">
                    <img
                        src={MagicmushroomLogo}
                        alt="Magicmushroom"
                        className="h-16 grayscale-[85%] contrast-125 brightness-75"
                    />
                </Link>

                <nav className="ml-auto hidden lg:flex gap-8 items-center">
                    {["Experiencias", "Productos", "Chocolates", "Salud"].map((item) => (
                        <Link
                            key={item}
                            to="#"
                            className="font-medium hover:text-[var(--brown-2)] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    
                    <button 
                        onClick={() => toggleCart(true)}
                        className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[var(--brown-2)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {itemCount}
                            </span>
                        )}
                    </button>
                </nav>

                <button
                    className="ml-auto lg:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {menuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-4 lg:hidden">
                        {["Experiencias", "Productos", "Chocolates", "Salud"].map((item) => (
                            <Link
                                key={item}
                                to="#"
                                className="font-medium hover:text-[var(--brown-2)] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <button 
                            onClick={() => toggleCart(true)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[var(--brown-2)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </div>
                )}

                {cartOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="absolute right-0 top-0 h-full bg-white w-96 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">Tu Carrito</h3>
                                <button 
                                    onClick={() => toggleCart(false)}
                                    className="text-2xl"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="h-[calc(100vh-180px)] overflow-y-auto">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between items-center mb-4">
                                        <div>
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm">x{item.quantity}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-medium">
                                                {new Intl.NumberFormat('es-CO', {
                                                    style: 'currency',
                                                    currency: 'COP'
                                                }).format(item.price * item.quantity)}
                                            </span>
                                            <button 
                                                onClick={() => useCartStore.getState().removeItem(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                
                                {items.length === 0 && (
                                    <p className="text-center text-gray-500">Tu carrito está vacío</p>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t">
                                <div className="flex justify-between font-bold mb-4 text-lg">
                                    <span>Total:</span>
                                    <span>
                                        {new Intl.NumberFormat('es-CO', {
                                            style: 'currency',
                                            currency: 'COP'
                                        }).format(
                                            items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
                                        )}
                                    </span>
                                </div>
                                <Button
                                    onClick={() => {
                                        const message = `¡Hola! Quiero realizar el siguiente pedido:%0A%0A${
                                            items.map(item => 
                                                `- ${item.name} x${item.quantity}: ${new Intl.NumberFormat('es-CO', {
                                                    style: 'currency',
                                                    currency: 'COP'
                                                }).format(item.price * item.quantity)}`
                                            ).join('%0A')
                                        }%0A%0ATotal: ${new Intl.NumberFormat('es-CO', {
                                            style: 'currency',
                                            currency: 'COP'
                                        }).format(items.reduce((sum, item) => sum + (item.price * item.quantity), 0))}%0A%0A¿Cómo puedo finalizar la compra?`;

                                        window.open(`https://wa.me/573122592720?text=${message}`, '_blank');
                                    }}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                >
                                    Finalizar compra por WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header;