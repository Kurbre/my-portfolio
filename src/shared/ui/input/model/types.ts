import type {
	DetailedHTMLProps,
	InputHTMLAttributes,
	PropsWithChildren
} from 'react'

export interface IInput
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		PropsWithChildren {
	error?: string
}
