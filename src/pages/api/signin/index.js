import { getAllAccounts } from "@/services/user";
export default function handler(req, res) {
    if(req.method === "GET") {
      const mydata = getAllAccounts();
      res.status(200).json(mydata);
    }
}