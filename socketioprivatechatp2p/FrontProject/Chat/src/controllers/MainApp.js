import Tpl from '../views/MainApp.html'
import ClientList from "./ClientList";
import Context from "../Context";

const MainApp = Vue.component("main-app",
{
    template:Tpl,
    data(){
      return{
          targetSocketId:"",
          output:[],
      }
    },
    computed:{
        outputMsg(){
            return this.output.join("\n");
        }
    },
    methods:{
       async  setContext(context) {
            this._context=context;
            this.$refs.client_list.setContext(context);
            let media=await navigator.mediaDevices.getUserMedia({video:true,audio:false});
            this.$refs.localPreview.srcObject=media;
            this._context.setData(Context.KEY_LOCAL_MEDIA_STREAM,media);

            let remoteStream=new MediaStream();
            context.setData(Context.KEY_REMOTE_MEDIA_STREAM,remoteStream);

            this.$refs.remotePreview.srcObject=remoteStream;



            // $(this._context.socketConnector).on("msg",(e,data)=>{
            //     // console.log(data);
            //     this.$refs.output.value+=data.msg+"\n";
            // });
        },

        selectedtargethander(target){
            this.targetSocketId=target.socketId;
            // this.output=target.chatLog;
            // console.log(socketId);
            this._context.peerConnector.connectTarget(this.targetSocketId);
        },

        submitHandler(e){
            e.preventDefault();

            // console.log(e.target.msg.value);

            // if(this.targetSocketId){
            //     this._context.socketConnector.sendMsg(e.target.msg.value,this.targetSocketId);
            //     e.target.msg.value="";
            // }
        }
    },
    watch:{
        output(){
            this.$nextTick(function () {
                this.$refs.output.scrollTop=this.$refs.output.scrollHeight;
            })
        }
    }
});
export default MainApp;