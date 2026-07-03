// Set VITE_API_URL in your frontend .env, e.g. VITE_API_URL=http://localhost:5000
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, { method = "GET", body } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const api = {
  // products
  getProducts: (params = "") => request(`/api/products${params}`),
  getProduct: (id) => request(`/api/products/${id}`),

  // auth
  register: (body) => request("/api/auth/register", { method: "POST", body }),
  login: (body) => request("/api/auth/login", { method: "POST", body }),

  // orders
  getMyOrders: () => request("/api/orders"),
  getOrder: (id) => request(`/api/orders/${id}`),

  // payment
  createOrder: (body) => request("/api/payment/create-order", { method: "POST", body }),
  verifyPayment: (body) => request("/api/payment/verify", { method: "POST", body }),
};
