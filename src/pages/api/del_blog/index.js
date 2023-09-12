import { getAllAccounts ,deleteBLog } from "@/services/user";

  export default function handler(req, res) {
//   if(req.method === "GET") {
//     const mydata = getAllAccounts();
//     res.status(200).json(mydata);
//   }

     if (req.method === "PATCH") {
        const {myid, blogId} = req.body;
        console.log(req.body);
        const updatedUser = deleteBLog(myid,blogId);
        return res.status(201).json(updatedUser);
      }
}