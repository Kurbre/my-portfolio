import type { DetailedHTMLProps, PropsWithChildren, TextareaHTMLAttributes } from 'react'

export interface ITextarea
	extends DetailedHTMLProps<
			TextareaHTMLAttributes<HTMLTextAreaElement>,
			HTMLTextAreaElement
		>,
		PropsWithChildren {
	error?: string
}
