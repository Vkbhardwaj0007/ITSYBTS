import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext, Product } from '../context/AppContext';
import { ShoppingCart, Star, Shield, RotateCcw, Truck, ArrowLeft } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams<{id: string}>();
  const context = useContext(AppContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (context?.products) {
      const found = context.products.find(p => p._id === id);
      if (found) setProduct(found);
    }
  }, [id, context?.products]);

  if (context?.loading || !product) {
    return <div className="py-20 text-center text-white">Loading product details...</div>;
  }

  const handleAddToCart = () => {
    context?.addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  return (
    <div className="py-8 animate-fade-in-up">
      <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image gallery */}
        <div className="glass-card p-12 flex items-center justify-center min-h-[500px]">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="w-full max-w-md object-contain drop-shadow-2xl" />
          ) : (
            <div className="text-9xl filter drop-shadow-2xl animate-pulse">
              {product.emoji || '📦'}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-2 text-primary font-semibold uppercase tracking-wider text-sm">{product.brand || product.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-secondary/50 rounded-full px-3 py-1 border border-white/5">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-white font-medium text-sm">{product.rating || '4.5'}</span>
              <span className="text-muted-foreground text-sm ml-2">({product.reviews || '0'} reviews)</span>
            </div>
            <div className="text-sm text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              In Stock
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-end gap-3 mb-2">
              <span className="text-4xl font-bold text-white">₹{product.price.toLocaleString()}</span>
              {product.mrp && product.mrp > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through mb-1">₹{product.mrp.toLocaleString()}</span>
                  <span className="text-sm font-bold text-primary mb-2 bg-primary/20 px-2 py-0.5 rounded border border-primary/30">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Inclusive of all taxes.</p>
          </div>

          <p className="text-muted-foreground mb-8 text-lg leading-relaxed border-b border-white/10 pb-8">
            {product.description}
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center bg-secondary rounded-xl border border-white/10 h-14">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 text-white hover:text-primary transition-colors text-xl font-medium">-</button>
              <span className="w-8 text-center text-white font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 text-white hover:text-primary transition-colors text-xl font-medium">+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              className={`flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                added 
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20' 
                  : 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:scale-[1.02]'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-4 glass-card bg-secondary/20">
              <Shield className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs font-medium text-white text-center">1 Year<br/>Warranty</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 glass-card bg-secondary/20">
              <RotateCcw className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-medium text-white text-center">7 Days<br/>Replacement</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 glass-card bg-secondary/20">
              <Truck className="w-6 h-6 text-pink-400 mb-2" />
              <span className="text-xs font-medium text-white text-center">Free<br/>Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Specifications */}
      {product.specs && product.specs.length > 0 && (
        <div className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.specs.map((spec, i) => (
              <div key={i} className="glass-card p-4 bg-secondary/10">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-muted-foreground">{spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}




