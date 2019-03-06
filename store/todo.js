export const state = () => {
  return {
    todos: [],
    currentTodo: {
      id: '',
      value: '',
      status: ''
    }
  }
}

export const getters = {
  todosLength: state => {
    return state.todos.length
  },
  doneTodos: state => {
    return state.todos.filter(o => o.status === 'done')
  },
  doneTodosLength: (state, getters) => {
    return getters.doneTodos.length
  },
  notDoneTodosLength: (state, getters) => {
    return getters.todosLength - getters.doneTodosLength
  }
}

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  SET_TODO(state, todo) {
    const indexToUpdate = state.todos.findIndex(o => o.id === todo.id)
    state.todos.splice(indexToUpdate, 1, todo)
  },
  SET_CURRENT_TODO(state, todo) {
    state.currentTodo = todo
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  RM_TODO(state, todoId) {
    const indexToDelete = state.todos.findIndex(o => o.id === todoId)
    state.todos.splice(indexToDelete, 1)
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
  },

  async removeTodo({ commit }, todoId) {
    try {
      await this.$axios.$delete('http://localhost:3001/todos/' + todoId)
    } catch (e) {
      throw e
    }
    commit('RM_TODO', todoId)
  },
  setCurrentTodo({ commit }, todo) {
    commit('SET_CURRENT_TODO', todo)
  },

  async updateTodo({ commit }, todo) {
    try {
      await this.$axios.$put('http://localhost:3001/todos/' + todo.id, {
        value: todo.value,
        status: todo.status
      })
    } catch (e) {
      throw e
    }
    commit('SET_TODO', todo)
  }
}
