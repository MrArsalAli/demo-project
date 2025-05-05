import sendResponse from "../../helpers/sendResponse.js";
import bcrypt from "bcrypt";
import User from "../../models/users.js";

export default async function Signup(req, res) {
  try {
    const { email, password, name, phoneNumber, role } = req.body;
    console.log(email, password, name, phoneNumber, role)
    // const { email: Uemail, password: Upass, name, phoneNumber, role } = req.body;
    // const user = await User.findOne({ email: Uemail });
    // if (user) return sendResponse(res, 404, null, true, "User Already Taken");
    // const hashedPass = await bcrypt.hash(Upass, 12);
    // let password = hashedPass;
    // let email = Uemail;
    let newUser = new User({
      email,
      password,
      name,
      phoneNumber,
      role
    });
    newUser = await newUser.save();
    sendResponse(res, 201, newUser, false, "User Registered Successfully");
  } catch (error) {
    sendResponse(res, 201, null, false, error.message);
  }
}
