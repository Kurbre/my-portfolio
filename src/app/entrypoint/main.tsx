import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '../../shared/theme'
import { HomePage } from '../../pages/home'
import { ScrollProvider } from '../../shared/scroll'
import '../styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<ScrollProvider>
				<HomePage />
			</ScrollProvider>
		</ThemeProvider>
	</StrictMode>
)
