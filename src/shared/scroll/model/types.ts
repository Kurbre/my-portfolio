import { scrollData } from './data'
import type { RefObject } from 'react'

export type SectionsKeys = (typeof scrollData)[number]

export interface IScrollContextType {
	refs: Record<SectionsKeys, RefObject<HTMLDivElement | null>>
	scrollToComponent: (key: SectionsKeys) => void
}
