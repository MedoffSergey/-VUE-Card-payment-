<template>
<div>
  <form>
    <fieldset class="account-info">
      <div class="message-info title">Информация об оплате:</div>
      <div class="message-info">Номер счета:
        <input type="text" name="Number score" v-model="numberScore">
      </div>
      <div class="message-info">Сумма платежа:
        <input type="text" name="Price" v-model="price">
      </div>
      <h1> Данные банковской карты</h1>
      <div class="card-position">
        <div class="card">
          <div class='card-content'>
            <div class="message-info"> Номер карты </div>
            <input type="text" name="Number card" maxlength="4" v-model="numberCard1">
            <input type="text" name="Number card" maxlength="4" v-model="numberCard2">
            <input type="text" name="Number card" maxlength="4" v-model="numberCard3">
            <input type="text" name="Number card" maxlength="4" v-model="numberCard4">
            <div class="message-info"> Срок действия </div>

            <select class="date">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select class="date">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>

            <div>
              <input class='author' type="text" name="author" placeholder="Держатель карты" v-model="cardOwner">
            </div>
          </div> <!-- card-content -->
        </div> <!-- front-card -->
        <div class='prev'>
          <div class="grey-line"></div>
          <div class="display-flex">
            <div class="message-info ">Код CVV2/ CVC2 </div>
            <input type="text" name="CVV" maxlength="3" v-model="secretKey">
          </div>
        </div> <!-- front-back -->
      </div> <!-- card-position -->
    </fieldset>
    <fieldset class="account-action">
      <a class="btn" @click="showSuccessfulPaymentNav">Оплатить</a>
    </fieldset>
  </form>
</div>
</template>

<script scoped>
export default {
  data() {
    return {
      numberScore: null,
      price: null,
      numberCard1: null,
      numberCard2: null,
      numberCard3: null,
      numberCard4: null,
      monthDate: "",
      yearDate: "",
      cardOwner: "",
      secretKey: "",
      showDismissibleAlert: true
    }
  },
  methods: {
    showSuccessfulPaymentNav() {
      console.log("this.cardOwner", this.cardOwner)
      if (this.ownerCheck() != false) {
        this.$emit("showSuccessfulPayment") // вызывает событие в App.vue
        console.log("!false")
      }

      // this.ownerCheck()
      console.log(typeof(this.cardOwner))
    },

    //Валидация input полей

    ownerCheck() { //Проверка держателя карты
      if (this.cardOwner.length <= 4) {
        console.log("Поле держатель карты <4 символов")
        return false;
      } else {
        return this.cardOwner.toUpperCase();
      }
    }
  }
}
</script>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

input {
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #fff;
  border: 1px solid #c6c7cc;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .1);
  color: #636466;
  padding: 6px;
  margin-top: 6px;
  width: 15%;
}

.author {
  width: 97%;
}

.card {
  position: relative;
  background-color: white;
  border: 1px solid #c6c7cc;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 40px;
  z-index: 1;
}

.card-content {
  padding: 5%
}
.card-position {
  position: relative;
}
.prev {
  position: absolute;
  top: 20px;
  left: 180px;
  background-color: white;
  border: 1px solid #c6c7cc;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 40px;
  z-index: 0;
}

.date {
  background-color: #ffffff;
  outline: none;
  height: 30px;
  align-items: center
}

.grey-line {
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background-color: #E4E9ED
}

.display-flex {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end
}

.account-info {
  padding: 20px 20px 0 20px;

}

.account-info label {
  color: #395870;
  display: block;
  font-weight: bold;
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .prev {
    position: inherit;
    top: 0px;
    left: 0;
  }
}

.account-action {
  background: #f0f0f2;
  border-top: 1px solid #c6c7cc;
  padding: 20px;
}

.account-action label {
  color: #7c7c80;
  font-size: 12px;
  float: left;
  margin: 10px 0 0 20px;
}
</style>
