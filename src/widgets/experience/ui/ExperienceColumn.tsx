import type { FC, PropsWithChildren } from 'react'

const ExperienceColumn: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative'>
			<div className=''>
				<div className='w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-gray-700 dark:to-gray-500' />
				<div className='w-0.5 h-full bg-black dark:bg-white absolute left-2.5' />
			</div>
			<div className='flex flex-col gap-3 sm:gap-12'>{children}</div>
		</div>
	)
}

export default ExperienceColumn
