import { Subtitle } from '../../../shared/ui/subtitle'
import { Container } from '../../../shared/ui/container'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Slider from 'react-slick'
import PortfolioItem from './PortfolioItem'
import { useRef } from 'react'
import { usePortfolio } from '../model/hooks/usePortfolio'

const Portfolio = () => {
	const { refs } = useScroll()
	const sliderRef = useRef<Slider>(null)

	const portfolio = usePortfolio()

	const paginationSliderButtonStyle = `rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 
						dark:from-gray-700 dark:to-gray-500 p-3 cursor-pointer duration-300 
					ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:brightness-110 hidden xl:block`

	return (
		<section ref={refs.portfolio}>
			<Container>
				<div className='flex items-center flex-col'>
					<Subtitle position='center' className='-left-7'>
						Портфолио
					</Subtitle>
					<Title position='center' className='mt-1 text-center'>
						Мои работы и пет-проекты
					</Title>
				</div>
				<div className='mt-12 relative w-full'>
					<button
						className={`absolute -left-20 top-1/2 ${paginationSliderButtonStyle}`}
						onClick={() => sliderRef?.current?.slickPrev()}
					>
						<FaArrowLeft size={24} />
					</button>
					<Slider
						dots={true}
						infinite={true}
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						arrows={false}
						ref={sliderRef}
						className='w-full'
					>
						{portfolio.length > 0 &&
							portfolio.map(item => (
								<PortfolioItem key={item.id + item.url} {...item} />
							))}
					</Slider>
					<button
						className={`absolute -right-20 top-1/2 ${paginationSliderButtonStyle}`}
						onClick={() => sliderRef?.current?.slickNext()}
					>
						<FaArrowRight size={24} />
					</button>
				</div>
			</Container>
		</section>
	)
}

export default Portfolio
