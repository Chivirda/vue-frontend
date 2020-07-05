export default {
  state: {
    currentPharmacies: []
  },
  mutations: {
    setcurrentPharmacies(state, currentPharmacies) {
      for (let pharmacy of currentPharmacies) {
        state.currentPharmacies.push(pharmacy)
      }
    }
  },
  actions: {
    fetchPharmacies() {
      const pharmacies = require('@/assets/pharmacy.json')

      return Object.keys(pharmacies).map(key => ({...pharmacies[key], id: pharmacies[key].pharmaID}))
    },
    setcurrentPharmacies({commit}, currentPharmacies) {
      commit('setcurrentPharmacies', currentPharmacies)
    }
  },
  getters: {
    currentPharmacies: s => s.currentPharmacies
  }
}