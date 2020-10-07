<template>
    <main>
      <CreateContact
        v-if="show"/>
      <div class="add-contact-block"
           @click="showCreatePanel"
           v-else>
        <h3>Создать новый контакт</h3>
      </div>
      <Contact
        v-for="contact in contacts" :key="contact.id" :contact.sync="contact"/>
    </main>
</template>

<script>
import Contact from "./Contact";
import CreateContact from "./CreateContact";
import {mapState} from 'vuex';

export default {
  name: 'Contacts',
  components: {
    Contact,
    CreateContact
  },
  computed: mapState(['show']),
  data () {
    return {
    }
  },
  methods: {
    showCreatePanel () {
      this.$store.dispatch('showCreatePanel', true)
    }
  },
  props: ['contacts']
}
</script>

<style scoped>
main{
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100%;
}

.add-contact-block {
  border: 1px solid black;
  position: relative;
  padding: 30px 30px 30px 30px;
  box-sizing: border-box;
  margin: 0 auto 20px;
  width: 700px;
  text-align: center;
  cursor: pointer;
}
</style>
