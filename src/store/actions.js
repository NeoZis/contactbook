import {CREATE_CONTACT, DELETE_CONTACT, SHOW_CREATE_PANEL, SHOW_ABOUT_CONTACT, ADD_NEW_INFO, ON_CONTACTS, SHOW_MODAL, CLEAR_MODAL_INFO} from "./mutation-types";

export default {
  deleteContact ({commit}, contact) {
    commit(DELETE_CONTACT, contact)
    commit(CLEAR_MODAL_INFO);
  },
  createContact({commit}, contact) {
    commit(CREATE_CONTACT, contact);
  },
  showCreatePanel({commit}, show) {
    commit(SHOW_CREATE_PANEL, show)
  },
  showAboutContact({commit}, contact) {
    commit(SHOW_ABOUT_CONTACT, contact)
  },
  addNewInfo ({commit}, newInfo) {
    commit(ADD_NEW_INFO, newInfo)
  },
  onContacts ({commit}) {
    commit(ON_CONTACTS)
  },
  showModal ({commit}, action) {
    commit(SHOW_MODAL, action)
  }
}
