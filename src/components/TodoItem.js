import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props
    return (
      <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        <h6>{title}</h6>
        <div className='todo-icon'>
          <span className='btn  mx-2 text-succes' onClick={handleEdit}>
            <i style={{ cursor: 'pointer' }} className='fas fa-pen'></i>
          </span>
          <span className=' btn mx-2 text-danger' onClick={handleDelete}>
            <i style={{ cursor: 'pointer' }} className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    )
  }
}
