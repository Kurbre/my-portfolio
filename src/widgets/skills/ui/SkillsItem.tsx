import type { FC } from 'react'
import type { ISkillsItemProps } from '../data/types'

const SkillsItem: FC<ISkillsItemProps> = ({ title, icon }) => {
	return (
		<div
			className='shadow-xl w-[135px] h-[135px] rounded-3xl flex flex-col
		items-center justify-center bg-gray-200 dark:bg-gray-600 p-1'
		>
			{icon}
			<span className='mt-4 text-lg text-center font-mono'>{title}</span>
		</div>
	)
}

export default SkillsItem
