import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../shared/lib/firebase'
import type { IPortfolioData } from '../types'

export const usePortfolio = () => {
	const [portfolio, setPortfolio] = useState<IPortfolioData[]>([])

	useEffect(() => {
		const fetchPortfolio = async () => {
			const query = await getDocs(collection(db, 'portfolio'))
			const data = query.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as IPortfolioData[]
			setPortfolio(data)
		}

		fetchPortfolio()
	}, [])

	return portfolio
}
