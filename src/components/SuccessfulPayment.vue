<template >
<div class="section">
  <form>
    <fieldset class="account-info">
      <div class='checked-img'>
        <img src="../assets/Checked.svg" width="100px" height="100px">
        <h1 class="subtitle-info-text"> Оплата прошла успешно </h1>
      </div>
      <div class="message-info title">Информация об оплате:</div>
      <div class="message-info ">Номер счета:</div>
      <div class="message-info ">Сумму платежа:</div>
      <div class="message-info ">Имя держателя карты:</div>
      <div class="message-info ">Дата оплаты:</div>
    </fieldset>
    <fieldset class="account-action">
      <input class="btn" @click="showPersonalAreaNav" value="Готово">
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
    methods: {
      showPersonalAreaNav() {
        this.$emit("showPersonalArea") // вызывает событие в App.vue
      }
    }
}
</script>

<style>
.checked-img{
  display: flex;
  justify-content: center;
}

.subtitle-info-text{
margin: auto 10px;
}
</style>
