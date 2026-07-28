import HamburgerIcon from '../assets/Hamburger.svg?react'
import { useTheme } from '../../../shared/theme'
import BurgerMenu from './BurgerMenu'
import { useOutside } from '../../../shared/lib/hooks'
import { motion } from 'framer-motion'

const Burger = () => {
	const { isDarkTheme } = useTheme()
	const { ref, isShow, setIsShow } = useOutside(false)

	return (
		<>
			<motion.button
				className='absolute right-6 top-5 z-30 cursor-pointer glass rounded-xl p-2.5 glow-accent'
				onClick={() => setIsShow(true)}
				whileHover={{ scale: 1.06 }}
				whileTap={{ scale: 0.94 }}
				aria-label='Open menu'
			>
				<HamburgerIcon fill={isDarkTheme ? '#fff' : '#000'} />
			</motion.button>
			<BurgerMenu ref={ref} isOpen={isShow} setIsOpen={setIsShow} />
		</>
	)
}

export default Burger
