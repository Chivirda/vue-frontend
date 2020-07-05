<template>
  <div class="content">
    <h1 class="content__head">3: Enter Contract Terms</h1>
    <form @submit.prevent="submitHandler">

      <div class="form__fields">
        <div class="form__fields__row">
          <span>Contract Type</span>
          <select name="" id="">
            <option value="Charter">Charter</option>
            <option value="Order">Order</option>
            <option value="Proxy">Proxy</option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>
        <div class="form__fields__row">
          <span>Service Agreement #</span>
          <input type="text">
        </div>
        <div class="form__fields__row">
          <span>Contract Start Date</span>
          <input type="date" name="" id="">
        </div>
        <div class="form__fields__row">
          <span>Contract End Date</span>
          <input type="date" name="" id="">
        </div>
        <div class="form__fields__row">
          <span>Location</span>
          <input type="text">
        </div>
        <div class="form__fields__row">
          <span>Contractor Name</span>
          <input type="text">
        </div>
      </div>

      <button :disabled="disableButton" class="content__button" type="submit">View Results</button>
      <button class="content__button-back" @click.prevent="$router.go(-1)">Back</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'terms',
  data: () => ({
    disableButton: false
  }),
  methods: {
    submitHandler() {
      console.log('Form submitted')
    }
  }
}
</script>