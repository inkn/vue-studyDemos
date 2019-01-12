export default {
  getRemainCount(state) {
    return state.todos.filter(todo => !todo.completed).length
  },
  isAllCompleted(state) {
    return state.todos.filter(todo => !todo.completed).length === 0
  },
  todoList(state) {
    const todos = state.todos
    const type = state.type
    switch (type) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
}