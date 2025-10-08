import type { Dispatch, LegacyRef, SetStateAction } from 'react'

export interface IProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	ref: LegacyRef<HTMLDivElement> | undefined
}
