/**
 * 含有 多个接收组件的通知，触发mutationd的调用，从而间接改变state的方法(action) 的对象
 */

import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, SET_ALL_STATUS, REMOVE_ALL_COMPLETED, CHANGE_SHOW_TYPE, REQ_TODOS} from './mutation-types'
import localStorageUtil from '../../static/js/localStorageUtil'
export default {
    addTodo({commit}, todo) {
        //向mutations提交一个请求
        commit(ADD_TODO, {todo})
    },
    removeTodo({commit}, index) {
        commit(REMOVE_TODO, {index})
    },
    updateTodo({commit}, {index, title}) {
        commit(UPDATE_TODO, {index, title})
    },
    setAllstatus({commit}, isCompleted) {
        commit(SET_ALL_STATUS, isCompleted)
    },
    removeAllCompleted({commit}) {
        commit(REMOVE_ALL_COMPLETED)
    },
    changeShowType({commit},type) {
        commit(CHANGE_SHOW_TYPE,{type})
    },
    reqTodos({commit}) {
        const todos = localStorageUtil.getItem('todos')
        commit(REQ_TODOS,todos)
    }
}