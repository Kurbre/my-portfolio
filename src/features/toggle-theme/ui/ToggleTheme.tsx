import { useTheme } from '../../../shared/theme'

const ToggleTheme = () => {
	const { toggleTheme, isDarkTheme } = useTheme()

	return (
		<div
			className='dark:text-white text-black cursor-pointer'
			onClick={toggleTheme}
		>
			{isDarkTheme ? 'Dark' : 'Light'}
		</div>
	)
}

export default ToggleTheme
