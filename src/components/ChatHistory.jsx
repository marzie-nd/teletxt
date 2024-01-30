const ChatHistory = ({ messages, user }) => {
  return (
    <div className='chatHistory'>
      {
        messages.map((message, index) => (
          <div key={index}>
            {message.text}
          </div>
        ))
      }
    </div>
  )
}

export default ChatHistory;
