/*
import {USER_SIGNIN, USER_SIGNOUT,} from './types'
import getters from './getters'
import Vue from 'vue'

const state = {
    user:JSON.parse(localStorage.getItem('user')) || {},
    //user:JSON.parse(sessionStorage.getItem('user')) || {},

}
const mutations  = {
    [USER_SIGNIN](state,from){
        if(state.user==undefined){
            state.user={}
        }
        localStorage.setItem('user', JSON.stringify(from))
        //sessionStorage.setItem('user', JSON.stringify(from))
        Object.assign(state.user, from)
    },
    [USER_SIGNOUT](state){
        localStorage.removeItem('user')
        //sessionStorage.removeItem('user')
        Object.keys(state).forEach(k => Vue.delete(state, k))
    }
}

export default {
    state,
    mutations,
    getters
}
*/

