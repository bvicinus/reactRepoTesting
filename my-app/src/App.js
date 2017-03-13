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
            <h1>{this.state.txt}</h1>

             <Widget update={this.update.bind(this)} />

             <br/>

             <Widget update={this.update.bind(this)} />

             <br/>

             <Widget update={this.update.bind(this)} />

             <br/>
             <br/>

             <b>stateCat = {this.state.cat}</b>
             <br/>
             <b>propsCat = {this.props.cat}</b>
         </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />




export default App