import { Card, Upload } from "antd";
import Link from "next/link";
// import UploadImg from "../Profile/uploadimg";
import React, { useRef } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

export default function Allblg_Card({blogs,mykey,name,handleDelete,blg}) {

 if(!blogs[0]){
    return <div>
         <Card  key={Math.random()} style={{
        width:700,
        boxShadow:"1px 1px 8px #777"
    }}>
       <Avatar size={64} icon={<UserOutlined />} /> {name} <h1 style={{
            fontSize: 20,
            fontWeight:500
        }}> Blogs is Empty</h1>
 
 <div className="btnCarddiv" style={{width: 120}}><Link href={`/onlyOneUsr/${mykey}`}>See from this user</Link></div>
    </Card>
    </div>
 }


return (
    <div className="allCardsBlog">
 <Card  key={Math.random()} style={{
        width:700,
        boxShadow:"1px 1px 8px #777"
    }}>
      <Avatar size={64} icon={<UserOutlined />} /> {name}   <h1 style={{
            fontSize: 30,
            fontWeight:500
        }}>{blogs[0].heading}</h1><sp></sp>
        <p>{blogs[0].description}</p>
 <div className="btnCarddiv" style={{width: 120}}><Link href={`/onlyOneUsr/${mykey}`}>See from this user</Link></div>
    </Card>
    </div>
)
}