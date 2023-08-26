import { useRef, useState, useEffect } from "react"
import Db_BlogCards from "../db_blogCard";
import { Card } from "antd";
export default function Dashboard({myid,imgUser, userblg }){
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("/api/user_blog/")
          .then((res) => res.json())
          .then((p) => setBlogs(p.userId));
      }, []);

     const handleDelete1 = (id) => {
        const updatedData = blogs.filter((item) => item.id !== id)
        setBlogs(updatedData)
        return function oneBlogsDellete(bid) {
           const blg =  blogs.filter((i) => i.id !== bid);
           setBlogs(blg);
        }
      }

    const headingRef = useRef()
    const descriptionRef = useRef()

    const checkHandler = (event) => {
        event.preventDefault();
        const heading = headingRef.current.value;
        const description =descriptionRef.current.value;

        const newBlogs = JSON.stringify({myid,heading,description });

        // POST method
        fetch("/api/user_blog/", {
          method: "POST",
          body: newBlogs,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((json) => console.log(json));

    }  

    return(
        <div>
        <div className="sign-header">Dashboard</div>

            <div className="mt-10 bg-white sm:mx-auto sm:w-full sm:max-w-lg formBorder userAddingblog">
                <form onSubmit={checkHandler}>
                <div className="mt-2">
                  <input
                    id="heading"
                    name="heading"
                    type="text"
                    ref={headingRef}
                    placeholder="heading"
                    autoComplete="heading"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2" style={{
                    marginTop: 20
                }}>
                  <textarea
                    id="description"
                    name="description"
                    type="textareat"
                    ref={descriptionRef}
                    placeholder="What is in your mind"
                    autoComplete="description"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div style={{textAlign:"start"}}>
                <button
                  type="submit"
                  className="btnBlog w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Publish blog
                </button>
              </div>
                </form>
            </div>
            <div className="dashboardblogs"><h1>My Blogs</h1></div>
         { Object.keys(userblg).length !== 0 ?  <div className="allCardsBlog">
              {userblg.blogs.map(blg => <Db_BlogCards key={Math.random()} imgUser ={imgUser} heading = {blg.heading}  description = {blg.description} blg={blg} handleDelete1 ={handleDelete1} time = {blg.getTime}></Db_BlogCards>)}
            </div> : <Card><h1>Please login Frist...</h1></Card>}

{/* {blogs.map(users => users.blogs.map(usr => <Db_BlogCards key={Math.random()} heading = {usr.heading} idkey = {usr.id} description={usr.description} handleDelete1 ={handleDelete1}></Db_BlogCards>))} */}
            
        </div>
    )
}