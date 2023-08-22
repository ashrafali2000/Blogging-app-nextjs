import { getAllAccounts } from "@/services/user"

export default function handler(req, res) {

    if(req.method === "GET") {
        const allblogs = getAllAccounts();
        res.status(200).json(allblogs);
    }
    // if (req.method === "POST") {
    //     const {myKey,comment } = req.body;
    //     const updatedComments = getCommentById1(myKey,comment);

    //     return res.status(201).json(updatedComments);
    //   }
      return res.status(404).json({message:"NOT  FOND"});
}