import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) return null;

  const { cart, updateCartQty, removeFromCart } = context;

  const totalMRP = cart.reduce((acc, item) => acc + (item.product.mrp || item.product.price) * item.qty, 0);
  const totalSelling = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  const discount = totalMRP - totalSelling;
  const delivery = totalSelling > 0 && totalSelling < 500 ? 50 : 0;
  const grandTotal = totalSelling + delivery;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in-up">
        <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mb-6 border border-white/5">
          <ShoppingBag className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-sm">Looks like you haven't added anything to your cart yet. Explore our premium tech collection.</p>
        <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div key={item.product._id} className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to={`/product/${item.product._id}`} className="w-24 h-24 shrink-0 rounded-xl bg-secondary/30 flex items-center justify-center overflow-hidden border border-white/5">
                {item.product.imageUrl ? (
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-contain p-2 hover:scale-110 transition-transform" />
                ) : (
                  <span className="text-4xl filter drop-shadow-lg">{item.product.emoji || '📦'}</span>
                )}
              </Link>
              
              <div className="flex-1 min-w-0">
                <div className="text-xs text-primary font-medium mb-1 uppercase">{item.product.brand || item.product.category}</div>
                <Link to={`/product/${item.product._id}`} className="text-lg font-bold text-white hover:text-primary transition-colors block truncate mb-1">
                  {item.product.name}
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">₹{item.product.price.toLocaleString()}</span>
                  {item.product.mrp && item.product.mrp > item.product.price && (
                    <span className="text-sm text-muted-foreground line-through">₹{item.product.mrp.toLocaleString()}</span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
                <div className="flex items-center bg-secondary/50 rounded-lg border border-white/10">
                  <button onClick={() => updateCartQty(item.product._id, -1)} className="p-2 text-white hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center text-white font-medium text-sm">{item.qty}</span>
                  <button onClick={() => updateCartQty(item.product._id, 1)} className="p-2 text-white hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.product._id)} 
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="glass-card p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Total MRP ({cart.reduce((a,c) => a + c.qty, 0)} items)</span>
                <span>₹{totalMRP.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Discount on MRP</span>
                <span>- ₹{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Delivery Charges</span>
                <span>{delivery === 0 ? <span className="text-green-400">FREE</span> : `₹${delivery}`}</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4 mb-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-bold text-white">Total Amount</span>
                <span className="text-2xl font-bold text-white">₹{grandTotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground text-right">Inclusive of all taxes</p>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Proceed to Checkout <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




