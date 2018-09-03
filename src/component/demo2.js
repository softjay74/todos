import React from 'react'

class Demo2 extends React.Component {

    state ={
        todos : [],
        todo : "",
    }
    
    componentDidMount = () =>{
        fetch('http://localhost:5000/todos'
         )
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                todos : json
            })
            })
        .catch(err=>console.log(err))    
    }

    inputChange = event =>{
        const  { target :{ value } }= event
        this.setState({
            todo : value
            })
    }

   
    addTodo = (event) =>{
        const {todos, todo} = this.state
        event.preventDefault();
        fetch('http://localhost:3000/todos',{
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ todo })
        })
        .then(response=>response.json())
        .then(json=> {
            console.log(json)
            this.setState({
                todos : [...todos, todo],
                todo : ""
            })
        })
        .catch(err=>console.log(err))
        
    }


    render() {
        
        const { todos, todo } = this.state
        return (
        <div>
        <div>
            Input : {todo}
            <ul>{ todos.map(todo => <li>{todo}</li> ) }</ul></div> 
            
        <input type="text" name="todo" value={todo} onChange={this.inputChange} />
        <input type="button" value="ADD TODS" onClick={this.addTodo} />
                
        </div>    
        );
    }
}
export default Demo2;