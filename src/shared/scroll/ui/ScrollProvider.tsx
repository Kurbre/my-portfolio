import { type FC, type PropsWithChildren, type RefObject, useRef } from 'react'
import { ScrollContext } from '../model/ScrollContext'
import { scrollData } from '../model/data'
import type { SectionsKeys } from '../model/types'

export const ScrollProvider: FC<PropsWithChildren> = ({ children }) => {
	const refs = scrollData.reduce(
		(acc, key) => {
			acc[key] = useRef<HTMLDivElement>(null)
			return acc
		},
		{} as Record<SectionsKeys, RefObject<HTMLDivElement | null>>
	)

	const scrollToComponent = (key: SectionsKeys) => {
		refs[key].current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<ScrollContext.Provider value={{ scrollToComponent, refs }}>
			{children}
		</ScrollContext.Provider>
	)
}
