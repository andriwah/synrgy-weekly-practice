const data_users = require('../data/data-user.json');

class User {
  static records = data_users;

  constructor(params) {
    this.id = this._generateId();
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.is_active = params.is_active;
  }

  _generateId() {
    const lastRecordId = this.constructor.records.length;
    return lastRecordId + 1;
  }

  static create(params) {
    const user = new this(params);
    this.records.push(user);
    return user;
  }

  static getList() {
    return this.records;
  }

  static find(id) {
    const user = this.records.find((i) => i.id === Number(id));
    if (!user) return null;

    return user;
  }

  static update(body, id) {
    const records = this.records.filter((i) => i.id === parseInt(id));

    body.name && (this.name = body.name);
    body.email && (this.email = body.email);
    body.password && (this.password = body.password);
    body.is_active && (this.is_active = body.is_active);

    records = this;
    return this;
  }

  static delete() {
    this.records = this.records.filter((i) => i.id !== this.id);
  }
}

module.exports = User;
