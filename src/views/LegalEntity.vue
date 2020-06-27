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
          
      </tbody>
    </table>
    <button class="content__button">Select Pharmacies</button>
</div>
</template>

<script>
import entities from '@/assets/legalentity.json'
export default {
  name: 'LegalEntity',
}
</script>
