var socket= io.connect('http://localhost:5000');

var username=document.getElementById('username');

var message=document.getElementById('message');

var send=document.getElementById('send');

var chat=document.getElementById('chat');
var broadcast =document.getElementById('broadcast');

send.addEventListener('click',function(){

socket.emit('message',{

    username:username.value,
    message:message.value,


});

});

message.addEventListener('keypress',function(){

    socket.emit('broadcast',{

        username:username.value,
        
    
    
    });


});

socket.on('new_msg',function(data){

    broadcast.innerHTML += '';

    chat.innerHTML += '<div class="container"><p> '+data.username+' </p><span class="time-right">'+data.message+'</span></div>';
});


socket.on('new_broad',function(data){


    broadcast.innerHTML += '<div id="img" ><strong>'+data.username+'</strong> write Message<img  src="/write.gif" style="width:50px; height:25px"></div>';
});