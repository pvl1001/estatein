import App from './src/app/App'
import './src/shared/lib/utils/globalUtils'
import { createRoot } from 'react-dom/client'
import 'swiper/css'
import './src/app/styles/index.scss'

createRoot(document.getElementById('root')!).render(<App />)
