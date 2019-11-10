<template>
  <div class="section">
    <Menu :page = "page" @showPersonalArea="showPersonalArea" @showPayments="showPayments" @showHistory="showHistory" />
      <div v-if="page === 'personalArea'">
        <PersonalArea />
      </div>
      <div v-if="page === 'payments'">
        <FormToFill @showSuccessfulPayment="showSuccessfulPayment"  />
      </div>
      <div v-if="page === 'successfulPayment'">
        <SuccessfulPayment @showPersonalArea="showPersonalArea"/>
      </div>
      <div v-if="page === 'history'">
        <History />
      </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import PersonalArea from './components/PersonalArea.vue'
import FormToFill from './components/FormToFill.vue'
import SuccessfulPayment from './components/SuccessfulPayment.vue'
import History from './components/History.vue'

export default {
  data() { // Переменные которые можно использовать в шаблоне
    return {
      page: 'personalArea',
    }
  },
  components: {
    Menu,
    PersonalArea,
    FormToFill,
    SuccessfulPayment,
    History
  },
  methods: {
    showPersonalArea: function() { //условная отрисовка компонентa "Личный кабинет"
      this.page = "personalArea";
    },
    showPayments: function() { //условная отрисовка компонентa "Платежи"
      this.page = "payments";
    },
    showSuccessfulPayment: function() { //условная отрисовка компонентa "Успешной оплаты"
      this.page = "successfulPayment";
    },
    showHistory: function() { //условная отрисовка компонентa "История платежей"
      this.page = "history";
    }
  }
}
</script>

<style lang="css" type="text/css">
  @import "./styles/style.css";
  @import "./styles/media.css";
</style>
