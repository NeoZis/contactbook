<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Подтвердите
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          {{modalInfo.currentQuest + ' ' + modalInfo.name + '?'}}
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn btn-green"
            @click="isAction(modalInfo.action)"
          >
            Да
          </button>
          <button
            type="button"
            class="btn btn-red"
            @click="showModal(false)"
          >
            Нет
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Modal",
  computed: mapState(['modalInfo']),
  methods: {
    showModal(show) {
      this.$store.dispatch('showModal', show)
    },
    isAction(action) {
      this.$store.dispatch(action, this.modalInfo.object)
      this.$store.dispatch('showModal', {show: false})

    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  font-weight: bold;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-around;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn {
  border-radius: 2px;
  padding: 5px;
  width: 50px;
  cursor: pointer;
  background: white;
}
.btn-green {
  border: 1px solid #4AAE9B;
  color: #4AAE9B;
}
.btn-green:focus {
  outline: none;
  background: #4AAE9B;
  color: white;
}
.btn-red {
  border: 1px solid #AE4A4A;
  color: #AE4A4A;
}
.btn-red:focus {
  outline: none;
  background: #AE4A4A;
  color: white;
}
</style>
