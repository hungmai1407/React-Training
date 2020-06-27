import React from 'react'
import './Todo_list.css'

class Modal extends React.PureComponent{

    state={
        status: '',
        value: ''
    }
    render(){
        const { handleToggleModal, handleSaveTask } = this.props

        return <div className='Modal_Content'>
         <h1>New Task</h1>
         <div>
            <div className="Checkbox_Id">
            <label htmlFor="todo" onClick={ () => {this.setState({status:'todo' })}}><input name='new'  type='radio' id='todo' className='label'/>
            TO DO
            </label>
            <label htmlFor="inprogress" onClick={ () => this.setState({status:'inprogress' }) } ><input name='new' id='inprogress' type='radio' className='label' />
            IN PROGRESS
            </label>
            <label htmlFor="done" onClick={ () => this.setState({status:'done' }) }><input name='new' id='done'  type='radio' className='label' />
            DONE
            </label>

            </div>
            <div>
                <input onChange={ (e) => this.setState({value: e.target.value}) } className="inputName" placeholder="Name........" />
            </div>
            <div
            className='Modal_Footer'>
                <button id='save' onClick={ () => handleSaveTask(this.state.status, this.state.value)}>Save</button>
                <button id='back' onClick ={handleToggleModal}>Back</button>
            </div>
         </div>
         </div>
    }

}
export default Modal