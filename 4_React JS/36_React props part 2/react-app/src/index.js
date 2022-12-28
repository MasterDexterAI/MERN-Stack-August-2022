import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.png'

// props objects data

// const Header = (props) => {
//     console.log(props);

//     return (
//         <header>
//             <h1>Welcome to React</h1>
//             <h2>{ props.data.welcome }</h2>
//             <h3>{ props.data.title }</h3>
            
//             <small>{ props.data.city}</small>
//         </header>
//     )
// }

// const App = () => {

//     const age = 35

//     const data = {
//         welcome: 'welcome data',
//         title: 'starting data',
//         city: 'indore'
//     }

//     return (
//         <div>
        
//         <Header data={data} />
        
//     </div>
//     )
// }

// function props type
// props = {
//     text: "HI how are you/",
//     onClick: sayHi
// }

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            { props.text }
        </button>
    )
}

// const App = () => {
//     const sayHi = () => {
//         alert("Hi");
//     }

//     return (
//         <div>
//             <Button text="Hi How are you?" onClick={ sayHi } />
//         </div>
//     )
// }

// destructuring
const Header = (props) => {
    const { welcome, title, city } = props.data

    return (
        <header>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{city}</h3>
        </header>
    )
}


const App = () => {

    const data = {
        welcome: "Welcome user",
        title: "hello from user",
        city: "indore"
    }

    return (
        <div>
            <Button text="Hi How are you?" onClick={ () => alert("Hi hello") } />

            <Header data={data} />
        </div>
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);