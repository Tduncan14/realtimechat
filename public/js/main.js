 const chatForm = document.getElementById('chat-form')


 



const socket = io();



socket.on('message',message => {

    console.log(message);
    outputMessage(message)
});

// Message submit


chatForm.addEventListener('submit',(e)=>{
  e.preventDefault();


  const msg = e.target.elements.msg.value;




  // sending message as server
  socket.emit('chatMessage',msg);


})

// Output message to Dom


function outputMessage(message){

  const div = document.createElement('div')
  div.classList.add('message');
  div.innerHTML = `<p>
   ${message}
  </p>`

  document.getElementsByClassName('chat-messages').appendChild(div)
}