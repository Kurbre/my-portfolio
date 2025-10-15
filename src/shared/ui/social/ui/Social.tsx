import { FaGithub, FaGithubSquare, FaInstagram, FaTelegram } from 'react-icons/fa'
import type { FC } from 'react'
import type { ISocial } from '../model/types'
import cn from 'classnames'

const Social: FC<ISocial> = ({ size = 18, className }) => {
	return (
		<div className={cn('flex gap-3 mt-2.5', className)}>
			<a rel='stylesheet' href='https://github.com/Kurbre' target='_blank'>
				<FaGithub size={size} />
			</a>
			<a rel='stylesheet' href='https://github.com/Marald12' target='_blank'>
				<FaGithubSquare size={size} />
			</a>
			<a
				rel='stylesheet'
				href='https://instagram.com/illiya_zmey'
				target='_blank'
			>
				<FaInstagram size={size} />
			</a>
			<a rel='stylesheet' href='https://t.me/illiya228' target='_blank'>
				<FaTelegram size={size} />
			</a>
		</div>
	)
}

export default Social
