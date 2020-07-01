<template>
  <div class="content">
    <h1 class="content__head">1: Select Legal Entity</h1>
    <span id="entityName"></span>
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Legal Entity</td>
          <td>Street</td>
          <td>City</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="entity in entities" :key="entity.id" :value="entity.id" class="row" :class="{active: isActive === entity.id}" @click="onTableClickHandler(entity, currentEntity)">
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
    <router-link tag="button" :disabled="disableButton" class="content__button" @click.prevent="selectPharmacy(currentEntity)" :to="'/pharmacy'">Select Pharmacies</router-link>
</div>
</template>

<script>
export default {
  name: 'legalentity',
  data: () => ({
    entities: null,
    isActive: false,
    currentEntity: {
      id: null,
      name: ''
    },
    disableButton: true
  }),
  async mounted() {
    this.entities = await this.$store.dispatch('fetchEntities')
  },
  methods: {
    onTableClickHandler(entity, currentEntity) {
      this.isActive = entity.id
      this.currentEntity.id = entity.id
      this.currentEntity.name = entity.legalEntityName
      this.disableButton = false
    },
    selectPharmacy(currentEntity) {
      if (currentEntity.id === null) {
        return
      }
      console.log('Button clicked!', currentEntity)
    }
  }
}
</script>
