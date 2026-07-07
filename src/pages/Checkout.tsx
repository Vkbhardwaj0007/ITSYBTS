import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CheckCircle, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
// @ts-ignore
import { payNow } from '../components/payment';

export default function Checkout() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: 'Test User',
    phone: '9999999999',
    pin: '110001',
    city: 'New Delhi',
    state: 'Delhi',
    addr: '123 Tech Street, Silicon Valley'
  });
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'razorpay'>('razorpay');
  const [loading, setLoading] = useState(false);

  if (!context || context.cart.length === 0) {
    return (
      <div className="py-20 text-center animate-fade-in-up">
        <h2 className="text-2xl text-white mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-primary hover:underline">Go to Shop</Link>
      </div>
    );
  }

  const { cart, clearCart, currentUser } = context;
  const totalSelling = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  const delivery = totalSelling > 0 && totalSelling < 500 ? 50 : 0;
  const grandTotal = totalSelling + delivery;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const items = cart.map(c => ({ productId: c.product._id, qty: c.qty }));

    if (paymentMethod === 'cod') {
      try {
        const res = await fetch('https://itsybts.onrender.com/api/orders/cod', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items,
            address,
            user: currentUser ? { id: currentUser.phone, name: currentUser.name, email: currentUser.email, phone: address.phone } : null
          })
        });
        
        if (res.ok) {
          alert("Order placed via Cash on Delivery!");
          clearCart();
          navigate('/');
        } else {
          const err = await res.json();
          alert(err.error || "Failed to place order.");
        }
      } catch (err) {
        alert("Error placing order.");
      }
      setLoading(false);
    } else {
      // VoltMart Razorpay flow
      payNow({
        items,
        address,
        user: { name: currentUser?.name, email: currentUser?.email, phone: address.phone },
        onSuccess: (order: any) => {
          clearCart();
          navigate('/');
        },
        onFailure: (err: any) => {
          console.error(err);
          alert(err.message || 'Payment failed');
          setLoading(false);
        }
      });
    }
  };

  return (
    <div className="py-8 animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-8">Secure Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <form onSubmit={handlePlaceOrder} className="flex-1 space-y-8">
          
          {/* Shipping Address */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Delivery Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Full Name" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white" value={address.name} onChange={e => setAddress({...address, name: e.target.value})} />
              <input required type="tel" placeholder="Mobile Number" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white" value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} />
              <input required type="text" placeholder="Pincode" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white" value={address.pin} onChange={e => setAddress({...address, pin: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="City" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
                <input required type="text" placeholder="State" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />
              </div>
              <textarea required placeholder="Full Address (House No, Building, Street)" className="bg-secondary/50 border border-white/10 rounded-lg p-3 text-white md:col-span-2 h-24" value={address.addr} onChange={e => setAddress({...address, addr: e.target.value})}></textarea>
            </div>
          </div>

          {/* Payment Method */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" /> Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${paymentMethod === 'razorpay' ? 'border-primary bg-primary/10' : 'border-white/10 bg-secondary/30'}`}>
                <input type="radio" name="payment" checked={paymentMethod === 'razorpay'} onChange={() => setPaymentMethod('razorpay')} className="hidden" />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'razorpay' ? 'border-primary' : 'border-muted-foreground'}`}>
                  {paymentMethod === 'razorpay' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Credit / Debit / UPI</div>
                  <div className="text-xs text-green-400 font-medium flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Secured by Razorpay</div>
                </div>
              </label>

              <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/10' : 'border-white/10 bg-secondary/30'}`}>
                <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary' : 'border-muted-foreground'}`}>
                  {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Cash on Delivery</div>
                  <div className="text-xs text-muted-foreground">Pay when you receive</div>
                </div>
              </label>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg disabled:opacity-70"
          >
            {loading ? 'Processing...' : `Pay ₹${grandTotal.toLocaleString()}`}
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="glass-card p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Details</h2>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.product._id} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-secondary/30 flex items-center justify-center border border-white/5 p-1">
                    {item.product.imageUrl ? <img src={item.product.imageUrl} alt="" className="object-contain w-full h-full" /> : <span className="text-2xl">{item.product.emoji}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{item.product.name}</div>
                    <div className="text-xs text-muted-foreground">Qty: {item.qty}</div>
                  </div>
                  <div className="text-sm font-bold text-white shrink-0">₹{(item.product.price * item.qty).toLocaleString()}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Subtotal</span>
                <span>₹{totalSelling.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Delivery</span>
                <span>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="font-bold text-white">To Pay</span>
                <span className="text-xl font-bold text-primary">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




