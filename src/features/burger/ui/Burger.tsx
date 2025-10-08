import HamburgerIcon from '../assets/Hamburger.svg?react'
import { useTheme } from '../../../shared/theme'
import BurgerMenu from './BurgerMenu'
import { useOutside } from '../../../shared/lib/hooks'

const Burger = () => {
	const { isDarkTheme } = useTheme()
	const { ref, isShow, setIsShow } = useOutside(false)

	return (
		<>
			<button
				className='absolute right-8 top-5 cursor-pointer'
				onClick={() => setIsShow(true)}
			>
				<HamburgerIcon fill={isDarkTheme ? '#fff' : '#000'} className='' />
			</button>
			<BurgerMenu ref={ref} isOpen={isShow} setIsOpen={setIsShow} />
		</>
	)
}

export default Burger
