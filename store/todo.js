export const state = () => {
  return {
    todos: []
  }
}

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  }
}

export const actions = {
  async fetchTodos({ commit }) {
    const todos = await this.$axios.$get('http://localhost:3001/todos')
    commit('SET_TODOS', todos)
  },
  async createTodo({ commit }, todo) {
    const id = Math.floor(Math.random() * 10000000)
    try {
      await this.$axios.$post('http://localhost:3001/todos', {
        ...todo,
        id: id
      })
    } catch (e) {
      throw e
    }
    commit('ADD_TODO', {
      ...todo,
      id: id
    })
  }
}
