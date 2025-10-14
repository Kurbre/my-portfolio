import { useState } from 'react'
import type { IFormData } from '../schema'
import axios, { type AxiosError } from 'axios'
import type { ResponseTelegramError } from '../types.ts'

export const usePostWebHook = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<any>()
	const [error, setError] = useState<any>()

	const sendRequest = async (data: IFormData) => {
		setIsLoading(true)
		setError(null)

		try {
			const request = await axios.post(
				'https://api.telegram.org/bot8293423918:AAGmWmjvGLTOg-Jc83DGZMGrLQOw_bFfF0c/sendMessage',
				{
					chat_id: '821570547',
					text: `Имя: ${data.name}\nEmail: ${data.email}\nСообщение:\n${data.message}`
				}
			)

			setData(request.data)
		} catch (err: any) {
			const axiosError = err as AxiosError<ResponseTelegramError>
			const error = axiosError.response?.data.description
			if (error) {
				setError(error)
			} else setError('Request error')
			throw axiosError
		} finally {
			setIsLoading(false)
		}
	}

	return { sendRequest, error, isLoading, data }
}
