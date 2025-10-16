import type { ISkillsItemProps } from './types'
import {
	SiNestjs,
	SiPrisma,
	SiReacthookform,
	SiReactquery,
	SiSass,
	SiShadcnui,
	SiTypeorm,
	SiTypescript
} from 'react-icons/si'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoReact } from 'react-icons/io5'
import { TbApi, TbBrandRedux, TbLetterF } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'

export const skillsData: ISkillsItemProps[] = [
	{
		icon: <RiNextjsFill size={51} />,
		title: 'NextJS'
	},
	{
		icon: <IoLogoReact size={51} />,
		title: 'React'
	},
	{
		icon: <SiTypescript size={51} />,
		title: 'Typescript'
	},
	{
		icon: <RiTailwindCssFill size={51} />,
		title: 'Tailwind'
	},
	{
		icon: <TbBrandRedux size={51} />,
		title: 'Redux'
	},
	{
		icon: <SiReactquery size={51} />,
		title: 'React Query'
	},
	{
		icon: <SiReacthookform size={51} />,
		title: 'React Hook Form'
	},
	{
		icon: <SiShadcnui size={51} />,
		title: 'Shadcn/ui'
	},
	{
		icon: <TbLetterF size={51} />,
		title: 'FSD'
	},
	{
		icon: <SiSass size={51} />,
		title: 'Sass'
	},
	{
		icon: <SiNestjs size={51} />,
		title: 'NestJS'
	},
	{
		icon: <TbApi size={51} />,
		title: 'Rest API'
	},
	{
		icon: <GrGraphQl size={51} />,
		title: 'GraphQL'
	},
	{
		icon: <DiMongodb size={51} />,
		title: 'MongoDB'
	},
	{
		icon: <BiLogoPostgresql size={51} />,
		title: 'PostgresQL'
	},
	{
		icon: <SiPrisma size={51} />,
		title: 'Prisma'
	},
	{
		icon: <SiTypeorm size={51} />,
		title: 'TypeORM'
	}
]
