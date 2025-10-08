import type { Dispatch, LegacyRef, SetStateAction } from 'react'
import type { SectionsKeys } from '../../../shared/scroll'

export interface IProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	ref: LegacyRef<HTMLDivElement> | undefined
}

export interface ILinksData {
	label: string
	href: SectionsKeys
}
