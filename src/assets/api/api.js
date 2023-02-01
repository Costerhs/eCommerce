import axios from "axios";
import { default as modal } from 'sweetalert2';
import { changeObjToForm, setLocal } from "../defFunction/defFunction";

const instance = axios.create({
    baseURL: `https://cryxxen.pythonanywhere.com/`
});


export const userApi = {
    register(data, setIsLoad) {
        data.phone_number = "+" + data.phone_number
        if (data.avatarka["length"] === 0) {
            delete data.avatarka
        } else {
            data.avatarka = data.avatarka[0]
        }
        let newFormData = changeObjToForm(data)
        return instance.post('users/user/', newFormData)
            .then(() => {
                setIsLoad(false)
                return modal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Успешно зарегистрированы.Теперь вы можете войти',
                    showConfirmButton: true
                })
            })
            .catch((el) => {
                setIsLoad(false)
                let errorMess = Object.values(el.response.data)[0][0]
                modal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMess,
                })
            })
    },
    getUser(username) {
        return instance.get('users/user/')
            .then(el => {
                let arrOfUser = el.data
                let user = arrOfUser.find(el => el.username === username)
                setLocal('userId', user.id)
                setLocal('username', user.username)
                setLocal('avatarka', user.avatarka)
            })
    },
    signIn(data, navigate, setIsLoad) {
        return instance.post('token/', data)
            .catch(() => {
                setIsLoad(false)
                modal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Пароль или имя неправильны попробуйте снова!',
                })
            })
            .then(el => {
                setLocal('token', el.data.access)
                this.getUser(data.username)
                    .then(() => {
                        setIsLoad(false)
                        navigate('/')
                    })
            })
    },
}

export const productApi = {
    getAllProduct() {
        return instance.get('products/product')
    }
}