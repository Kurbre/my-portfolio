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
					className='absolute -top-3 left-3.5 z-10 px-2 whitespace-nowrap text-sm font-medium
					bg-white dark:bg-zinc-900 tracking-tight'
				>
					{children}
				</label>
				<textarea
					id={id}
					className={cn(
						`glass rounded-xl px-5 py-3.5 flex items-center outline-none
						w-full h-[190px] resize-none
						focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25
						placeholder:text-zinc-400 dark:placeholder:text-zinc-500`,
						className
					)}
					ref={ref}
					{...props}
				/>
				{error && (
					<span className='text-sm mt-1 block text-red-600 dark:text-red-400'>
						{error}
					</span>
				)}
			</div>
		)
	}
)

export default Textarea
