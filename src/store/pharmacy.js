export default {
  actions: {
    fetchPharmacies() {
      const pharmacies = require('@/assets/pharmacy.json')

      return Object.keys(pharmacies).map(key => ({...pharmacies[key], id: key}))
    }
  }
}