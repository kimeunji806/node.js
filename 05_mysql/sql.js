module.exports = {
  customerList: `select * from customers`,
  customerInsert: `insert into customers (name, email, phone, passwd) values (?, ?, ?, ?)`,
  customerUpdate: `update customers set ? where id = ?`,
  customerDelete: `delete from customer where id = ?`,
};
