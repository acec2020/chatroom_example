// console.log("hello world");
const http=require("http");

http.createServer((req,res)=>{
    res.end("hello nodejs");
}).listen(3000);