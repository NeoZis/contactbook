<template>
  <main>
    <div class="general-info">
      <div class="top">
        <div class="to-back">
          <input type="button" value="Вернуться назад" @click="onContacts">
        </div>
        <div class="to-edit">
          <input type="button" value="Редактировать" @click="isEdit">
        </div>
      </div>
      <h3>Основная информация</h3>
      <img src="../assets/person.png" alt="logo">
      <p>Имя: {{currentContact.firstName}}</p>
<!--      <p>Имя: <input type="text" v-show="edit" v-model="currentContact.firstName"></p>-->
      <p>Фамилия: {{currentContact.lastName}}</p>
<!--      <p>Фамилия: <input type="text" v-show="edit" v-model="currentContact.lastName"></p>-->
      <p>Номер: {{currentContact.number}}</p>
<!--      <p>Номер: <input type="text" v-show="edit" v-model="currentContact.number"></p>-->
    </div>
    <div class="other-info">
      <h3>Остальные данные</h3>
      <p v-for="info in currentContact.other" :info.sync="info"><span style="font-weight: bold">{{info.key}}</span>: <span style="font-style: italic">{{info.value}}</span></p>
      <div v-if="addInfo">
        <p>Параметр <input type="text" v-model="newInfo.key"></p>
        <p>Информация <input type="text" v-model="newInfo.value"></p>
        <p style="color: red" v-if="error">Заполните все поля</p>
        <input type="button" @click="addNewInfo(newInfo)" value="Добавить" >
      </div>
      <p @click="addInfo = true" v-if="!addInfo">Добавить новый пункт</p>
      <p @click="addInfo = false" v-else>Скрыть</p>
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "AboutContact",
  computed: mapState(['currentContact']),
  data () {
    return {
      addInfo: false,
      newInfo: {
        key: '',
        value: ''
      },
      error: false,
      edit: false,
      contact: {
        id: this.currentContact
      }
    }
  },
  methods: {
    addNewInfo (newInfo) {
      if (!(newInfo.key&&newInfo.value)) return this.error=true;
      this.$store.dispatch('addNewInfo', newInfo);
      this.addInfo = false;
      this.newInfo = {key: '', value: ''}
    },
    onContacts () {
      this.$store.dispatch('onContacts')
    },
    isEdit() {
      this.edit = !this.edit
    }
  }
}
</script>

<style scoped>
main{
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
main > div {
  border: 1px solid black;
  padding: 30px;
  margin: 0 auto 20px;
  width: 500px;
  position: relative;
}
.general-info {
  text-align: center;
}
.general-info > img {
  border: 1px solid black;
  border-radius: 50%;
}
.to-back {
  position: absolute;
  top: 10px;
  left: 30px;
}
.to-edit {
  position: absolute;
  top: 10px;
  right: 30px;
}
.top input {
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
}
.top input:hover {
  cursor: pointer;
}
.top input:focus {
  outline: none;
  color: white;
  background-color: black;
}
</style>
