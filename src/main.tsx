import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './query/ReactQueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ReactQueryProvider>
            <App />
        </ReactQueryProvider>
    </BrowserRouter>
)
