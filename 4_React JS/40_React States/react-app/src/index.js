import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// states

// class App extends Component{

//     state = {
//         count: 0,
//     }

//     render(){

//         const count = this.state.count

//         return (
//             <div>
//                 <h1>{count}</h1>
//                 <button onClick={ () => this.setState({ count: this.state.count + 1  }) }>
//                     Add one
//                 </button>

//                 <button onClick={ () => this.setState({ count: this.state.count - 1  }) }>
//                     Substract one
//                 </button>
//             </div>
//         )
//     }
// }


class App extends Component{

    state = {
        count: 0,
        modeName: {
            dark: { backgroundColor: 'black'}
        }
    }

    addOne = () => {
        this.setState({ 
            count: this.state.count + 1  
        })
    }

    minusOne = () => {
        this.setState({ 
            count: this.state.count - 1  
        })
    }

    white = () => {
        this.setState({
            modeName: {
                dark: { backgroundColor: 'white'}
            }
        })
    }


    render(){

        const count = this.state.count

        

        const dark = this.state.modeName.dark

        return (
            <div style={dark}>
                 <button onClick={ this.white }>
                    Color
                </button>

                <h1>{count}</h1>
                <button onClick={ this.addOne }>
                    Add one
                </button>

                <button onClick={ this.minusOne }>
                    Substract one
                </button>
            </div>
        )
    }
}





const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);