export default class Contact
{
  constructor(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  // addComment(item) {
  //   this.comments.push(item);
  // }

  static createFrom(data) {
    const {id, name, surname} = data;
    return new this(id, name, surname);
  }
}
