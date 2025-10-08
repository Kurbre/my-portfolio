import { createContext } from 'react'
import type { IScrollContextType } from './types'

export const ScrollContext = createContext<IScrollContextType | undefined>(
	undefined
)
