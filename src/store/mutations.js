import {CREATE_CONTACT, DELETE_CONTACT, SHOW_CREATE_PANEL, SHOW_ABOUT_CONTACT,
        ADD_NEW_INFO, ON_CONTACTS, SHOW_MODAL, CLEAR_MODAL_INFO, ON_SAVE , IS_RETURN} from "./mutation-types";

export default {
  [DELETE_CONTACT] (state, contact) {
    let indexContact = state.contacts.indexOf(contact);
    state.lastChanges = contact;
    state.contacts.splice(indexContact, 1)
  },
  [CREATE_CONTACT] (state, contact) {
    contact.id = state.contacts[state.contacts.length-1].id + 1;
    contact.other = [];
    state.contacts.push(contact)
  },
  [SHOW_CREATE_PANEL] (state, show) {
    state.show = show;
  },
  [SHOW_ABOUT_CONTACT] (state, contact) {
    state.currentContact = contact;
    state.showContacts = false;
  },
  [ADD_NEW_INFO] (state, newInfo) {
    let indexContact = state.contacts.findIndex(el => el.id === newInfo.id)
    state.contacts[indexContact].other.push(newInfo.newInfo)
  },
  [ON_CONTACTS] (state) {
    state.currentContact = null;
    state.showContacts = true;
    state.lastChanges = null;
  },
  [SHOW_MODAL] (state, action) {
    state.modalInfo.show = action.show;
    if (!action.contact.firstName) return;
    state.modalInfo.name = `${action.contact.firstName} ${action.contact.lastName}`;
    state.modalInfo.currentQuest = state.modalInfo.questions[action.question];
    state.modalInfo.action = action.action;
    state.modalInfo.object = action.contact;
  },
  [CLEAR_MODAL_INFO] (state) {
    state.modalInfo.name = null;
    state.modalInfo.currentQuest = null;
    state.modalInfo.action = null;
    state.modalInfo.object = null;
  },
  [ON_SAVE] (state, contact) {
    state.lastChanges = state.currentContact;
    let indexContact = state.contacts.findIndex(el => el.id === contact.id);
    state.currentContact = contact;
    state.contacts[indexContact] = contact;
  },
  [IS_RETURN] (state) {
    state.currentContact = state.lastChanges;
    state.lastChanges = null;
  }
}
