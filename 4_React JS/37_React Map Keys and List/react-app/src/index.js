import React from 'react';
import ReactDOM from 'react-dom';

// map, list, keys

// const Numbers = ({ numbers }) => {
//     const list = numbers.map( (n) => <li>{n}</li>)

//     return list
// }


// const App = () => {
//     const numbers = [1,2,3,4,5]

//     return (
//         <div>
//             <h1>Numbers</h1>
//             <ul>
//                 <Numbers numbers = {numbers} />
//             </ul>
            
//         </div>
//     )
// }

// const skills = [
//     ['HTML', 10],
//     ['CSS', 7],
//     ['JS', 9],
//     ['React', 8]
// ]

// { skill: [tech, level]} = { skill: ['HTML', 10]}

// const Skill = ({ skill: [tech, level]}) => {
//     return (
//         <li>
//             {tech} {level}
//         </li>
//     )
// }


// const Skills = ({ skills }) => {
//     const skillList = skills.map( (s) => <Skill skill={s} />)
//     console.log(skillList);

//     return <ul>{skillList}</ul>
// }


// keys

const Numbers = ({ numbers }) => {
    const list = numbers.map( (n) => <li key={n}>{n}</li>)

    return list
}


const App = () => {
    const numbers = [1,2,3,4,5]
    
    return (
        <div>
            <h1>Skills Level</h1>
            
            <ul>
                <Numbers numbers ={numbers} />
            </ul>
        </div>
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);