import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

export interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		PropsWithChildren {}
