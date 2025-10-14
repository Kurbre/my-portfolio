import { forwardRef } from 'react'
import type { IProps } from '../model/types'
import cn from 'classnames'

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ children, className, ...props }, ref) => {
		return (
			<button
				className={cn(
					`cursor-pointer min-w-[135px] flex justify-center items-center 
					bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-gray-700 dark:to-gray-500 
					transition h-12 font-mono font-semibold text-lg rounded-lg duration-300 
					ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:brightness-110 px-4`,
					className
				)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'
