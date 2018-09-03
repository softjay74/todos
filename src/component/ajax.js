
const todos = () =>{
    todos = ["A", "B", "C" ]

    app.get( "/todos" , (req, res) => {
        return res.json(todos);
    })

    app.post("/todos", (req, res) =>{
    todos.push(req.body.todo);
    return res.json(todos)
    })
}