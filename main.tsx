import { StrictMode } from 'react'
import App from './src/app/App'
import { createRoot } from 'react-dom/client'
import 'swiper/css'
import 'swiper/css/pagination'
import './src/app/styles/index.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
