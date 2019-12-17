import React, { Component } from 'react';

class Home extends Component {
    state = {  }

    componentWillMount() {
        document.title="OMEGA";
    }

    render() { 
        return ( 
            <div className='home'>
                <img src="/img/omega114.jpg" alt="OMEGA" width="100%"/>

            </div>
         );
    }
}
 
export default Home;