import type { FC } from 'react'
import type { IPortfolioData } from '../model/types'
import { IoMdPlanet } from 'react-icons/io'

const PortfolioItem: FC<IPortfolioData> = ({
	url,
	title,
	image,
	description
}) => {
	const urlIframe = url.split('watch?v=').join('embed/')
	const isYoutubeUrl = url.includes('www.youtube.com')

	return (
		<div className='bg-gray-200 dark:bg-gray-600 p-6 md:p-10 lg:p-12 rounded-3xl w-full flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start'>
			{isYoutubeUrl ? (
				<iframe
					src={urlIframe}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
					className='rounded-2xl border-none outline-none flex-1 w-full max-w-full md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 aspect-video'
				/>
			) : (
				<img
					src={image}
					alt='Content image'
					className='rounded-3xl object-cover flex-1 w-full max-w-full md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 aspect-video'
				/>
			)}

			<div className='flex flex-col justify-center items-start relative flex-1 min-w-0'>
				<a
					href={url}
					className='absolute right-0 -top-7 text-blue-500 flex items-center gap-2 mt-2'
				>
					<IoMdPlanet size={16} className='mt-1' />
					Перейти на сайт
				</a>
				<h5 className='font-sans text-lg md:text-xl lg:text-2xl font-bold mb-2 mt-2'>
					{title}
				</h5>
				<p className='font-mono text-sm md:text-md lg:text-lg font-medium'>
					{description.slice(0, 499)}...
				</p>
			</div>
		</div>
	)
}

export default PortfolioItem
