import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const context = useContext(AppContext);
  const cartCount = context?.cart.reduce((acc, item) => acc + item.qty, 0) || 0;

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">I</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">ITSYBTS Store</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Shop</Link>
            <Link to="/products?category=Home Automation" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Home Automation</Link>
            <Link to="/products?category=Security" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Security</Link>
            <Link to="/products?category=Industrial" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Industrial</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-secondary/50 rounded-full px-4 py-2 border border-white/5">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input 
              type="text" 
              placeholder="Search tech..." 
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-muted-foreground w-48"
            />
          </div>

          <Link to="/cart" className="relative p-2 text-muted-foreground hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] font-bold text-white flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to={context?.currentUser ? "/profile" : "/login"} className="p-2 text-muted-foreground hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </Link>

          <button className="p-2 md:hidden text-muted-foreground hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}




