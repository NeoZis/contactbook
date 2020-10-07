<template>
  <div id="app">
    <header>
      <h1>Книга контактов</h1>
    </header>
    <div class="wrapper">
      <Contacts :contacts="contacts" v-if="showContacts"/>
      <AboutContact v-else/>
    </div>
    <Modal v-show="modalInfo.show"/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Contacts from "./components/Contacts";
import AboutContact from "./components/AboutContact";
import Modal from "./components/Modal";

export default {
  name: 'app',
  components: { Contacts, AboutContact, Modal},
  data () {
    return {
    }
  },
  computed: mapState(['contacts', 'showContacts', 'modalInfo']),
}
</script>

<style scoped>
/*#app {*/
/*  text-align: center;*/
/*}*/
.wrapper{
  max-width: 960px;
  margin: 0 auto;
}
header {
  border-bottom: 2px solid black;
  text-align: center;
}
</style>
