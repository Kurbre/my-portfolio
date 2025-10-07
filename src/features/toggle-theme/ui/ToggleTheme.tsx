import { useTheme } from '../../../shared/lib/theme'

const ToggleTheme = () => {
	const { toggleTheme, isDarkTheme } = useTheme()

	return (
		<div className='text-white cursor-pointer' onClick={toggleTheme}>
			{isDarkTheme ? 'Dark' : 'Light'}
		</div>
	)
}

export default ToggleTheme
