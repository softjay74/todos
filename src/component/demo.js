import React, {Component} from 'react'

class Demo1 extends Component {

    state ={
        todos : ["foo", "bar", "baz"],
        todo : ""
    }
    
    inputChange = event =>{
        const  { target :{ value } }= event
        this.setState({
            todo : value
            })
    }

    CheckKey= event =>{
        console.log(event.key)
        if(event.key==="Enter"){
        const {todos, todo} = this.state
        this.setState({
            todos : [...todos, todo],
            todo : ""
        })
        }

    }
    addTodo = (event) =>{
        console.log("test")
        event.preventDefault();
        
        const {todos, todo} = this.state
        this.setState({
            todos : [...todos, todo],
            todo : ""
        })
    }


    render() {
        
        const { todo, todos } = this.state
        return (
        <div>
        <div>todo : {todo}</div>
        <div><ul>{ todos.map(todo => <li>{todo}</li> ) }</ul></div>
                
                <input type="text" name="todo" value={todo} onChange={this.inputChange} onKeyPress={this.CheckKey}/>
                <input type="button" value="ADD TODS" onClick={this.addTodo} />
                
        </div>    
        );
    }
}
export default Demo1;