<template>
  <div class="content">
    <h1 class="content__head">1: Select Legal Entity</h1>
    <span id="entityName"></span>
    <table>
      <thead>
        <tr>
          <td class=""></td>
          <td>Legal Entity</td>
          <td>Street</td>
          <td>City</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="entity in entities" :key="entity.id" :value="entity.id" class="row" @click="onTableClickHandler">
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
          </td>
          <td>{{entity.legalEntityName}}</td>
          <td>{{entity.address1 + ' ' + entity.address2}}</td>
          <td>{{entity.city}}</td>
          <td>{{entity.country}}</td>
        </tr>
      </tbody>
    </table>
    <button class="content__button" @click.prevent="selectPharmacy">Select Pharmacies</button>
</div>
</template>

<script>
export default {
  name: 'legalentity',
  data: () => ({
    entities: null,
    rows: null
  }),
  async mounted() {
    this.entities = await this.$store.dispatch('fetchEntities')
  },
  methods: {
    onTableClickHandler() {
      const rows = document.querySelectorAll('.row')
      for (let row of rows) {
        row.onclick = function() {
          for (let children of rows) {
              children.classList.remove('active')
          }
          this.classList.toggle('active')
        }
      }
    },
    selectPharmacy() {
      console.log('Button clicked!')
    }
  }
}
</script>
