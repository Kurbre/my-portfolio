import {Input} from '../../../shared/ui/input'
import {Button} from '../../../shared/ui/button'
import {Textarea} from '../../../shared/ui/textarea'
import {useForm} from 'react-hook-form'
import {useFocusFormInput} from '../models/hooks/useFocusFormInput'
import {formSchema, type IFormData} from '../models/schema'
import {zodResolver} from '@hookform/resolvers/zod'
import {usePostWebHook} from '../models/hooks/usePostWebHook'

const Form = () => {
    const formRef = useFocusFormInput()
    const {register, handleSubmit, formState} = useForm<IFormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange'
    })
    const {sendRequest, isLoading} = usePostWebHook()

    const submitHandler = async (data: IFormData) => {
        await sendRequest(data)
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} ref={formRef}>
            <div className='mt-8 flex flex-wrap sm:flex-nowrap gap-8 md:gap-6'>
                <Input
                    {...register('name')}
                    type='name'
                    error={formState.errors.name?.message}
                >
                    Ваше ім’я
                </Input>
                <Input
                    {...register('email')}
                    type='email'
                    error={formState.errors.email?.message}
                >
                    Ваша пошта
                </Input>
            </div>
            <Textarea
                className='mt-8'
                {...register('message')}
                error={formState.errors.message?.message}
            >
                Ваше повідомлення
            </Textarea>
            <Button className='mt-7 flex mx-auto sm:mx-0' disabled={isLoading}>
                Надіслати повідомлення
            </Button>
        </form>
    )
}

export default Form
