import type { FC, PropsWithChildren } from 'react'

const ExperienceColumn: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative'>
			<div>
				<div className='w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 shadow-lg shadow-cyan-400/50 ring-4 ring-white/40 dark:ring-white/10' />
				<div className='w-0.5 h-full bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-500/30 absolute left-2.5 top-6' />
			</div>
			<div className='flex flex-col gap-3 sm:gap-10'>{children}</div>
		</div>
	)
}

export default ExperienceColumn
