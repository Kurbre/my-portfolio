import { z } from 'zod'

export const formSchema = z.object({
	name: z.string().min(2, 'Минимум 2 символа').max(30, 'Максимум 30 символов'),
	email: z.string().email('Некорректный email'),
	message: z.string().min(6, 'Минимум 6 символов')
})

export type IFormData = z.infer<typeof formSchema>
