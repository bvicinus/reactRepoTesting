import React from 'react';

class App extends React.Component {
    constructor(){
        super(); //this will give 'this' the context of this component rather than its parent
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }

    update( e ) {
        this.setState({txt: e.target.value})
    }

    render(){
        return (
         <div>
             <input type="text"
                    onChange={this.update.bind(this)}/>
            <h1>{this.state.txt}</h1>
             <b>{this.state.cat}</b>
         </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is a default text"
}

//const App = () => <h1>Hello stateless </h1>

export default App