import { Card } from "antd";
// import { Button } from "antd/es/radio";
// import Link from "next/link";
export default function Db_BlogCards({blogs, time,handleDelete,blg,userblg, heading, description}) {

        
return (
    <div className="allCardsBlog">
 <Card  key={Math.random()} style={{
        width:660,
        boxShadow:"1px 1px 8px #777"
    }}>
        <h1 style={{
            fontSize: 30,
            fontWeight:500
        }}>{heading}</h1><span>{time}</span>
        <p>{description}</p>
 <div className="btnCarddiv"> <button className="btnCard" onClick={() => handleDelete(blg.id)}>Delete</button><button className="btnCard">Edit</button></div>
    </Card>
 
    </div>
)
}


