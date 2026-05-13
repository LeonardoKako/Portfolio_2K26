import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.portfolio.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionar interceptadores aqui se necessário no futuro
// api.interceptors.request.use((config) => ...)

export default api;
