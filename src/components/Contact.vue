<template>
  <div class="contact">
    <div class="contact-info">
      <p>Имя: {{contact.firstName}}</p>
      <p>Фамилия: {{contact.lastName}}</p>
      <p>Номер: {{contact.number}}</p>
      <input type="button" value="Больше информации..." @click="showAboutContact(contact)">
    </div>
    <div class="delete" @click="deleteContact(contact)"></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: ['contact'],
  methods: {
    deleteContact(contact) {
      //this.$store.dispatch('deleteContact', contact)
      this.$store.dispatch('showModal', {contact: contact, show: true, question: 0, action: 'deleteContact'})
    },
    showAboutContact (contact) {
      this.$store.dispatch('showAboutContact', contact)
    }
  }
}
</script>

<style scoped>
.contact {
  border: 1px solid black;
  position: relative;
  padding: 30px 30px 30px 100px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  width: 700px;
  display: flex;
  justify-content: space-between;
}
.delete {
  align-self: flex-end;
  width: 50px;
  height: 50px;
  background: url("../assets/remove.png");
  background-size: contain;
  position: relative;
  cursor: pointer;
}
.contact:before {
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  background: url("../assets/person.png");
  background-size: contain;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
input {
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
}
input:hover {
  cursor: pointer;
}
input:focus {
  outline: none;
  color: white;
  background-color: black;
}


</style>
