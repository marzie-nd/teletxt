import React from 'react'

const SendButton = ({onSendMessage, newMessage, setNewMessage}) => {
  return (
    <div className='SendButton'>
      <button
          onClick={() => {
            onSendMessage(newMessage);
            setNewMessage("");
          }}
        >
          send
        </button>
    </div>
  )
}

export default SendButton
