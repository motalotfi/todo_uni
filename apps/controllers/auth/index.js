const authService = require("../../services/authService");
// * in bakhsh controller haye login va register ast ke show baraye namayesh front bakhsh va do baraye anjam login va register mibashad
exports.showLogin = (req, res) => {
  res.render("login", { layout: "auth" });
};

exports.doLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  if (!user) {
    return res.redirect("/auth/login");
  }

  return res.redirect("/admin/dashboard");
};
exports.showRegister = (req, res) => {
  res.render("register", { layout: "auth" });
};
exports.doRegister = async (req, res) => {
  const { email, password, full_name } = req.body;
  await authService.register(full_name, email, password);
  return res.redirect("/auth/login");
};
