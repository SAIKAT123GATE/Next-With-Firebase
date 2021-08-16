import { Card } from "react-bootstrap";
import  Link  from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Cardtype(props) {
  //console.log(props);
  const router=useRouter(); 
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Card.Img variant='top' src='https://via.placeholder.com/600/771796' />
      <Card.Body>
      <Card.Title>Name: <span style={{color:"red",cursor:"pointer"}} onClick={()=>router.push(`/userpost/${props.post.userId}`)}>{props.post.name}</span></Card.Title>
        <Card.Title>Card title: {props.post.title}</Card.Title>
        <Card.Text>
          {props.post.body.slice(0,100)}....
          <Link href={`/postdetailsscreen/${props.post.id}`}><a>Read More</a></Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
