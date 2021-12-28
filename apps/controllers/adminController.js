// * in bakhsh marboot be controller admin mibashad mesle adad haye bakhsh balaye dashboard , namayesh dashboard , account ,... 
// ? 3 bakhsh akhar makhsoos add , delete and done kardan work ast


const postModel = require("../models/task");
const jalMom = require("../utils/jalaliDate");
exports.dashboard = async (req, res) => {
  const tasks = await postModel.findImport();

  const importCount = await postModel.findImportCount();
  const ImportNum = importCount.count;

  const doneCount = await postModel.findDoneCount();
  const doneNum = doneCount.count;

  const AllCount = await postModel.findAllCount();
  const allNum = AllCount.count;
  const today = new Date();
  const now = jalMom.jalali_date(today);
  res.render("dashboard", {
    layout: "main",
    tasks,
    now,
    ImportNum,
    allNum,
    doneNum,
  });
};

exports.myAccount = async (req, res) => {
  const tasks = await postModel.findAll();
  const updateTask = tasks.map((item) => {
    item.jalali = jalMom.jalali_date(item.created_at);
    return item;
  });
  let newStatus;

  res.render("account", { layout: "main", tasks: updateTask });
};

exports.add = async (req, res) => {
  const { priority, workTitle } = req.body;
  const taskData = {
    user_id: 0,
    title: workTitle,
    priority: priority === "on" ? 1 : 0,
    status: 0,
  };
  await postModel.create(taskData);
  res.redirect("/admin/my-account");
};
exports.del = async (req, res) => {
  const taskId = req.params.taskId;
  await postModel.del(taskId);
  res.redirect("/admin/dashboard");
};
exports.done = async (req, res) => {
  const taskId = req.params.taskId;
  await postModel.done(taskId);
  res.redirect("/admin/my-account");
};
