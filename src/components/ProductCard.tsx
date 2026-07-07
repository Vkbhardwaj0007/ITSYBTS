import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { AppContext, Product } from '../context/AppContext';

export default function ProductCard({ product }: { product: Product }) {
  const context = useContext(AppContext);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    context?.addToCart(product, 1);
  };

  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  return (
    <Link to={`/product/${product._id}`} className="group glass-card overflow-hidden flex flex-col h-full">
      <div className="relative aspect-square p-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            {discount}% OFF
          </div>
        )}
        {/* Using emoji as fallback since VoltMart seed uses emojis */}
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl">
            {product.emoji || '📦'}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1 border-t border-white/5">
        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{product.category}</div>
        <h3 className="font-medium text-white mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{product.description}</p>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-lg font-bold text-white">₹{product.price.toLocaleString()}</div>
            {product.mrp && product.mrp > product.price && (
              <div className="text-xs text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</div>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center text-white transition-colors duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}




