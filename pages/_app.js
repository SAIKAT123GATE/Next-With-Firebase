import '../styles/globals.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import {store} from "../Components/Redux/store";
import {createWrapper} from "next-redux-wrapper";
import Header from '../Components/Header/Header';
import { auth, userexists } from "../Components/firebase/firebase.utils";
import { withRouter } from "next/router";

class MyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentuser: null,
    };
    
  }
  unsubscribeFromAuth = null;


  componentDidMount() {
    
    
    if(this.state.currentuser){
      this.props.router.push("/post");
    }
    else{
      this.props.router.push("/");
    }
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await userexists(user);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentuser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
        this.props.router.push("/post");

      } else {
        this.setState({ currentuser: user });
        console.log(this.state);
        
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <Provider store={store}>
      <Header currentuser={this.state.currentuser}/>
      <this.props.Component {...this.props.pageProps} />
    </Provider>
  )}
}
const makestore=()=>store;
const wrapper= createWrapper(makestore);

export default withRouter(wrapper.withRedux(MyApp));
