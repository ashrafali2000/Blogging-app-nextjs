import { useEffect, useState } from "react";
import Allblg_Card from "./alllBlg_Card";
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/user_blog/")
      .then((res) => res.json())
      .then((p) => setBlogs(p.userId));
  }, []);

  return (<div>
    <div >
    <div className="sign-header">Good Morning Reader!</div>
      </div>
      <div className="dashboardblogs"><h1>All Blogs</h1></div>
      <div className="allCardsBlog">
      {blogs.map(blg => <Allblg_Card key={blg.id} mykey= {blg.id} blogs = {blg.blogs}  blg={blg} name = {blg.name}></Allblg_Card>)}
      </div>
  </div>)
}
