(function () {
     let socket=io();
     socket.emit("hello","yes! you can do it");

     let output=document.querySelector("textarea");

     let form=document.querySelector("form");

     console.log(form);

     form.onsubmit=function (e) {
        e.preventDefault();
        // console.log(this["input"].value);
         socket.emit("msg",this["input"].value);
     }

     socket.on("msg",msg=>{
        document.querySelector("textarea").value+=msg;
     })
})();

