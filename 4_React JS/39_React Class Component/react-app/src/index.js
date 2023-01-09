import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// // class component
class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.data)
        const {
            welcome,
            title,
            student: { name, age},
        } = this.props.data

        // return (
        //     <header>
        //         <h1>Header Class Component</h1>
        //         <h2>{this.props.data.welcome}</h2>
        //         <h3>{this.props.data.title}</h3>
        //         <p>{this.props.data.student.name} {this.props.data.student.age}</p>

        //     </header>
        // )
        return (
            <header>
                <h1>Header Class Component</h1>
                <h2>{welcome}</h2>
                <h3>{title}</h3>
                <p>{name} {age}</p>

            </header>
        )
    }
}

class TechList extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const tech = ['HTML', 'CSS', "JS"]
        const techFormat = tech.map( (t) => <li key={t}>{t}</li>)

        return techFormat
    }

}


const Main = () => {
    const data = {
        welcome: "welcome to main",
        title: "lets start",
        student: {
            name: 'Abhinav',
            age: '23'
        }
    }

    return (
        <main>
            <h1>main section</h1>
            <Header data={data} />
            <TechList />
        </main>
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<Main />, rootElement);