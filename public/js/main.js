 const chatForm = document.getElementById('chat-form')

 const chatMessages = document.querySelector('.chat-messages');


 



const socket = io();



socket.on('message',message => {

    console.log(message);
    outputMessage(message);


    // scroll down

    chatMessages.scrollTop = chatMessages.scrollHeight;


});

// Message submit


chatForm.addEventListener('submit',(e)=>{
  e.preventDefault();


  const msg = e.target.elements.msg.value;




  // sending message as server
  socket.emit('chatMessage',msg);

  // clear input

  e.target.elements.msg.value = '';
  e.target.elements.msg = focus();




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