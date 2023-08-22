import { getAllAccounts ,signUp } from "@/services/user";

  //   sign-up
  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllAccounts();
  //   console.log(mydata)
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {name, email,password, repeatPassword} = req.body;
        console.log(req.body);
        const updatedProducts = signUp(name, email,password ,repeatPassword);
        return res.status(201).json(updatedProducts);
      }
}