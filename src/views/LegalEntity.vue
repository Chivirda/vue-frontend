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
        <tr v-for="entity in entities" :key="entity.id" :value="entity.id" class="row" :class="{active: isActive === entity.id}" @click="onTableClickHandler(entity)">
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
    isActive: false
  }),
  async mounted() {
    this.entities = await this.$store.dispatch('fetchEntities')
  },
  methods: {
    onTableClickHandler(entity) {

      this.isActive = entity.id
      console.log('Cilcked', entity.legalEntityName)

    },
    selectPharmacy() {
      console.log('Button clicked!')
    }
  }
}
</script>
