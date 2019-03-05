export const state = () => {
  return {
    todos: []
  }
}

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async fetchTodos({ commit }) {
    const todos = await this.$axios.$get('http://localhost:3001/todos')
    commit('SET_TODOS', todos)
  }
}
