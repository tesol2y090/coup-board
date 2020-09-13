import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  current_slide: 0
})

export const mutations = {
  CURRENT_SLIDE(state, payload) {
    state.current_slide = payload
  }
}

export const actions = {
  setCurrentSlide({ commit }, payload) {
    commit('CURRENT_SLIDE', payload)
  }
}
