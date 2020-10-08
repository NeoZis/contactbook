<template>
  <main>
    <div class="general-info">
      <div class="top">
        <div class="to-back">
          <input type="button" value="Вернуться назад" @click="onContacts">
        </div>
        <div class="to-edit">
          <input type="button" v-show="!edit" value="Редактировать" @click="isEdit(true)">
          <input type="button" v-show="edit" value="Сохранить" @click="onSave(contact)">
          <input type="button" v-show="edit" value="Отменить" @click="isEdit(false)">
        </div>
      </div>
      <h3>Основная информация</h3>
      <img src="../assets/person.png" alt="logo">
      <p v-if="!edit">Имя: {{currentContact.firstName}}</p>
      <p v-else>Имя: <input type="text"  v-model="contact.firstName"></p>
      <p v-if="!edit">Фамилия: {{currentContact.lastName}}</p>
      <p v-else>Фамилия: <input type="text"  v-model="contact.lastName"></p>
      <p v-if="!edit">Номер: {{currentContact.number}}</p>
      <p v-else>Номер: <input type="text" v-model="contact.number"></p>
    </div>
    <div class="other-info">
      <h3>Остальные данные</h3>
      <div v-if="!edit" class="list-info">
        <p v-for="info in currentContact.other">
          <span style="font-weight: bold">{{info.key}}</span>:
          <span style="font-style: italic">{{info.value}}</span></p>
      </div>
      <div v-else class="list-edit">
        <p v-for="info in contact.other">
          <input type="text" v-model="info.key">:
          <input type="text" v-model="info.value">
          <span class="remove" @click="removeOther(info.key)"> — </span>
        </p>
      </div>
      <div v-if="addInfo">
        <p>Параметр <input type="text" v-model="newInfo.key"></p>
        <p>Информация <input type="text" v-model="newInfo.value"></p>
        <p style="color: red" v-if="error">Заполните все поля</p>
        <input type="button" @click="addNewInfo(newInfo)" value="Добавить" >
      </div>
      <p @click="addInfo = true" v-if="!addInfo&&!edit">Добавить новый пункт</p>
      <p @click="addInfo = false" v-else-if="!edit">Скрыть</p>
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
      contact: null
    }
  },
  methods: {
    addNewInfo (newInfo) {
      if (!(newInfo.key&&newInfo.value)) return this.error=true;
      this.$store.dispatch('addNewInfo', {newInfo: newInfo, id:this.currentContact.id});
      this.addInfo = false;
      this.newInfo = {key: '', value: ''}
    },
    onContacts () {
      if (this.edit) {
        this.$store.dispatch('showModal', {contact: this.currentContact, show: true, question: 2, action: 'onContacts'});
      } else {
        this.$store.dispatch('onContacts')
        this.edit = false
      }
    },
    isEdit(state) {
      this.edit = state;
      this.addInfo = false;
      if (this.edit) {
        this.contact = {...this.currentContact};
        this.contact.other = [];
        this.currentContact.other.forEach(el => this.contact.other.push({...el}));
      } else {
        this.contact = null;
      }
    },
    onSave (contact) {
      this.$store.dispatch('onSave', contact);
      this.edit = false;
      this.contact = null;
    },
    removeOther (key) {
      let index = this.contact.other.findIndex(el => el.key === key);
      this.contact.other.splice(index, 1);
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
.top input:active {
  color: white;
  background-color: black;
}
.top input:focus {
  outline: none;
}
.remove {
  color: red;
  cursor: pointer;
}
</style>
