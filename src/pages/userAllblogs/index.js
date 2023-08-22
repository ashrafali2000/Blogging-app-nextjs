import { useEffect, useState } from "react";
import UserAllBlogs from "./userAllblogs";

import Link from "next/link";
import { ArrowLeftOutline } from "heroicons-react";
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/user_blog/")
      .then((res) => res.json())
      .then((p) => setBlogs(p.userId));
  }, []);

  return (<div>
    <div className="sign-header" style={{
        color:"#4248f5",
        fontSize: "25px !important"
    }}>
      <ArrowLeftOutline style={{display:"inline "}}/>  <Link href={"/"}>Back to the Users Blog</Link>
      </div>
      <div className="dashboardblogs"><h1>All Blogs of</h1></div>
      <div className="allCardsBlog">
      {blogs.map(blg => <UserAllBlogs key={blg.id} blogs = {blg.blogs}  blg={blg}></UserAllBlogs>)}
      </div>
  </div>)
}