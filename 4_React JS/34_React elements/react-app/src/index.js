import React from 'react';
import ReactDOM from 'react-dom';
import him from './images/himanshu1.png'

// const jsxElement = <h1>This is first jsx Element</h1>

// components
// functional components - presentational components/ stateless / dumb component
// class components - container /statefull / smart component


const Header = () => {
    const headerStyle = {
        backgroundColor: 'lightgrey',
        padding: 25,
        lineHeight: 1.5
    }

    return (
        <header style={headerStyle}>
            <h1>Welcome to React sessions</h1>
            <h2>Indore</h2>
            <p>this is html css js react</p>
            <small>December 21, 2022</small>
        </header>
    )
}

const Main = () => {
    return (
        <main>
            <User />
            <p>Learn these skills</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </main>
    )
}


const Footer = () => {
    return (
        <footer style={{backgroundColor: 'yellow'}}>
            <p>Copyright 2022</p>
        </footer>
    )
}

const User = () => {
    return (
        <div>
            <img src={him} alt='User not found' />
            <h2>Himanshu</h2>
        </div>
    )
}


// const headerStyle = {
//     backgroundColor: 'cyan',
//     padding: 25,
//     lineHeight: 1.5
// }

// const header = (
//     <header style={headerStyle}>
//         <h1>Welcome to React sessions</h1>
//         <h2>Indore</h2>
//         <p>this is html css js react</p>
//         <small>December 21, 2022</small>
//     </header>
// )

// const main = (
//     <main>
//         <p>Learn these skills</p>
//         <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JS</li>
//         </ul>
//     </main>
// )


// const footer = (
//     <footer style={{backgroundColor: 'yellow'}}>
//         <p>Copyright 2022</p>
//     </footer>
// )


const app = (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
)


const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);