import { getAllAccounts ,signUp } from "@/services/user";

  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllAccounts();
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {name, email,password, imgUrl} = req.body;
        console.log(req.body);
        const updatedProducts = signUp(name, email,password , imgUrl);
        return res.status(201).json(updatedProducts);
      }
}