import {
	FaGithub,
	FaGithubSquare,
	FaInstagram,
	FaLinkedin,
	FaTelegram
} from 'react-icons/fa'
import type { FC } from 'react'
import type { ISocial } from '../model/types'
import cn from 'classnames'
import { motion } from 'framer-motion'

const links = [
	{ href: 'https://github.com/Kurbre', Icon: FaGithub },
	{ href: 'https://instagram.com/illiya_zmey', Icon: FaInstagram },
	{ href: 'https://t.me/illiya228', Icon: FaTelegram },
	{
		href: 'https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%B7%D0%BC%D0%B5%D0%B9-5a7398215/',
		Icon: FaLinkedin
	}
]

const Social: FC<ISocial> = ({ size = 18, className }) => {
	return (
		<div className={cn('flex gap-3 mt-2.5', className)}>
			{links.map(({ href, Icon }) => (
				<motion.a
					key={href}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					whileHover={{ y: -3, scale: 1.12 }}
					whileTap={{ scale: 0.92 }}
					className='p-2 rounded-xl glass text-zinc-700 dark:text-zinc-200
					hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors'
				>
					<Icon size={size} />
				</motion.a>
			))}
		</div>
	)
}

export default Social
