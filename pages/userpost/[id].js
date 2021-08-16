import  { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { userdetails } from "../../Components/Redux/actions/postaction";
import Loader from "../../Components/Loader/Loader";
import { withRouter } from "next/router";

class Userscreen extends Component {
  constructor(props) {
    super(props);
    
    console.log(props);
  }

  componentDidMount() {
    this.props.userdetails(this.props.router.query.id);
  }

  render() {
    return (
      <>
        {this.props.isloading ? (
          <Loader />
        ) : (
          <Container style={{ marginTop: "1rem" }}>
            {!this.props.user ? (
              ""
            ) : (
              <>
                <h2>Name: {this.props.user.name.data.name}</h2>
                <h4 style={{ marginTop: "0.5rem" }}>Posts:</h4>
                <ListGroup>
                  {this.props.user.userpost.map((post) => {
                    return (
                      <ListGroup.Item key={post.id}>
                        <h5>Title: {post.title}</h5>
                        <p>Description: {post.body}</p>
                      </ListGroup.Item>
                    );
                  })}

                  
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
  isloading: state.userreducer.isloading,
  user: state.userreducer.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userdetails: (id) => dispatch(userdetails(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Userscreen));
