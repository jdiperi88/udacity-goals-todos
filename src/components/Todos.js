import React from 'react'
import List from './List'
import { connect } from 'react-redux'
import { 
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../actions/todos'

class Todos extends React.Component {
    addItem = (e) =>{
        e.preventDefault();
        this.props.dispatch(handleAddTodo(
            this.input.value,
            ()=>this.input.value = ''
        ))
    }

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))

        
    }

    toggleItem=(id) =>{
        this.props.dispatch(handleToggle(id))
    }

    render(){
        return(
            <div>
                <h1>TODOS</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List
                    items={this.props.todos}
                    removeItem={this.removeItem}
                    toggleItem={this.toggleItem}
                />
            </div>
        )
    }
}

export default connect((state)=>({
    todos:state.todos
}))(Todos)