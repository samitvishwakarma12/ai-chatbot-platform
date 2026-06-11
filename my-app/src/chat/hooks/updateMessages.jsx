function updateMessages(setMessages, role, text){



  setMessages(prev => [
    ...prev,
    { role, text }
  ]);
}



export default updateMessages