import axios from "axios";
var obj=[];

export async function postobject(state,data){
    console.log(state);
 for(var i=0;i<data.length;i++){
     //console.log(data[i].userId);
     var user= await axios.get(`https://jsonplaceholder.typicode.com/users/${data[i].userId}`);
     //console.log(user.data);
     var objdata={
        name:user.data.name,
        id:data[i].id,
        userId:data[i].userId,
        title:data[i].title,
        body:data[i].body
     }
     obj.push(objdata);
 }
 console.log("Before return statement");
 //console.log([...postdetails,obj]);
 return({...state,obj});
}
