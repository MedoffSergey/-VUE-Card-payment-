<template>
  <div class='section'>
    <h1 class="PersonalArea">Личный кабинет пользователя</h1>
    <div class="PersonalButtonPosition">
      <ul id="buttons" class="flex-row">
        <li><a href="#"> <img src="../assets/PersonalArea/recipient.svg" width="32px" height="32px"> Текущие заказы</a></li>
        <li><a href="#"> <img src="../assets/PersonalArea/registration-form.svg" width="32px" height="32px"> Личные данные </a></li>
        <li><a href="#"> <img src="../assets/PersonalArea/accounting.svg" width="32px" height="32px"> Личный счет</a></li>
        <li><a href="#"> <img src="../assets/PersonalArea/history.svg" width="32px" height="32px"> История заказов</a></li>

        <li><a href="#"> <img src="../assets/PersonalArea/shopping-basket.svg" width="32px" height="32px"> Корзина</a></li>
        <li><a href="#"> <img src="../assets/PersonalArea/phone.svg" width="32px" height="32px"> Контакты</a></li>
        <li><a href="#"> <img src="../assets/PersonalArea/subscription.svg" width="32px" height="32px"> Подписки</a></li>
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
  width: 300px;
  line-height: 250px;
  border-radius: 10px;
}

#buttons li a {
  text-decoration: none;
  color: #FFFFFF;
  display: block;
}

#buttons li a:hover {
  text-decoration: none;
  color: #ffffff;
  background-color: #003346;
  border-radius: 10px;
}
</style>
