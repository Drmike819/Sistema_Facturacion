'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Product } from '@/types/product.types';
import api from '@/lib/axios';
import { useParams } from 'next/navigation';

const DetailProduct = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [thumbnailsLoaded, setThumbnailsLoaded] = useState<{ [key: number]: boolean }>({});
    
    const params = useParams();
    const productId = params.id;
    
    console.log('Params:', params);
    console.log('ProductId:', productId);
    
    useEffect(() => {
        const GetDetailProduct = async () => {
            try {
                setLoading(true);
                setError('');
                
                console.log('Haciendo petición para ID:', productId);
                
                const response = await api.get(`/products/product/${productId}/`);
                
                console.log('Respuesta:', response.data);
                setProduct(response.data);
                
                // Establecer la primera imagen como seleccionada por defecto
                if (response.data.images && response.data.images.length > 0) {
                    setSelectedImage(response.data.images[0].image);
                    setImageLoaded(false); // Reset para nueva imagen
                }
                
            } catch (error) {
                console.error('Error al obtener producto:', error);
                
                if (axios.isAxiosError(error)) {
                    const errorMessage = error.response?.data?.detail || 
                                       error.response?.data?.message ||
                                       `Error ${error.response?.status}: ${error.response?.statusText}` ||
                                       'Ocurrió un error al obtener el producto';
                    setError(errorMessage);
                } else {
                    setError('Error inesperado al conectar con el servidor');
                }
            } finally {
                setLoading(false);
            }
        };
        
        GetDetailProduct();
    }, [productId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-gray-600">Cargando producto...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <h2 className="font-bold">Error</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center p-4">
                <h2 className="text-2xl font-bold text-gray-700">Producto no encontrado</h2>
                <p className="text-gray-600">No se pudo cargar la información del producto.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-4">
                    <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                        )}
                        
                        {selectedImage ? (
                            <Image
                                src={`http://127.0.0.1:8000${selectedImage}`}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={`object-cover transition-all duration-700 hover:scale-105 ${
                                    imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => console.error(`Error al cargar imagen: ${selectedImage}`)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                <span>Sin imagen disponible</span>
                            </div>
                        )}
                        
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    
                    {product.images && product.images.length > 1 && (
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => {
                                        setSelectedImage(image.image);
                                        setImageLoaded(false);
                                    }}
                                    className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                                        selectedImage === image.image 
                                            ? 'border-blue-500 shadow-lg' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    
                                    {!thumbnailsLoaded[image.id] && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                                    )}
                                    
                                    <Image
                                        src={`http://127.0.0.1:8000${image.image}`}
                                        alt={`${product.name} - ${index + 1}`}
                                        fill
                                        sizes="80px"
                                        className={`object-cover transition-all duration-500 ${
                                            thumbnailsLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        onLoad={() => setThumbnailsLoaded(prev => ({ ...prev, [image.id]: true }))}
                                        onError={() => console.error(`Error al cargar thumbnail: ${image.image}`)}
                                    />
                                    
                                    {selectedImage === image.image && (
                                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Información del Producto */}
                <div className="space-y-6 mt-15">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                        <p className="text-2xl font-semibold text-green-600">
                            ${product.price.toLocaleString('es-CO')}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
                        <p className="text-white leading-relaxed">{product.description}</p>
                    </div>

                    {/* Información adicional */}
                    <div className="space-y-4">
                        <div className="flex space-x-4 pt-4">
                            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                                Agregar al Carrito
                            </button>
                            <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200 font-semibold">
                                Favoritos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;