import React from 'react';
import Modal from './Components/Modal'
import Columns from './Components/Columns'
import Tasks from './Components/Tasks'
import './Components/Todo_list.css'


class Todo_List extends React.PureComponent {

  state = {
    displayModal: false,
    columns: [
        { id: 'todo', title: 'TO DO', tasks:
                      [
                        {id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 2, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}
                        ] },
        { id: 'inprogress', title: 'IN PROGRESS', tasks:
                          [
                        {id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 2, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 3, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 4, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}
                          ] },
        { id: 'done', title: 'DONE', tasks: [
                        {id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 2, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'},
                        {id: 4, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}
                          ] }
              ],
      }

      handleToggleModal = () => {
        this.setState(prevState => ({
          displayModal: !prevState.displayModal
        }))
      }

      handleSaveTask = (type, value) => {
        const Newcolumns = Array.from(this.state.columns)
        Newcolumns.map( item => {
            if(item.id === type){
            const task = {id: item.tasks.length + 1, content: value, time:Date.now()}
            item.tasks.push(task)
            console.log('Add successs!', task)
          }
        } )
        console.log(Newcolumns)
        this.setState({
          columns : Newcolumns,
          displayModal: false
        })
      }

    render(){

    const { columns, displayModal } = this.state;
    return (
      <>
       <div>
            <h1>TO DO LIST</h1>
            <div className="App__content">
              {
                columns.map(column => (
                    <Columns key={column.id} column={column} handleToggleModal={this.handleToggleModal}>
                        <div>
                            {
                                column.tasks.map(task => (
                                    <Tasks key={task.id}/>
                                ))
                            }
                        </div>
                    </Columns>
                ))
              }
            </div>
        </div>
        {displayModal && <Modal  handleSaveTask={this.handleSaveTask} handleToggleModal={this.handleToggleModal}/>}
        </>
    );
}
}

export default Todo_List;
