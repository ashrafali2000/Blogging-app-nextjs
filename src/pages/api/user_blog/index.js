import { getAllAccounts ,createBlog } from "@/services/user";

  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllAccounts();
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {myid, heading:heading,description:description} = req.body;
        console.log(req.body);
        const updatedProducts = createBlog(myid,{heading,description});
        return res.status(201).json(updatedProducts);
      }
}