import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           venders: []            //In the data returned from the API call, the data returned  an object
        }
    }


    componentDidMount() {

        fetch('http://localhost:5000/api/venders/')
            .then(response => response.json())   //This takes json and makes it into an object
            .then(data => {                   // object is stored in the DATA
                console.log(data);
                //  console.log(data.number);
                //   console.log(data.people);

                this.setState({
                    //  numAstros: data.number,
                    venders: data.vender  // used in line 36 to be able to map the array
                })
            });
    }

    render() {
        return (
            <div>
                <h1>Hello Now!</h1>
                <span>Number of Venders in file: {this.state.venders.length}</span>
                <h3>Venders</h3>
                <ul>
                    {this.state.venders.map(vender => {
                        return (
                            <li key={vender._id}>{vender.firstname} {vender.lastname}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
};