import { combineReducers } from "redux";
import { postreducer,postcommentreducer,userreducer,mypostreducer } from "./postreducer";
export default combineReducers({
    postreducer:postreducer,
    postcommentreducer:postcommentreducer,
    userreducer:userreducer,
    mypostreducer:mypostreducer

})