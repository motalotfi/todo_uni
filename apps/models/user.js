// * in bakhsh model haye user mibashad va karhaii manand gereftan data az database dar in bakhsh anjam mishavad

const db = require("../../databases/config");

exports.findByEmail = async (email) => {
  const [user] = await db.query(
    `select * from todo.user where email=? limit 1`,
    [email]
  );
  return user.length === 1 ? user[0] : null;
};

exports.create = async (userData) => {
  const [result] = await db.query(`insert into todo.user set ?`, [userData]);
};
