import axios from "axios";
import { default as modal } from 'sweetalert2';
import { changeObjToForm, setLocal } from "../defFunction/defFunction";

const instance = axios.create({
    baseURL: `https://cryxxen.pythonanywhere.com/`
});
let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }





export const userApi = {
    register(data, setIsLoad) {
        data.phone_number = "+" + data.phone_number
        if (data.avatarka["length"] === 0) delete data.avatarka
        else data.avatarka = data.avatarka[0]

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
            }).catch((el) => {
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
                setLocal('refresh', el.data.refresh)
                this.getUser(data.username)
                    .then(() => {
                        setIsLoad(false)
                        navigate('/')
                        window.location.reload()
                    })
            })
    },
    getUserById(id) {
        return instance.get(`users/user/${id}/`)
    }
}


export const productApi = {
    getAllProduct() {
        return instance.get('products/product')
    },
    postFavorite(id) {
        const product = { "product": id }

        return instance.post(`favorites/`, product, { headers: header })
    },
    getCategory() {
        return instance.get('categories/category/')
    },
    getProductsOfCategory(id) {
        return instance.get(`categories/category/${id}/`)
            .then((el) => {
                console.log(el)
            })
    },
    getFavorites() {
        return instance.get('favorites/', { headers: header })
    },
    delFavorite(id) {
        return instance.delete('favorites/' + id + '/', { headers: header })
    },
    getBasket() {
        return instance.get('baskets/', { headers: header })
    },
    addBasket(id) {
        let obj = {
            "products": [
                String(id)
            ],
            "is_active": true
        }
        return instance.post('baskets/', obj, { headers: header })
    },
    deleteBasket(id) {
        return instance.delete(`baskets/${id}/`, { headers: header })
    }
}


instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            modal.fire({
                position: 'center',
                icon: 'error',
                title: 'Произошла ошибка! Пожалуйста попробуйте снова',
                showConfirmButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    instance.post('token/refresh/', { "refresh": `${localStorage.getItem('refresh')}` })
                        .then((el) => {
                            setLocal('token', el.data.access)
                            window.location.reload()
                        })

                }
            })
        }
        return Promise.reject(error);
    },
);