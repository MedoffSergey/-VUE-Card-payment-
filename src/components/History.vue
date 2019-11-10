<template>

  <table>
      <tr><th>Цена</th><th>Номер счета</th><th>Дата перевода</th></tr>
      <tr><td>$327</td><td>327272829101</td><td>10.11.2019</td></tr>
      <tr><td>$519</td><td>519184947484</td><td>4.11.2019</td></tr>
      <tr><td>$35</td><td>515435345346 </td><td>7.11.2019</td></tr>
      <tr><td>$25</td><td>34547564523</td><td>3.11.2019</td></tr>
  </table>

</template>

<script>
import moment from "moment"
export default {
  name: 'history',
  data() {
    return {

    }
  }
}
</script>

<style>
table {
width: 60%;
font-size: 20px;
margin: 2% auto;
border: 1px solid #00458a;
border-collapse: separate;
empty-cells: hide;
}
th, td {
  border: 2px solid #00458a;
}
</style>
