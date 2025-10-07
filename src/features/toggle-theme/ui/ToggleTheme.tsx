import {useTheme} from '../../../shared/theme'
import {MdLightMode, MdOutlineDarkMode} from 'react-icons/md'
import cn from 'classnames'
import {type JSX, useEffect, useState} from 'react'

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
			100
		)

		return () => clearTimeout(timeout)
	}, [isDarkTheme])

	return (
		<div
			className='dark:text-white text-black cursor-pointer w-[80px] h-10 border border-gray-700
			rounded-full flex flex-items p-1'
			onClick={toggleTheme}
		>
			<div
				className={cn(
					'bg-white dark:bg-gray-700 w-8 flex items-center justify-center ' +
						'rounded-full ease-in-out duration-300',
					isDarkTheme && 'translate-x-9'
				)}
			>
				{icon}
			</div>
		</div>
	)
}

export default ToggleTheme
