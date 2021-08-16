import {
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    ADD_POST
  } from "../constants/constants";
  
  export const postreducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_POST_REQUEST:
        return {
          isloading: true,
        };
  
      case FETCH_POST_SUCCESS:
        return {
          isloading: false,
          postdet: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const postcommentreducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_POST_DETAILS_REQUEST:
        return {
          isloading: true,
        };
      case FETCH_POST_DETAILS_SUCCESS:
        return {
          isloading: false,
          comment: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const userreducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          isloading: true,
        };
        case FETCH_USER_SUCCESS:
            return{
                isloading:false,
                user:action.payload
            }
      default:
          return state
    }
  };
  
  export const mypostreducer=(state={mypost:[]},action)=>{
    switch(action.type){
      case ADD_POST:
        return{
          ...state,mypost:[...state.mypost,action.payload]
        }
        default:
          return state
    }
  }