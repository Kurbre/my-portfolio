import type { FC, PropsWithChildren } from 'react'

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative'>
			<div className='w-8 h-8 rounded-full bg-amber-500 dark:bg-neutral-700' />
			<span className='font-bold text-lg font-mono dark:text-white absolute left-3 top-0.5'>
				{children}
			</span>
		</div>
	)
}

export default Subtitle
