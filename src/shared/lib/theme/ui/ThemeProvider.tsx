import { ThemeContext } from '../model/ThemeContext.ts'
import { type FC, type PropsWithChildren, useEffect, useState } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		const stored = localStorage.getItem('isDarkTheme')

		return stored ? JSON.parse(stored) : false
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
