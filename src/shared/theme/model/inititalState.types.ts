import type { Dispatch, SetStateAction } from 'react'

export interface IInitialState {
	isDarkTheme: boolean
	setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}
