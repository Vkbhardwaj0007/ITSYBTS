import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { LogOut, Package, Settings, User } from 'lucide-react';

export default function Profile() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'info' | 'orders'>('info');
  const [myOrders, setMyOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (activeTab === 'orders' && context?.currentUser?.phone) {
      setLoadingOrders(true);
      fetch(`https://itsybts.onrender.com/api/orders/phone/${context.currentUser.phone}`)
        .then(res => res.json())
        .then(data => {
          setMyOrders(data);
          setLoadingOrders(false);
        })
        .catch(err => {
          console.error(err);
          setLoadingOrders(false);
        });
    }
  }, [activeTab, context?.currentUser]);

  if (!context?.currentUser) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    context.setCurrentUser(null);
    navigate('/');
  };

  const stages = ['Placed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];

  return (
    <div className="py-8 animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('info')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${activeTab === 'info' ? 'bg-primary/20 text-primary border border-primary/30' : 'text-muted-foreground hover:bg-secondary/50 hover:text-white'}`}>
            <User className="w-5 h-5" /> Profile Info
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${activeTab === 'orders' ? 'bg-primary/20 text-primary border border-primary/30' : 'text-muted-foreground hover:bg-secondary/50 hover:text-white'}`}>
            <Package className="w-5 h-5" /> My Orders
          </button>
          <button className="w-full flex items-center gap-3 text-muted-foreground hover:bg-secondary/50 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors text-left">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 text-destructive hover:bg-destructive/10 px-4 py-3 rounded-xl font-medium transition-colors text-left mt-4 border border-destructive/20">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="glass-card p-8">
            
            {activeTab === 'info' && (
              <>
                <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                    {context.currentUser.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{context.currentUser.name}</h2>
                    <p className="text-muted-foreground">{context.currentUser.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1 block">Phone Number</label>
                    <div className="text-white font-medium bg-secondary/30 px-4 py-3 rounded-lg border border-white/5">{context.currentUser.phone || '+91 99999 99999'}</div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1 block">Account Status</label>
                    <div className="text-green-400 font-medium bg-green-500/10 px-4 py-3 rounded-lg border border-green-500/20 inline-flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div> Active Member
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'orders' && (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">My Orders</h2>
                {loadingOrders ? (
                  <p className="text-muted-foreground text-center py-8">Loading orders...</p>
                ) : myOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {myOrders.map(order => (
                      <div key={order._id} className="bg-secondary/30 border border-white/10 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                          <div>
                            <div className="text-white font-bold text-lg">Order #{order.orderNo || order._id.substring(0,8).toUpperCase()}</div>
                            <div className="text-sm text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-primary font-bold text-xl">₹{order.amount.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">{order.payment?.method === 'cod' ? 'Cash on Delivery' : 'Online Paid'}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {order.items.map((item: any) => (
                            <div key={item._id} className="flex justify-between items-center text-sm">
                              <span className="text-white">{item.name} <span className="text-muted-foreground">x{item.qty}</span></span>
                              <span className="text-white">₹{(item.price * item.qty).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-secondary/50 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Order Status:</span>
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30">
                              {stages[order.stage] || 'Unknown'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}




