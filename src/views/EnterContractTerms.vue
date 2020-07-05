<template>
  <div class="content">
  <h1 class="content__head">3: Enter Contract Terms</h1>
  
  <button :disabled="disableButton" class="content__button" @click.prevent="">View Results</button>
  <button class="content__button-back" @click.prevent="$router.go(-1)">Back</button>
  </div>
</template>
<script>
export default {
  name: 'terms',
  data: () => ({
    disableButton: true
  })
}
</script>