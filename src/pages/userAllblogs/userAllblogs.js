import { Card } from "antd";
import Link from "next/link";
import React, { useRef } from 'react';

export default function UserAllBlogs({blogs,handleDelete,blg}) {
  const blogg =   blogs.map((myblg) => <Card  key={Math.random()} style={{
        width:600,
        boxShadow:"1px 1px 8px #777"
    }}>
        <h1 style={{
            fontSize: 30,
            fontWeight:500
        }}>{myblg.heading}</h1>
        <p>{myblg.description}</p>
 
    </Card>)

return (
    <div className="allCardsBlog">
     {blogg}
    </div>
)
}