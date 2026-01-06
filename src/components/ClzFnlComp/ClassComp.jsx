import React from "react";

// class Clz extends React.Component{  //clz comp
//     render(){
//         return <h2>hello</h2>
//     }
// }

class Clz extends React.Component {
    render(){
        return <h2>{this.props.name}</h2>
    }
}

export default Clz

//Access props via this.props
//Has internal state via this.state and setState