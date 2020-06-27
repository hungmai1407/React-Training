import React from 'react'
import './Todo_list.css'
import Tasks from './Tasks'
import Data from '../TodoContext'
class Columns extends React.Component{

    render(){

        const { handleToggleModal, column } = this.props
        console.log(column)


        return (
        <>
        <Data.Provider value={column.tasks}>
            <div className="content_columns">
                <div className="content_columns_header">
                    <p className='Number_Task'> {column.tasks.length} </p>
                    <h3> {column.title} </h3>
                    <button className='button_modal' onClick={ () => handleToggleModal() } >+</button>
                </div>
                <div>
                    <Tasks />
                </div>
            </div>
        </Data.Provider>
        </>)
        // return <h1>Columns</h1>
    }
}

Columns.contextType = Data
export default Columns