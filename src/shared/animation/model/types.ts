import type { PropsWithChildren } from 'react'

export interface IAnimation extends PropsWithChildren {
	initialPosition: 'left' | 'right' | 'top' | 'bottom'
	initialDistance?: number
	delay?: number
}
