import { ThemeContext } from '../model/ThemeContext'
import { type FC, type PropsWithChildren, useEffect, useState } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		const stored = localStorage.getItem('isDarkTheme')
		const isDarkModeOS = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		return stored ? JSON.parse(stored) : isDarkModeOS
	})

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkTheme)

		localStorage.setItem('isDarkTheme', String(isDarkTheme))
	}, [isDarkTheme])

	return (
		<ThemeContext.Provider value={{ setIsDarkTheme, isDarkTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
