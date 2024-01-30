import React from 'react'

const ChatPage = ({ selectedUser, messages }) => {
  return (
    <div className='chatPage'>
      <h2>{selectedUser}</h2>
      <p>{messages}</p>
      <input type='text'
      placeholder='Type a message...' />
      <button>send</button>
    </div>
  )
}

export default ChatPage
