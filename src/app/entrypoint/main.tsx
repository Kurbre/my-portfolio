import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../../pages/home/home'
import { ThemeProvider } from '../../shared/lib/theme'
import '../styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	</StrictMode>
)
