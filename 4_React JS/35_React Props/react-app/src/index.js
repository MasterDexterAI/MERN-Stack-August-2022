import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.png'

const Status = (props) => {

    let status = props.status >= 18 ? "you can drive" : "you cannot drive"
    
    return <p>{status}</p>
}

const Header = (props) => {
    console.log(props);
    const welcome = "Welcome from variable"

    return (
        <header>
            <h1>Welcome to React</h1>
            <h2>{ welcome }</h2>
            <h3>{ props.title }</h3>
            <p>{ props.firstName} { props.lastName }</p>
            <small>{ props.date}</small>
        </header>
    )
}

const Age = (props) => {
    return (
        <div>
            this is some person with {props.age} years old.

            <Status status={17} />
        </div>
    )
}

const Skills = (props) => {
    // return <ul>{ props.skills }</ul>

    const skillList = props.skills.map( (s) =>  <li>{s}</li>)

    return <ul>{skillList}</ul>
}


const App = () => {

    const age = 35

    return (
        <div>
        <Header 
            welcome="hello from header component"
            title="getting started with react"
            firstName="Devanshu"
            lastName="Sharma"
            date='Dec 27, 2022'        
        />

        <Age age={age} />

        <Skills skills={['HTML', 'CSS', 'JS']} />
        
    </div>
    )
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);