import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {a:''}
    }
    update(){
        this.setState({
            a: this.a.value,   //example using a callback node
            b: this.refs.b.value  //regular ref
        })
    }

    render(){
        return (
            <div>
                <input
                    ref={node => this.a = node} //the ref can take a callback, where we return a node
                    type="text"
                    onChange={this.update.bind(this)}
                    />

                <br/>
                <br/>
                {this.state.a}

                <hr />

                <input
                    ref="b"  //ref actually returns a node, that's why this works the same as node a above
                    type="text"
                    onChange={this.update.bind(this)}
                />

                <br/>
                <br/>
                {this.state.b}

            </div>
        )
    }
}

export default App