
import API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal){
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id){
    return {
        type: REMOVE_GOAL,
        id
    }
}

export function handleDeleteGoal(goal){
    return ( dispatch) => {
        dispatch(removeGoal(goal.id));
        return API.deleteGoal(goal.id)
            .catch(()=>{
                dispatch(addGoal(goal));
                alert('error occured')
            })
    }
}

export function handleAddGoal(name, cb){
    return (dispatch) => {
        return API.saveGoal(this.input.value)
            .then((goal)=> {
                dispatch(addGoal(goal))
                cb()
            }).catch(()=>{
                alert('there was an error!')
            })
    }
}