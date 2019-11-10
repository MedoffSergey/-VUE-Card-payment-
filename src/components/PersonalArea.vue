<template>
  <div class='section'>
    <h1 class="PersonalArea">Личный кабинет</h1>
    <div class="PersonalButtonPosition">
      <ul id="buttons" class="flex-row">
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/recipient.svg" width="50px" height="50px"> Текущие заказы</a></li>
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/registration-form.svg" width="50px" height="50px"> Личные данные </a></li>
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/accounting.svg" width="50px" height="50px"> Личный счет</a></li>
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/history.svg" width="50px" height="50px"> История заказов</a></li>

        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/shopping-basket.svg" width="50px" height="50px"> Корзина</a></li>
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/phone.svg" width="50px" height="50px"> Контакты</a></li>
        <li class='btn-personalArea'><a href="#"> <img src="../assets/PersonalArea/subscription.svg" width="50px" height="50px"> Подписки</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.PersonalArea{
  font-family: "Times New Roman", Georgia, Serif;
  font-size: 32px;
  text-align: center;
}
.PersonalButtonPosition{
  width: 60%;
  margin: 0 auto;
}

.flex-row {
  display: flex;
  flex-wrap: wrap;
}

#buttons li {
  justify-content: center;
  list-style: none;
  text-align: center;
  background-color: #000000;
  margin-right: 2%;
  margin-bottom: 2%;
  width: 30%;
  line-height: 250px;
  border-radius: 10px;
  font-size: 16px;
}

#buttons li a {
  text-decoration: none;
  color: #FFFFFF;
  display: block;
}

#buttons li a:hover {
  text-decoration: none;
  color: #ffffff;
  box-shadow: 0px 0px 20px rgba(52, 48, 70, 0.5);
  background-color: #2A2C38;
  border-radius: 10px;
}
</style>
