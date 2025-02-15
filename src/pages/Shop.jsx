import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
    const { addItem, removeItem, items } = useCartStore();
    const [showCart, setShowCart] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState({});
    
    const chocolates = [
        {
            id: 1,
            name: "Melena de León",
            desc: "Experimenta el cambio desde adentro.🍄‍🟫La naturaleza siempre tiene las mejores soluciones, integra este poderoso hongo funcional en tu rutina diaria y cuéntanos los cambios.",
            price: 90000,
            images: ["melena3.jpg", "melena2.jpg", "melena.jpg"]
        },
        {
            id: 2,
            name: "Cordyceps",
            desc: "Descubre los beneficios del hongo de la vitalidad. El hongo de la salud integral. Este hongo sagrado potencia tu vitalidad, mejora tu rendimiento físico, refuerza tu sistema inmunológico y equilibra cuerpo y mente. Cuida de ti de manera natural.",
            price: 90000,
            images: ["cordiceps2.jpeg", "cordiceps4.jpeg", "cordiceps.jpg"]
        },
        {
            id: 3,
            name: "Psilocibes",
            desc: "Las cápsulas de microdosis de psilocibina, ayudan a mejorar la claridad mental, el enfoque y la creatividad. Reducen el estrés y la ansiedad, elevan el estado de ánimo y favorecen la neuroplasticidad, facilitando cambios positivos. Son una herramienta natural para el bienestar sin efectos psicodélicos intensos.",
            price: 90000,
            images: ["psiloc3.png", "melena3.jpg", "psiloc.png"]
        },
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(price);
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div>
            <section className="py-20 bg-[var(--tan-2)] relative">
                {/* Botón flotante del carrito */}
                <div 
                    className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all"
                    onClick={() => setShowCart(!showCart)}
                >
                    <ShoppingCart className="h-6 w-6 text-[var(--brown-2)]" />
                    <span className="font-bold text-[var(--brown-2)]">{totalItems}</span>
                </div>

                {/* Contenido del carrito */}
                {showCart && (
                    <div className="fixed bottom-20 right-4 bg-white p-6 rounded-xl shadow-xl z-50 w-80 max-h-[60vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4">Tu Orden</h3>
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                                </div>
                                <span className="font-medium">
                                    {formatPrice(item.price * item.quantity)}
                                </span>
                            </div>
                        ))}
                        <div className="border-t mt-4 pt-4">
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{formatPrice(totalAmount)}</span>
                            </div>
                            <Button
                                className="w-full mt-4 bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    const message = `¡Hola! Quiero realizar el siguiente pedido:%0A%0A${
                                        items.map(item => 
                                            `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`
                                        ).join('%0A')
                                    }%0A%0ATotal: ${formatPrice(totalAmount)}%0A%0A¿Cómo puedo finalizar la compra?`;

                                    window.open(`https://wa.me/573122592720?text=${message}`, '_blank');
                                }}
                            >
                                Finalizar compra
                            </Button>
                        </div>
                    </div>
                )}

                {/* Listado de productos */}
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-1 text-[var(--brown)]">
                        Productos Destacados
                    </h2>
                    <p className="text-[var(--faded-brown)] text-center mb-14"> magicmushroom </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {chocolates.map((choco) => {
                            const itemQuantity = items.find(item => item.id === choco.id)?.quantity || 0;
                            
                            return (
                                <div key={choco.id} className="bg-white rounded-xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow">
                                    {itemQuantity > 0 && (
                                        <div className="absolute top-2 right-2 bg-[var(--brown-2)] text-white px-3 py-1 rounded-full text-sm">
                                            {itemQuantity} en tu orden
                                        </div>
                                    )}
                                    {/* Contenedor principal de la imagen */}
                                    <div className="w-full">
                                        <img 
                                            src={choco.images[selectedImageIndex[choco.id] || 0]} 
                                            alt={choco.name} 
                                            className="w-full h-96 object-cover transition-opacity duration-300"
                                        />
                                    </div>
                                    
                                    {/* Miniaturas debajo de la imagen principal */}
                                    <div className="flex gap-2 p-4 overflow-x-auto">
                                        {choco.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Vista ${index + 1}`}
                                                className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${
                                                    (selectedImageIndex[choco.id] || 0) === index 
                                                    ? 'border-[var(--brown-2)]' 
                                                    : 'border-transparent'
                                                }`}
                                                onClick={() => setSelectedImageIndex(prev => ({
                                                    ...prev,
                                                    [choco.id]: index
                                                }))}
                                            />
                                        ))}
                                    </div>

                                    {/* Contenido de la carta */}
                                    <div className="p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-[var(--brown-2)]">{choco.name}</h3>
                                            <p className="text-[var(--faded-brown)] line-clamp-4 mb-4">{choco.desc}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-[var(--green)]">
                                                {formatPrice(choco.price)}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    onClick={() => removeItem(choco.id)}
                                                    variant="outline"
                                                    className="border-[var(--brown-2)] text-[var(--brown-2)]"
                                                >
                                                    -
                                                </Button>
                                                <span>{itemQuantity}</span>
                                                <Button
                                                    onClick={() => addItem({
                                                        id: choco.id,
                                                        name: choco.name,
                                                        price: choco.price
                                                    })}
                                                    variant="outline"
                                                    className="border-[var(--brown-2)] text-[var(--brown-2)]"
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                        {itemQuantity > 0 && (
                                            <Button
                                                className="w-full mt-4"
                                                onClick={() => setShowCart(true)}
                                            >
                                                Ver orden actual
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop;