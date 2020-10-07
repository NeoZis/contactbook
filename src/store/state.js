export default {
  contacts: [
    {
      id: 0,
      firstName: 'Andrey',
      lastName: 'Porodnov',
      number: '+380960276673',
      other: [

      ]
    },
    {
      id: 1,
      firstName: 'Petr',
      lastName: 'Ivanov',
      number: '+380991234567',
      other: [
        {key: 'Адрес', value: 'г.Харьков'}
      ]
    }
  ],
  show: false,
  lastChanges: null,
  currentContact: null,
  showContacts: true,
  modalInfo: {
    show: false,
    name: null,
    currentQuest: null,
    action: null,
    object: null,
    questions: [
      'Вы точно хотите удалить контакт',
      'Вы точно хотите удалить поле',
      'Вы точно хотите отменить редактирование'
    ]
  }
}
