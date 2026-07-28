import { Subtitle } from '../../../shared/ui/subtitle'
import { Container } from '../../../shared/ui/container'
import { Section } from '../../../shared/ui/section'
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
import { motion } from 'framer-motion'

const Portfolio = () => {
	const { refs } = useScroll()

	const portfolio = usePortfolio()

	const paginationSliderButtonStyle = `rounded-full glass glow-accent p-3 cursor-pointer
	hidden md:flex items-center justify-center absolute z-20
	text-cyan-600 dark:text-cyan-300`

	return (
		<Section ref={refs.portfolio} tone='muted'>
			<div className='pointer-events-none absolute top-16 right-1/4 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl' />

			<Container>
				<div className='flex items-center flex-col'>
					<ScrollFadeInCenter initialPosition='right' initialDistance={40}>
						<Subtitle position='center' className='-left-7'>
							Портфоліо
						</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='left'
						initialDistance={40}
						delay={0.1}
					>
						<Title position='center' className='mt-2 text-center'>
							Мої роботи та пет-проєкти
						</Title>
					</ScrollFadeInCenter>
				</div>
				<ScrollFadeInCenter
					initialPosition='bottom'
					initialDistance={36}
					delay={0.15}
					className='mt-8 relative md:px-[60px]'
				>
					<motion.button
						whileHover={{ scale: 1.08, y: -2 }}
						whileTap={{ scale: 0.94 }}
						className={cn(
							paginationSliderButtonStyle,
							'slider-button-prev left-0 top-1/2 -translate-y-1/2'
						)}
					>
						<FaArrowLeft size={22} />
					</motion.button>
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
						<div className='slider__pagination flex justify-center gap-2 mt-5' />
					</div>
					<motion.button
						whileHover={{ scale: 1.08, y: -2 }}
						whileTap={{ scale: 0.94 }}
						className={cn(
							paginationSliderButtonStyle,
							'slider-button-next right-0 top-1/2 -translate-y-1/2'
						)}
					>
						<FaArrowRight size={22} />
					</motion.button>
				</ScrollFadeInCenter>
			</Container>
		</Section>
	)
}

export default Portfolio
