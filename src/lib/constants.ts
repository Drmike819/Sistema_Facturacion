// Rutas para peticiones
export const AUTH_ENDPOINTS = {
  LOGIN: '/users/login/',
  REGISTER: '/users/register/',
  REFRESH: '/token/refresh/',
  LOGOUT: '/users/logout/',
} as const;

// Rutas de navegacion
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PRODUCTOS: '/products',
  CARRITO: '/cart',
  NEWPRODUCT: '/products/new',
  FACTURACION: '/dashboard/facturacion',
  ESTADISTICAS: '/dashboard/estadisticas',
} as const;