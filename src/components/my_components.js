import React from 'react';
const MyComponent=(props)=>{
    return(
        <div><h1>Hello, {props.name}</h1>
         <p>{props.message}</p></div>
       
    )
};
// MyComponent.defaultProps={
//     name:"guest",
//     message:"Welcome to My website"
// };
export default MyComponent;