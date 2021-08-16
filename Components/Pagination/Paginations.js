import { Container, Pagination } from "react-bootstrap";

 function Paginations(props) {
  let active = props.number;
  let items = [];
  
  for (let number = 1; number <= 10; number++) {
    items.push(
      
      <Pagination.Item key={number} active={number === active} onClick={()=>props.setstate(number)}>
        {number}
      </Pagination.Item>
      
    );
  }

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Pagination>{items}</Pagination>
      </div>
    </Container>
  );
}

export default Paginations;