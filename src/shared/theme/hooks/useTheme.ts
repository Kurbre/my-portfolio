import { useContext } from 'react'
import { ThemeContext } from '../model/ThemeContext'

export const useTheme = () => {
	const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

	const toggleTheme = () => setIsDarkTheme(prev => !prev)

	return {
		toggleTheme,
		isDarkTheme
	}
}
