import { getOneUserBlogs } from "@/services/user";
export default function handler(req, res) {
    if(req.method === "GET") {
        const {allblguser} = req.query;
        const blgs = getOneUserBlogs(Number(allblguser));
        
    return res.status(200).json(blgs);
    }
    return res.status(404).json({ message: "Not found" });
}