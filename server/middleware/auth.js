import jwt from "jsonwebtoken";

/** Reads "Authorization: Bearer <token>" and returns the decoded payload, or null. */
function readToken(req) {
  const h = req.headers.authorization || "";
  if (!h.startsWith("Bearer ")) return null;
  try {
    return jwt.verify(h.slice(7), process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

/** Hard auth: 401 if no valid token. */
export function auth(req, res, next) {
  const payload = readToken(req);
  if (!payload) return res.status(401).json({ error: "Authentication required" });
  req.user = payload; // { id, email }
  next();
}

/** Soft auth: attaches req.user if logged in, but allows guests through. */
export function optionalAuth(req, _res, next) {
  req.user = readToken(req) || null;
  next();
}
