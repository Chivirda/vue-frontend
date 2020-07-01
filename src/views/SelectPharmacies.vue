<template>
  <div class="content">
    <h1 class="content__head">2: Select Pharmacies</h1>
    <span id="entityName">for {}</span>
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
        <tr v-for="pharma in pharmacies" :key="pharma.id" :value="pharma.id" class="row" :class="{active: isActive === pharma.id}" @click="onTableClickHandler(pharma, currentEntity)">
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
          </td>
          <td>{{pharma.legalEntityName}}</td>
          <td>{{pharma.address1 + ' ' + pharma.address2}}</td>
          <td>{{pharma.city}}</td>
          <td>{{pharma.country}}</td>
        </tr>
      </tbody>
    </table>
    <button class="content__button" @click.prevent="">Enter Contract Terms</button>
    <button class="content__button-back" @click.prevent="$router.go(-1)">Back</button>
  </div>
</template>
<script>
export default {
  name: 'pharmacies',
  data: () => ({
    pharmacies: null
  }),
  mounted: {
    },
  methods: {
    onTableClickHandler() {

    }
  }
}
</script>