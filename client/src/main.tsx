import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.tsx';
import AppRouter from './AppRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>,
)
