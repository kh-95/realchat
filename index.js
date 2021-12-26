var express = require('express');
var socket = require('socket.io');
var application =express();
var server= application.listen(5000,function(){


    console.log("ur server is activated");
});

application.use(express.static('public_html'));


var  sio = socket(server);
sio.on('connection',function(visitor){


    console.log("there is anew visitor by id=>",visitor.id);

    visitor.on('message',function(data){

sio.sockets.emit('new_msg',data);


    });

    visitor.on('broadcast',function(data){

        visitor.broadcast.emit('new_broad',data);
        
        
            });

});
