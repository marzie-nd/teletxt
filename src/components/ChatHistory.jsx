import React from 'react'

const ChatHistory = ({message, user}) => {
  return (
    <div className='chatHistory'>
      {message.map((message, index) => (
        <div key={index}>
            {message.user}: {message.text}
        </div>
      ))}
    </div>
  )
}

export default ChatHistory
