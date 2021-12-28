//* in bakhsh service login va register mibashad
const userModel = require("../models/user");
exports.login = async (email, enterPassword) => {
  const user = await userModel.findByEmail(email);

  if (!user) {
    return false;
  }
  const { password } = user;
  return password === enterPassword ? user : false;
};
exports.register = async (full_name, email, password) => {
  const user = await userModel.create({
    full_name: full_name,
    email: email,
    password: password,
  });
  return user;
};
