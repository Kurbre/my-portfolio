import { useTheme } from '../../../shared/theme'
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md'
import cn from 'classnames'
import { type JSX, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ToggleTheme = () => {
	const { toggleTheme, isDarkTheme } = useTheme()
	const [icon, setIcon] = useState<JSX.Element>(
		isDarkTheme ? <MdOutlineDarkMode size={18} /> : <MdLightMode size={18} />
	)

	useEffect(() => {
		const timeout = setTimeout(
			() =>
				setIcon(
					isDarkTheme ? (
						<MdOutlineDarkMode size={18} />
					) : (
						<MdLightMode size={18} />
					)
				),
			150
		)

		return () => clearTimeout(timeout)
	}, [isDarkTheme])

	return (
		<motion.div
			className='dark:text-white text-black cursor-pointer w-[80px] h-10
			rounded-full flex items-center p-1 mt-4 glass glow-accent'
			onClick={toggleTheme}
			whileTap={{ scale: 0.95 }}
			role='button'
			aria-label='Toggle theme'
		>
			<motion.div
				layout
				className={cn(
					'bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md',
					isDarkTheme && 'translate-x-9'
				)}
				transition={{ type: 'spring', stiffness: 400, damping: 28 }}
			>
				{icon}
			</motion.div>
		</motion.div>
	)
}

export default ToggleTheme
