import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '../../shared/theme'
import { HomePage } from '../../pages/home'
import '../styles/index.css'
import { ScrollProvider } from '../../shared/scroll'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<ScrollProvider>
				<HomePage />
			</ScrollProvider>
		</ThemeProvider>
	</StrictMode>
)
