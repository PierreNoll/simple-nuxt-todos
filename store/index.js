export const state = () => {
  return {
    dialog: false
  }
}

export const mutations = {
  SET_DIALOG(state, value) {
    state.dialog = value
  }
}

export const actions = {
  setDialog({ commit }, value) {
    commit('SET_DIALOG', value)
  }
}
