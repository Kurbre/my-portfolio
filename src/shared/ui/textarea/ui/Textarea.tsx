import { forwardRef } from 'react'
import cn from 'classnames'
import type { ITextarea } from '../models/types'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ children, className, error, ...props }, ref) => {
		const id = Date.now().toString(36) + Math.random().toString(36).slice(2)

		return (
			<div className='relative w-full'>
				<label
					htmlFor={id}
					className='absolute -top-3.5 left-3.5 bg-white dark:bg-gray-700 px-2 whitespace-nowrap'
				>
					{children}
				</label>
				<textarea
					id={id}
					className={cn(
						`border-black dark:border-white border px-5 py-3.5 flex items-center outline-none 
						w-full h-[190px] resize-none`,
						className
					)}
					ref={ref}
					{...props}
				/>
				{error && (
					<span className='dark:text-red-500 text-red-700'>{error}</span>
				)}
			</div>
		)
	}
)

export default Textarea
