import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/user";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, updatepassword, userEmail } = req.body;
        try{
          const myUser = getByEmail(userEmail);
          const myUserPassword = myUser.password;
          const userVerifyPassword = await verifyUserPassword(oldPassword, myUserPassword, userEmail,updatepassword);
          res.status(200).json(userVerifyPassword);
        }catch(err){
          res.status(400).json({message:err.message});
        }
  } 
}