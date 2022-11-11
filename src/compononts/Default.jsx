import React, { Component } from 'react'


class Default extends Component {
   
    state = {  } 
    render() { 
        
        console.log(this.props);
        return (<>
       
            <h3>default</h3>
            </>
        );
    }
}
 
export default Default;