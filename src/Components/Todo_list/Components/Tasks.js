import React from 'react'
import './Todo_list.css'
import Data from '../TodoContext'
class Task extends React.PureComponent{

    render() {
        return this.context.map((item, index) => <div className="item_Task" key={index}>
                            <strong className="Name_Task"> {item.time} </strong>
                            <h2 className='Title_task'> {item.content} </h2>
                            <div className="button_action_task">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
        )
}
}

Task.contextType = Data
export default Task