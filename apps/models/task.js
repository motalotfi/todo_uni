// * in bakhsh model haye task mibashad va karhaii manand gereftan data az database dar in bakhsh anjam mishavad

const db = require("../../databases/config");

exports.findAll = async () => {
  const [tasks] = await db.query(`select * from todo.task`);
  return tasks;
};
exports.findAllCount = async () => {
  const [tasks] = await db.query(`select count(id) as count from todo.task`);
  return tasks[0];
};
exports.findDoneCount = async () => {
  const [tasks] = await db.query(
    `select count(id) as count from todo.task where status=1`
  );
  return tasks[0];
};

exports.findImport = async () => {
  const [tasks] = await db.query(`select * from todo.task where priority=?`, [
    1,
  ]);
  return tasks;
};
exports.findImportCount = async () => {
  const [tasks] = await db.query(
    `select count(id) as count from todo.task where priority=?`,
    [1]
  );
  return tasks[0];
};
exports.create = async (taskData) => {
  const [result] = await db.query(`insert into todo.task set ?`, [taskData]);
  return result;
};

exports.del = async (taskId) => {
  await db.query(`delete from todo.task where id = ?`, [taskId]);
};
exports.done = async (taskId) => {
  await db.query(`update todo.task set status=1 where id = ?`, [taskId]);
};
