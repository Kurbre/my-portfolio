import type {
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren
} from 'react'

export interface IProps
	extends DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>,
		PropsWithChildren {
	position?: 'left' | 'center' | 'right'
}
