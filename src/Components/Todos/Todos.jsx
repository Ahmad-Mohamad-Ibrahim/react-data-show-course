import { Component } from "react";
import axios from "axios";
import Todo from "../Todo/Todo";

class Todos extends Component {
    state = { todos: [], max:5, min:0  }
    componentDidMount() {
        axios.get("https://dummyjson.com/todos")
        .then(data =>  {
            console.log(data);
            this.setState({todos: data.data.todos});
        })
        .catch(err => {console.log(err);});
    }
    prev = () => {
        let count = this.state.todos.length;
        let newMin = this.state.min - 5;
        let newMax = this.state.max - 5;
        if(0 > newMin) {
            newMin = count + newMin;
            newMax = newMin + 5;
        }

        this.setState({max: newMax });
        this.setState({min: newMin });
        console.log(newMax, newMin);
    } 
    next = () => {
        let count = this.state.todos.length;
        let newMin = this.state.min + 5;
        let newMax = this.state.max + 5;
        if(count < newMax) {
            newMax = count - newMax + 5 * 2;
            newMin = newMax - 5;
        }
        this.setState({max: newMax });
        this.setState({min: newMin });
        console.log(newMax, newMin);
    }
    render() { 
        return (
            <div className="container">
            <h1>Todos</h1>
            <div className="d-flex flex-column">
                <div className="row justify-content-around">
                        <button onClick={this.prev} className="col-5 btn btn-primary">Prev</button>
                        <button onClick={this.next} className="col-5 btn btn-primary">Next</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                                if(index <= this.state.max - 1 && index >= this.state.min) {
                                    return <tr key={todo.id}><Todo todoInfo={todo} /></tr>
                                }
                        })}
                        
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}
 
export default Todos;