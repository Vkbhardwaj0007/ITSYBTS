import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  mrp?: number;
  rating?: number;
  reviews?: number;
  popularity?: number;
  discount?: number;
  emoji?: string;
  brand?: string;
  specs?: string[];
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface Order {
  orderId: string;
  timestamp: number;
  date: string;
  items: CartItem[];
  subtotal: number;
  delivery: number;
  total: number;
  address: { name: string; phone: string; pin: string; city: string; addr: string; state: string; };
  paymentMethod: string;
  status: string;
}

export interface User {
  phone: string;
  name: string;
  email?: string;
  password?: string;
}

interface AppContextType {
  products: Product[];
  loading: boolean;
  cart: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  updateCartQty: (productId: string, diff: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get('https://itsybts.onrender.com/api/products')
      .then(res => { 
        const mappedProducts = res.data.map((p: any) => ({
          ...p,
          imageUrl: p.imageUrl || p.image,
          description: p.description || p.desc
        }));
        setProducts(mappedProducts); 
        setLoading(false); 
      })
      .catch(err => { console.error(err); setLoading(false); });
      
    const savedCart = localStorage.getItem('bts_cart');
    if (savedCart) { try { setCart(JSON.parse(savedCart)); } catch (e) {} }
    
    const savedOrders = localStorage.getItem('bts_orders');
    if (savedOrders) { try { setOrders(JSON.parse(savedOrders)); } catch (e) {} }
    
    const savedUser = localStorage.getItem('bts_current_user');
    if (savedUser) { try { setCurrentUser(JSON.parse(savedUser)); } catch (e) {} }
  }, []);

  const syncCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('bts_cart', JSON.stringify(newCart));
  };

  const addToCart = (product: Product, qty = 1) => {
    if (product.stock === 0) return;
    const existing = cart.find(item => item.product._id === product._id);
    let newCart = [];
    if (existing) {
      newCart = cart.map(item => item.product._id === product._id ? { ...item, qty: item.qty + qty } : item);
    } else {
      newCart = [...cart, { product, qty }];
    }
    syncCart(newCart);
  };

  const updateCartQty = (productId: string, diff: number) => {
    const newCart = cart.map(item => {
      if (item.product._id === productId) {
        const newQty = item.qty + diff;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[];
    syncCart(newCart);
  };

  const removeFromCart = (productId: string) => { syncCart(cart.filter(item => item.product._id !== productId)); };
  
  const clearCart = () => { syncCart([]); };

  const addOrder = (order: Order) => {
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem('bts_orders', JSON.stringify(updated));
  };

  const handleSetUser = (user: User | null) => {
    setCurrentUser(user);
    if (user) localStorage.setItem('bts_current_user', JSON.stringify(user));
    else localStorage.removeItem('bts_current_user');
  };

  return (
    <AppContext.Provider value={{ products, loading, cart, addToCart, updateCartQty, removeFromCart, clearCart, orders, addOrder, currentUser, setCurrentUser: handleSetUser }}>
      {children}
    </AppContext.Provider>
  );
};




