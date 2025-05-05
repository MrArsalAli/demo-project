import sendResponse from "../../helpers/sendResponse.js";
import User from "../../models/users.js";

export default async function Login(req, res) {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      sendResponse(res, 200, user, false, "Login Successfull");
    } else {
      sendResponse(res, 404, null, true, "Invalid Credentials");
    }
  } catch (err) {
    sendResponse(res, 500, null, true, "Server Error");
  }
}
