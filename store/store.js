import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  current_slide: 0,
  selectedOption: 'เรียงตามประเภท'
})

export const mutations = {
  CURRENT_SLIDE(state, payload) {
    state.current_slide = payload
  },
  SELECTED_OPTION(state, payload) {
    state.selectedOption = payload
  }
}

export const actions = {
  setCurrentSlide({ commit }, payload) {
    commit('CURRENT_SLIDE', payload)
  },
  setSelectedOption({ commit }, payload) {
    commit('SELECTED_OPTION', payload)
  }
}
