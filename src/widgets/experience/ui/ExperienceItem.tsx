import type { FC } from 'react'
import type { IExperienceItemsProps } from '../model/types'
import { Subtitle } from '../../../shared/ui/subtitle'

const ExperienceItem: FC<IExperienceItemsProps> = ({
	icon,
	title,
	subtitle,
	description
}) => {
	return (
		<div className='max-w-[375px] ml-10 sm:ml-21 mt-6'>
			<div className='flex gap-5 items-center'>
				<div className='relative'>
					<Subtitle className='top-2'>{icon}</Subtitle>
					<div className='h-0.5 absolute  bg-black dark:bg-white top-1/2 -left-7 sm:-left-18.5 right-8' />
				</div>
				<div>
					<h5 className='text-md font-bold'>{title}</h5>
					<span className='text-sm'>{subtitle}</span>
				</div>
			</div>
			<p className='mt-3'>{description}</p>
		</div>
	)
}

export default ExperienceItem
