import {useEffect,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cardtype from "../Components/Card/Cardtype";
import Loader from "../Components/Loader/Loader";
import { postdetails } from "../Components/Redux/actions/postaction";
import { connect } from "react-redux";
import Paginations from "../Components/Pagination/Paginations";

function Post(props) {
   const [state, setstate] = useState(1)
   const {postdetails}=props;
   
   useEffect(() => {
    //console.log("first time running");
    console.log(props);
    postdetails(state);
   }, [state,postdetails])
  
  

  
  
  
    return (
      <>
        {props.isloading ? (
          <Loader />
        ) : (
          <Container className='mt-3'>
            <Row>
              {!props.postdet
                ? ""
                : props.postdet.map((post) => {
                    return (
                      <Col sm={12} md={6} lg={4} xl={3} key={post.id}>
                        <Cardtype post={post}/>
                      </Col>
                    )
                  })}
              );
            </Row>
            <Paginations number={state} setstate={setstate}/>
          </Container>
        )}
      </>
    );
  
}

const mapStateToProps = (state) => ({
  isloading: state.postreducer.isloading,
  postdet: state.postreducer.postdet,
});
const mapDispatchToProps = (dispath) => {
  return {
    postdetails: (number) => dispath(postdetails(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
