<template>
  <div class="content">
    <h1 class="content__head">2: Select Pharmacies</h1>
    <span>for {{name}}</span>
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Pharmacy</td>
          <td>Street</td>
          <td>City</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="pharma in pharmacies" v-if="pharma.legalEntityID === entityId" :class="{active: isActive.includes(pharma.id)}" @click="onTableClickHandler(pharma, isActive)" :key="pharma.id" :value="pharma.id" class="row">
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
          </td>
          <td>{{pharma.pharmaName}}</td>
          <td>{{pharma.address_1 + ' ' + pharma.address_2}}</td>
          <td>{{pharma.city}}</td>
          <td>{{pharma.country}}</td>
        </tr>
      </tbody>
    </table>
    <button :disabled="disableButton" class="content__button" @click.prevent="enterTerms(pharmacies, isActive, currentPharmacies)">Enter Contract Terms</button>
    <button class="content__button-back" @click.prevent="$router.go(-1)">Back</button>
  </div>
</template>
<script>
export default {
  name: 'pharmacies',
  data: () => ({
    pharmacies: {},
    isActive: [],
    disableButton: true,
    currentPharmacies: []
  }),
  async mounted() {
    this.pharmacies = await this.$store.dispatch('fetchPharmacies')
  },
  methods: {
    onTableClickHandler(pharma, isActive) {
      if (isActive.includes(pharma.id)) {
        isActive.splice(isActive.indexOf(pharma.id), 1)
      } else {
        isActive.push(pharma.id)
      }

      if (isActive.length !== 0) {
        this.disableButton = false
      }
    },
    enterTerms(pharmacies, isActive, currentPharmacies) {
      for (let id of isActive) {
        for (let pharma of pharmacies) {
          if (pharma.pharmaID === id) {
            currentPharmacies.push({
              id,
              name: pharma.pharmaName,
              address: `${pharma.address_1} ${pharma.address_2}`
            })
          }
        }
      }

      this.$store.dispatch('setcurrentPharmacies', currentPharmacies)
      this.$router.push('terms')
    }
  },
  computed: {
    name() {
      return this.$store.getters.currentEntity.name
    },
    entityId() {
      return this.$store.getters.currentEntity.id
    }
  }
}
</script>