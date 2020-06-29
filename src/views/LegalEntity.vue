<template>
  <div class="content">
    <h1 class="content__head">1: Select Legal Entity</h1>
    <span id="entityName"></span>
    <table>
      <thead>
        <tr>
          <td id="firstColumnName">Legal Entity</td>
          <td>Street</td>
          <td>City</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="entity in entities" :key="entity.id">
          <td>{{entity.legalEntityName}}</td>
          <td>{{entity.address1 + ' ' + entity.address2}}</td>
          <td>{{entity.city}}</td>
          <td>{{entity.country}}</td>
        </tr>
      </tbody>
    </table>
    <button class="content__button">Select Pharmacies</button>
</div>
</template>

<script>
export default {
  name: 'legalentity',
  data: () => ({
    entities: null
  }),
  async mounted() {
    this.entities = await this.$store.dispatch('fetchEntities')
    console.log(this.entities)
  }
}
</script>
