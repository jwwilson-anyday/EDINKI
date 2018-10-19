import React from 'react';
import Venderlist from './venderlist';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Venderlist />
            </div>
         )
    }
}
 
export default Container;