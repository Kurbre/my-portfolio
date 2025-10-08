import type { FC, PropsWithChildren } from 'react'

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative'>
			<div className='w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-gray-700 dark:to-gray-500' />
			<span className='font-bold text-lg font-mono dark:text-white absolute left-3 top-0.5'>
				{children}
			</span>
		</div>
	)
}

export default Subtitle
