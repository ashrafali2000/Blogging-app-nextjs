import { getAllBlogs } from "@/services/user";

  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllBlogs();
    res.status(200).json(mydata);
  }
}