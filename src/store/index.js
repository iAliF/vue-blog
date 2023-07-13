import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        isAuthenticated: false,
        token: null
    },
    getters: {},
    mutations: {
        login(state, token) {
            state.isAuthenticated = true
            state.token = token
            axios.defaults.headers.common['Authorization'] = `Token ${token}`
            localStorage.setItem("token", token)
        },
        logout(state) {
            state.isAuthenticated = false
            state.token = ''
            localStorage.removeItem("token")
            axios.defaults.headers.common['Authorization'] = ""
        }
    },
    actions: {
        onStart(context) {
            let token = localStorage.getItem("token");

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Token ${token}`
                axios
                    .get("auth/users/me/")
                    .then(_ => {
                        context.commit("login", token)
                    })
                    .catch(error => {
                        console.log(error.response.data.detail)
                        context.commit("logout")
                    })
            } else {
                context.commit("logout")
            }
        },
    },
    modules: {}
})
