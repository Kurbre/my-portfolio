import { createContext } from 'react'
import type { IInitialState } from './inititalState.types'

export const ThemeContext = createContext<IInitialState>({
	isDarkTheme: false,
	setIsDarkTheme: () => {}
})
