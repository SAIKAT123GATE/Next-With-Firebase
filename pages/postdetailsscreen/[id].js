import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { postcomments } from "../../Components/Redux/actions/postaction";
import Loader from "../../Components/Loader/Loader";
import { withRouter } from "next/router";

class Postdetailsscreen extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.postcomments(this.props.router.query.id);
  }
  render() {
    return (
      <>
        {this.props.isloading ? (
          <Loader />
        ) : (
            
          <Container>
              {!this.props.comment?"":(
                  <>
                  <h2 style={{marginTop:"1rem",marginBottom:"1rem"}}>Title:{this.props.comment.title}</h2>
                  <p>Description:{this.props.comment.body}</p>
                  <h4>Comments:</h4>
                  <ListGroup variant='flush'>
                      {this.props.comment.comments?this.props.comment.comments.map(eachcomment=>{
                          return(
                              <ListGroup.Item key={eachcomment.id}>{eachcomment.body}</ListGroup.Item>
                          )
                      }):""}
                  </ListGroup>
                  </>
              )}
              
          </Container>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isloading: state.postcommentreducer.isloading,
  comment:state.postcommentreducer.comment
});
const mapDispatchToProps = (dispatch) => {
  return {
    postcomments: () => dispatch(postcomments(1)),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Postdetailsscreen));
