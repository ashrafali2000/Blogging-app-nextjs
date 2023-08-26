import { Card, Upload } from "antd";
import Link from "next/link";
import styles from "../../styles/MyStyle.module.css";
import React, { useRef } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

export default function Allblg_Card({blogs,blogimg,mykey,name,handleDelete}) {

 if(!blogs[0]){
    return <div>
         <Card className={styles.myCard} key={Math.random()} style={{
        width:700,
        boxShadow:"1px 1px 8px #777"
    }}>
       <Avatar src={blogimg} style={{width:60, height:60}} /> {name} <h1 style={{
            fontSize: 20,
            fontWeight:500
        }}> Blogs is Empty</h1>
 
 <div className="btnCarddiv" style={{width: 120}}><Link href={`/onlyOneUsr/${mykey}`}>See from this user</Link></div>
    </Card>
    </div>
 }


return (
    <div className="allCardsBlog">
 <Card className={styles.myCard}  key={Math.random()} style={{
        width:700,
        boxShadow:"1px 1px 8px #777"
    }}>
     <Avatar src={blogimg} style={{width:60,height:60}} /> <div style={{display:"inline"}}> <span>{name} </span> <br></br> <span style={{display:"inline-block"}}> {blogs[0].getTime} </span></div>  <h1 style={{
            fontSize: 30,
            fontWeight:500
        }} className={styles.myHeading}>{blogs[0].heading}</h1>
        <p>{blogs[0].description}</p>
 <div className="btnCarddiv" style={{width: 120}}><Link href={`/onlyOneUsr/${mykey}`}>See from this user</Link></div>
    </Card>
    </div>
)
}