import '@/styles/globals.css'
import Link from 'next/link'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  const [log, setLog] = useState(true);
  const [dashbod, setDashbod] = useState(false);
  const [log1, setLog1] = useState("");
  const [log3, setLog3] = useState(true);
  const [myid, setById] = useState('');
  const [userblg, setUserBlg] = useState({});
  const [imgUser, setImgUser] = useState("");

const signOutHandler = () => {
  setDashbod(false)
  setLog1(false)
  setLog3(true)
  setLog(true)
  setImgUser("")
}

  return (
  <div>
    {/* Nav-bar */}
    <div className='sticky-top myFlex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >

     <div><h1 style={{fontSize:25}}>Personal Blogging App</h1></div>
     <div> {dashbod ? <Link href={"/dashboard"} style={{marginRight:20}}>Dashboard</Link> : ""} {log1 ? <Link href={"/Profile"} style={{paddingRight:20}}>{log1}</Link>:""} {log3 ? log ? <Link style={{fontSize:18}} href={"/signIn"} onClick={() =>setLog(false)}>Login</Link>: <Link style={{fontSize:18}} href={"/signUp"} onClick={() => setLog(true)}>Sigup</Link>  : <Link style={{fontSize:18}} href={"/"} onClick={signOutHandler}>Signout</Link> }</div> 

    </div>

    <Component {...pageProps  } setLog1 ={setLog1}  setDashbod = {setDashbod} setLog3 = {setLog3} myid={myid} setById ={setById} userblg ={userblg} setUserBlg = {setUserBlg} log1 ={log1} imgUser = {imgUser} setImgUser = {setImgUser}/>
    </div>
  )
}
