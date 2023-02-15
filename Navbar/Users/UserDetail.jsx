import React from 'react'

const UserDetail = (props) => {
  return (
    <div className='container'>
        <h2>User Detail</h2>
        <pre>{JSON.stringify(props)}</pre>
        <div className='row'>
            <div className='card'>
                <div className='card-header'>
                  <img src={props.selectedUser.image} alt=""></img>
                </div>
                <div className='card-body'>
                  <ul className='list-group'>
                    <li className='list-group-item'>{props.selectedUser.age}</li>
                  </ul>
                </div>
            </div>
        </div>
        </div>
  )
}

export default UserDetail