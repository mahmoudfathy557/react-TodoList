import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props
    return (
      <section>
        <ul className='list-group my-5'>
          <h3 className='text-capitalize text-center'>Todo List</h3>
          {items.map((item) => (
            <TodoItem
              item={item}
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          ))}
          <button
            type='button'
            className='btn btn-danger btn-block text-uppercase mt-5'
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </section>
    )
  }
}
