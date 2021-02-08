<template>
  <div class="content">
    <h1 class="content__head">3: Enter Contract Terms</h1>
    <form @submit.prevent="submitHandler">

      <div class="form__fields">
        <div class="form__fields__row">
          <span class="form__fields__row__name">Contract Type</span>
          <select name="" id="" class="form__fields__row__input">
            <option value="Charter">Charter</option>
            <option value="Order">Order</option>
            <option value="Proxy">Proxy</option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>
        <div class="form__fields__row">
          <span class="form__fields__row__name">Service Agreement #</span>
          <input type="text" class="form__fields__row__input">
        </div>
        <div class="form__fields__row">
          <span class="form__fields__row__name">Contract Start Date</span>
          <Datepicker
           :disabled-dates="startDatePicker.disabledDates"
           class="form__fields__row__input"
          />
        </div>
        <div class="form__fields__row">
          <span class="form__fields__row__name">Contract End Date</span>
          <input type="date" name="" id="" class="form__fields__row__input">
        </div>
        <div class="form__fields__row">
          <span class="form__fields__row__name">Location</span>
          <input type="text" class="form__fields__row__input">
        </div>
        <div class="form__fields__row">
          <span class="form__fields__row__name">Contractor Name</span>
          <input type="text" class="form__fields__row__input">
        </div>
      </div>

      <button :disabled="disableButton" class="content__button" type="submit">View Results</button>
      <button class="content__button-back" @click.prevent="$router.go(-1)">Back</button>
    </form>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'

let startDate = new Date()

export default {
  name: 'terms',
  data: () => ({
    disableButton: false,
    startDatePicker: {
      disabledDates: {
        to: new Date(startDate.setDate(startDate.getDate() -1))
      }
    }
  }),
  methods: {
    submitHandler() {
      console.log('Form submitted')
    }
  },
  components: {
    Datepicker
  }
}
</script>