import * as yup from 'yup'

export const signInUserSchema = yup.object().shape({
    username: yup.string().min(2).max(32).required(),
    password: yup.string().min(4).max(32).required()
})

