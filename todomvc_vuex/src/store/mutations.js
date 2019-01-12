/**
 * 含有 多个由action触发直接更新state的方法（mutation） 的对象
 */
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, SET_ALL_STATUS, REMOVE_ALL_COMPLETED, CHANGE_SHOW_TYPE, REQ_TODOS} from './mutation-types'
export default {
    [ADD_TODO] (state, {todo}) {
        state.todos.push(todo)
    },
    [REMOVE_TODO] (state, {index}) {
        state.todos.splice(index, 1)
    },
    [UPDATE_TODO] (state, {index, title}) {
        state.todos[index].title = title
    },
    [SET_ALL_STATUS] (state, isCompleted) {
        state.todos.forEach(todo => todo.completed = isCompleted)
    },
    [REMOVE_ALL_COMPLETED] (state) {
        state.todos = state.todos.filter(todo => !todo.completed)
    },
    [CHANGE_SHOW_TYPE] (state, {type}) {
        state.type = type
    },
    [REQ_TODOS] (state, todos) {
        state.todos = todos
    }
}