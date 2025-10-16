import { Subtitle } from '../../../shared/ui/subtitle'
import { Container } from '../../../shared/ui/container'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import PortfolioItem from './PortfolioItem'
import { usePortfolio } from '../model/hooks/usePortfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import cn from 'classnames'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ScrollFadeInCenter } from '../../../shared/animation'

const Portfolio = () => {
	const { refs } = useScroll()

	const portfolio = usePortfolio()

	const paginationSliderButtonStyle = `rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 
    dark:from-gray-700 dark:to-gray-500 p-3 cursor-pointer duration-300 
    ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:brightness-110 hidden md:block 
    absolute transition`

	return (
		<section ref={refs.portfolio}>
			<Container>
				<div className='flex items-center flex-col'>
					<ScrollFadeInCenter initialPosition='right' initialDistance={350}>
						<Subtitle position='center' className='-left-7'>
							Портфолио
						</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='left' initialDistance={350}>
						<Title position='center' className='mt-1 text-center'>
							Мои работы и пет-проекты
						</Title>
					</ScrollFadeInCenter>
				</div>
				<div className='mt-6 relative md:px-[60px]'>
					<button
						className={cn(
							paginationSliderButtonStyle,
							'slider-button-prev left-0 top-1/2 z-20'
						)}
					>
						<FaArrowLeft size={24} />
					</button>
					<div className='w-full'>
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							speed={700}
							pagination={{ el: '.slider__pagination', clickable: true }}
							loop={true}
							autoHeight={true}
							navigation={{
								nextEl: '.slider-button-next',
								prevEl: '.slider-button-prev'
							}}
						>
							{portfolio.map(item => (
								<SwiperSlide key={item.id + item.url}>
									<PortfolioItem {...item} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className='slider__pagination flex justify-center mt-3' />
					</div>
					<button
						className={cn(
							paginationSliderButtonStyle,
							'slider-button-next right-0 top-1/2 z-20'
						)}
					>
						<FaArrowRight size={24} />
					</button>
				</div>
			</Container>
		</section>
	)
}

export default Portfolio
