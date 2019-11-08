<template>
  <div class='section'>
    <header>
      <button class='menu-btn' @click="show = !show">
        <img src="../assets/Menu.svg" width="32px" height="32px">
      </button>

      <aside v-show="show" transition="slide">
        <div class="left_menu">
          <button @click="showPersonalAreasNav" class='nav-link'> Личный кабинет </button>
          <button @click="showPaymentsNav" class='nav-link'> Платежи (активная) </button>
          <button @click="showHistoryNav" class='nav-link'> История платежей </button>
          <button class='nav-link'> Настройки </button>
          <button class='nav-link'> Выйти </button>
        </div>
      </aside>
    </header>
  </div>
</template>


<script>
export default {
  name: "Burger-Menu",
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPersonalAreasNav() {
      this.$emit("showPersonalArea") // вызывает событие в App.vue
    },
    showPaymentsNav() {
      this.$emit("showPayments") // вызывает событие в App.vue
    },
    showHistoryNav() {
      this.$emit("showHistory") // вызывает событие в App.vue
    }
  }
}
</script>

<style>

header {
  width: 100%;
  height: 1%;

  top: 0;
  left: 0;
  z-index: 80;
  background-color: #09090b;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.095);
  padding: 8px 16px;
  overflow: hidden;
  box-sizing: border-box;
}

.nav-link {
  background-image: linear-gradient(to right, #272626 0%, black 150%);
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
  padding: 10px 0px 10px 20px;
}

.menu-btn {
  float: right;
}

aside {
  background-color: #09090b;
  width: 20%;
  position: fixed;
  top: 55px;
  left: 0;
  bottom: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

aside h2 {
  font-weight: 300;
  color: #afafaf;
}

@media (max-width: 1000px){
  aside {
    display: contents;

  }
}

button {
  background: transparent;
  border: 0;
  font-size: 30px;
  outline: none;
  color: #9f9f9f;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

button:active {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.1);
}

button:hover {
  box-shadow: 0px 0px 20px rgba(52, 48, 70, 0.5);
  color: white;
}

.slide-transition {
  transition: all .3s cubic-bezier(.65, .05, .36, 1);
}
</style>
