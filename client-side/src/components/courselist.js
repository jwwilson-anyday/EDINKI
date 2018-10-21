import React,{Component} from 'react';

export default class Courselist extends Component {
constructor(props){
super(props);
this.state ={};
}

// let newPost = {
//     title: "hello world",
//     body: "That's really something"
// }

// fetch('http://localhost:5000/api/venders/', {
//     method: 'post',
//     body: JSON.stringify(newPost)
// })
// .then(response => response.json())
// .then(data =>{
//     console.log('post request response data: ', data)

// })
render(){

    return(
        <div>
            <h4>Hi from Course List</h4>
        </div>
    )
}
}