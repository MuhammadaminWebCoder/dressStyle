import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryClientProvider client={QueryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
)
