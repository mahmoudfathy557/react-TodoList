import React, { Component } from 'react'
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
// showing vs-code github setu p
class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'buy stuff' },
      { id: 3, title: 'go  walking' },
    ],
    id: uuid(),
    item: '',
    editItem: false,
  }

  handleChange = (e) => {
    console.log('handlechange')
  }
  handleSubmit = (e) => {
    console.log('handleSubmit')
  }
  clearList = (e) => {
    console.log('clear list')
  }
  handleDelete = (id) => {
    console.log('handle delete ', id)
  }
  handleEdit = (id) => {
    console.log('editing ', id)
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-5 '>
              <h3 className='text-capitalize text-center'>Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
