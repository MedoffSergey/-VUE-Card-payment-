<template>
  <div class="section">

    <header>
      <button class='menu-btn' @click="show = !show">
        <img src="./assets/Menu.svg" width="32px" height="32px">
      </button>

      <aside v-show="show" transition="slide">
        <div class="left_menu">
          <button class='nav-link'><router-link to="/personalArea"> Личный кабинет</router-link> </button>
          <button class='nav-link'><router-link to="/formToFill"> Платежи (активная)</router-link> </button>
          <button class='nav-link'><router-link to="/history"> История платежей</router-link> </button>
          <button class='nav-link'> Настройки </button>
          <button class='nav-link'> Выйти </button>
        </div>
      </aside>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import PersonalArea from './components/PersonalArea.vue'
// import FormToFill from './components/FormToFill.vue'
import SuccessfulPayment from './components/SuccessfulPayment.vue'
import History from './components/History.vue'

export default {
  data() { // Переменные которые можно использовать в шаблоне
    return {
      page: 'personalArea',
      numberScore: null,
      price: null,
      numberCard: null,
      monthDate: null,
      yearDate: null,
      cardOwner: null,
      secretKey: null,
      show: false
    }
  },
  components: {
    PersonalArea,
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
