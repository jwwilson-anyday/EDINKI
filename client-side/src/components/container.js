import React from 'react';
import Title from './title';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Title />
            </div>
         )
    }
}
 
export default Container;