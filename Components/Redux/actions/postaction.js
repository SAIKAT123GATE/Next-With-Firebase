import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    ADD_POST,
    
  } from "../constants/constants";
  import axios from "axios";
  export const postdetails = (number) => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_POST_REQUEST,
      });
      var postdata = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${number}&_limit=10`
      );
      var obj = [];
      //console.log(data.data);
      for (var i = 0; i < postdata.data.length; i++) {
        var user = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postdata.data[i].userId}`
        );
        //console.log(user.data);
        var objdata = {
          name: user.data.name,
          id: postdata.data[i].id,
          userId: postdata.data[i].userId,
          title: postdata.data[i].title,
          body: postdata.data[i].body,
        };
        obj.push(objdata);
      };
  
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: obj,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const postcomments = (id) => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_POST_DETAILS_REQUEST,
      });
      var particularpost=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      var comments=await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      var obj={
          title:particularpost.data.title,
          body:particularpost.data.body,
          comments:comments.data
      }
  
      dispatch({
          type:FETCH_POST_DETAILS_SUCCESS,
          payload:obj
      })
  
    } catch (err) {
      console.log(err);
    }
  };
  
  
  export const userdetails=(id)=>async(dispatch)=>{
    try{
        dispatch({
          type:FETCH_USER_REQUEST
        })
  
        var userpost=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        var username=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        var obj={
          name:username,
          userpost:userpost.data
        }
  
        dispatch({
          type:FETCH_USER_SUCCESS,
          payload:obj
        })
  
    }catch(err){
      console.log(err);
    }
  }
  
  
  export const mypost=(title,description)=>async(dispatch)=>{
    try{
      console.log("Mypost action triggered");
      var obj={
        title:title,
        description:description
      }
      dispatch({
        type:ADD_POST,
        payload:obj
      })
    }catch(err){
      console.log(err);
    }
  }
  