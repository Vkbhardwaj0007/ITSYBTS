import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  const context = useContext(AppContext);
  const loading = context?.loading;
  
  // Featured products logic (take first 8)
  const featuredProducts = context?.products.slice(0, 8) || [];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden mb-20 bg-secondary/30 border border-white/5 h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background/50 to-background/90 z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-full opacity-30 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)' }}></div>
        
        <div className="container relative z-10 px-8 md:px-16 lg:w-2/3">
          <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 delay-100 animate-fade-in-up">
            Next-Gen Tech is Here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight delay-200 animate-fade-in-up">
            Experience the <span className="text-gradient">Future</span> of Electronics.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl delay-300 animate-fade-in-up">
            Discover premium smart products, high-performance controllers, and automated systems at ITSYBTS Store.
          </p>
          <div className="flex gap-4">
            <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/products?category=Home Automation" className="bg-secondary hover:bg-secondary/80 text-white font-medium px-8 py-4 rounded-xl border border-white/10 transition-all">
              Explore Automation
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="glass-card p-8 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Zap className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Ultra-Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">Get your tech delivered in 24 hours.</p>
          </div>
        </div>
        <div className="glass-card p-8 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Secure Payments</h3>
            <p className="text-sm text-muted-foreground">100% secure Razorpay checkout.</p>
          </div>
        </div>
        <div className="glass-card p-8 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
            <Truck className="w-7 h-7 text-pink-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">On all orders above ₹499.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Tech</h2>
            <p className="text-muted-foreground">Handpicked premium devices for you.</p>
          </div>
          <Link to="/products" className="text-primary hover:text-white font-medium flex items-center gap-1 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className="h-80 glass-card animate-pulse bg-secondary/20"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}




