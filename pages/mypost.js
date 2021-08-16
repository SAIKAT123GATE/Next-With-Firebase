import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { mypost } from "../Components/Redux/actions/postaction";

class Mypost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
  }
  handlesubmit = async (e, mypost) => {
    e.preventDefault();
    var { title, description } = this.state;
    if (title !== "" && description !== "") {
      mypost(title, description);
      this.setState({
        title: "",
        description: "",
      });
    } else {
      alert("Invalid Data");
    }
  };

  handlechange = (e) => {
    const { value, name } = e.target;
    // console.log({[name]:value});
    this.setState({ [name]: value });
  };
  
  render() {
    return (
      <Container className='mt-3'>
        <h2>Write Your Post</h2>
        <form
          className='mt-3'
          onSubmit={(e) => this.handlesubmit(e, this.props.mypost)}>
          <div className='form-outline mb-2'>
            <label className='form-label' htmlFor='title'>
              TITLE
            </label>
            <input
              type='text'
              id='title'
              className='form-control'
              placeholder='Enter Title Here'
              value={this.state.title}
              onChange={(e) => this.handlechange(e)}
              name='title'
            />
          </div>

          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='description'>
              Description
            </label>
            <textarea
              rows='3'
              id='description'
              className='form-control'
              placeholder='Description'
              value={this.state.description}
              onChange={(e) => this.handlechange(e)}
              name='description'
            />
          </div>

          <button type='submit' className='btn btn-primary btn-block mb-4'>
            ADD POST
          </button>
        </form>

        <>
          {this.props.mypostdata.length === 0 ? (
            ""
          ) : (
            <>
              <h3>MY POSTS</h3>
              <ListGroup>
                {this.props.mypostdata.map((data, index) => {
                  return (
                    <ListGroup.Item key={index.toString()}>
                      <h5>Title: {data.title}</h5>
                      <p>Description: {data.description}</p>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </>
          )}
        </>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  mypostdata: state.mypostreducer.mypost,
});

const mapDispatchToProps = (dispatch) => {
  return {
    mypost: (title, description) => dispatch(mypost(title, description)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mypost);
