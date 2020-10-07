<template>
  <div class="add-contact">
    <input type="button" value="Закрыть" class="close" @click="showCreatePanel">
    <div class="contact-info">
      <p>Имя: <input type="text" v-model="contact.firstName"></p>
      <p>Фамилия: <input type="text" v-model="contact.lastName"></p>
      <p>Номер: <input type="text" v-model="contact.number"></p>
      <p style="color: red" v-if="error">Заполните все поля</p>
    </div>
    <input type="button" value="Создать контакт" @click="createContact(contact)">
  </div>
</template>

<script>
export default {
  name: "CreateContact",
  data() {
    return {
      contact: {
        firstName: null,
        lastName: null,
        number: null
      },
      error: false
    }
  },
  methods: {
    createContact(contact) {
      if (!(contact.firstName&&contact.lastName&&contact.number)) return this.error=true;
      this.$store.dispatch('createContact', contact)
      this.contact = {firstName: '', lastName: '', number: ''}
      this.showCreatePanel()
    },
    showCreatePanel () {
      this.$store.dispatch('showCreatePanel', false)
    }
  }
}
</script>

<style scoped>
.add-contact {
  border: 1px solid black;
  position: relative;
  padding: 30px 30px 30px 100px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  width: 700px;
}
.close{
  position: absolute;
  top: 10px;
  right: 30px;
}

</style>
