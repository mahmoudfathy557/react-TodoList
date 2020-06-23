import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book' />
              </div>
            </div>
            <input
              type='text'
              onChange={handleChange}
              value={item}
              className='form-control text-capitalize'
              placeholder='add todo item'
            />
          </div>
          <button
            type='submit'
            disabled={item.length > 0 ? false : true}
            className={
              editItem
                ? 'btn-block btn-success mt-3  '
                : ' btn-block btn-primary mt-3 text-uppercase'
            }
          >
            {editItem ? 'edit item' : 'Add item'}
          </button>
        </form>
      </div>
    )
  }
}
