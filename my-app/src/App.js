import React from 'react';

class App extends React.Component {
    render(){
        return (
         <div>
            <h1>{this.props.txt}</h1>
             <b>Bold Text</b>
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