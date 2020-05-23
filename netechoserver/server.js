const net=require("net");

let all_conn=new Map();

const server=net.Server(socket=>{
    // socket.write("hello world\n");

    all_conn.set(socket,socket);

    socket.on("data",data=>{
        // socket.write(data);
        console.log(data.toString());

        all_conn.forEach((value, key) => {
            value.write(data.toString());
        });
    });

    socket.on("close",()=>{
        all_conn.delete(socket);
    });

});

server.listen(3000);