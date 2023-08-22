import React from 'react';
import { Card,Avatar } from 'antd'
import { ArrowLeftOutline } from "heroicons-react";
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';

export default function OnlyOneUsrBlgs(props){
    const { myData } = props

    if(myData.blogs.length === 0){
      return (<div>
           <div className="userblogs-header">
      <ArrowLeftOutline style={{display:"inline-block "}}/>  <Link href={"/"}>Back to the Users Blog</Link>
      </div>

       <div style={{ backgroundColor:"#fff", boxShadow:"1px 1px 8px #777",padding:"10px ",textAlign:"center",display:'flex',justifyContent:'center', alignItems:"center", flexWrap:"wrap"}}> <Avatar size={64} icon={<UserOutlined />} /><h1 style={{fontSize:25, fontWeight:600}}>{myData.name}       Blogs</h1></div>

        <div  style={{display:"flex", justifyContent:"center", alignItems:"center",flexWrap:"wrap", gap:20,paddingTop:20}}>
        <Card key= {Math.random()} style={{width:700,wordWrap:"break-word",boxShadow:"1px 1px 8px #777"}}>
       <h1 style={{fontSize:20,fontWeight:600}}>{myData.name}  Blogs is Empty</h1>
     </Card>

        </div>
      </div>)
    }




    return(<div>
          <div className="userblogs-header">
      <ArrowLeftOutline style={{display:"inline-block "}}/>  <Link href={"/"}>Back to the Users Blog</Link>
      </div>

       <div style={{ backgroundColor:"#fff", boxShadow:"1px 1px 8px #777",padding:"10px ",textAlign:"center",display:'flex',justifyContent:'center', alignItems:"center", flexWrap:"wrap"}}><Avatar size={64} icon={<UserOutlined />} />   <h1 style={{fontSize:25, fontWeight:600}}>{myData.name}       Blogs</h1></div>

       <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexWrap:"wrap", gap:20,paddingTop:20}}>

     {myData.blogs.map((b) => <Card key= {Math.random()} style={{width:700,wordWrap:"break-word",boxShadow:"1px 1px 8px #777"}}>
       <h1 style={{fontSize:25,fontWeight:700}}>{b.heading}</h1>
       <p>{b.description}</p>
     </Card>)}

       </div>

    </div>)
}




export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/onlyOneUsr/");
  const data = await res.json();
  const myProduct = data.userId.map(p => {
      return { params: { bId: p.id.toString() } }
  })

  return {
      paths: myProduct,
      fallback: "blocking"
  }
}


export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/onlyOneUsr/${params.bId}`);
  const data = await res.json();
  console.log(data)

  return {
      props: {
          myData: data
      },
      revalidate: 10
  }
}
