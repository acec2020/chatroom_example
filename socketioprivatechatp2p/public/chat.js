/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./FrontProject/Chat/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./FrontProject/Chat/src/Config.js":
/*!*****************************************!*\
  !*** ./FrontProject/Chat/src/Config.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config={\r\n    PC_INIT_CONFIG:{\r\n        iceServers:{\r\n            urls:\"stun.1.google.com:19302\"\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\r\n\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/Config.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/Context.js":
/*!******************************************!*\
  !*** ./FrontProject/Chat/src/Context.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _net_SocketConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./net/SocketConnector */ \"./FrontProject/Chat/src/net/SocketConnector.js\");\n/* harmony import */ var _net_PeerConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net/PeerConnector */ \"./FrontProject/Chat/src/net/PeerConnector.js\");\n/* harmony import */ var _handlers_HandlerReceivedOffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/HandlerReceivedOffer */ \"./FrontProject/Chat/src/handlers/HandlerReceivedOffer.js\");\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/Events */ \"./FrontProject/Chat/src/events/Events.js\");\n/* harmony import */ var _handlers_HandlerStartChatSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/HandlerStartChatSession */ \"./FrontProject/Chat/src/handlers/HandlerStartChatSession.js\");\n/* harmony import */ var _handlers_HandlerReceivedAnswer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/HandlerReceivedAnswer */ \"./FrontProject/Chat/src/handlers/HandlerReceivedAnswer.js\");\n/* harmony import */ var _handlers_HandlerReceivedOfferICE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/HandlerReceivedOfferICE */ \"./FrontProject/Chat/src/handlers/HandlerReceivedOfferICE.js\");\n/* harmony import */ var _handlers_HandlerReceivedAnswerICE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/HandlerReceivedAnswerICE */ \"./FrontProject/Chat/src/handlers/HandlerReceivedAnswerICE.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Context {\r\n    constructor() {\r\n        this._this=$(this);\r\n        this._sharedData=new Map();\r\n        this._socketConnector=new _net_SocketConnector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\r\n        this._peerConnector=new _net_PeerConnector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n\r\n        this.addListeners();\r\n    }\r\n\r\n    setData(k,v){\r\n        this._sharedData.set(k,v);\r\n    }\r\n\r\n    getData(k){\r\n        return this._sharedData.get(k);\r\n    }\r\n\r\n    addListeners(){\r\n        let _this=$(this);\r\n        _this.on(_events_Events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].RECEIVED_OFFER,_handlers_HandlerReceivedOffer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n        _this.on(_events_Events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].RECEIVED_ANSWER,_handlers_HandlerReceivedAnswer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        _this.on(_events_Events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].START_CHAT_SESSION,_handlers_HandlerStartChatSession__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n        _this.on(_events_Events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].RECEIVED_OFFER_ICE,_handlers_HandlerReceivedOfferICE__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n        _this.on(_events_Events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].RECEIVED_ANSWER_ICE,_handlers_HandlerReceivedAnswerICE__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n    }\r\n\r\n    fire(type,data){\r\n        console.info(\"Fire event:\"+type);\r\n        this._this.trigger(type,[this,data]);\r\n    }\r\n\r\n    get socketConnector() {\r\n        return this._socketConnector;\r\n    }\r\n\r\n    get peerConnector() {\r\n        return this._peerConnector;\r\n    }\r\n}\r\n\r\nContext.KEY_OFFER_PEER_CONNECTION=\"offerPc\";\r\nContext.KEY_ANSWER_PEER_CONNECTION=\"answerPC\";\r\nContext.KEY_DATA_CHANNEL=\"dataChannel\";\r\nContext.KEY_LOCAL_MEDIA_STREAM=\"mediaStream\";\r\nContext.KEY_REMOTE_MEDIA_STREAM=\"remoteMediaStream\";\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/Context.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/controllers/ClientList.js":
/*!*********************************************************!*\
  !*** ./FrontProject/Chat/src/controllers/ClientList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ClientList.html */ \"./FrontProject/Chat/src/views/ClientList.html\");\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Events */ \"./FrontProject/Chat/src/events/Events.js\");\n\r\n\r\n\r\nconst ClientList=Vue.component(\"client-list\",{\r\n    template: _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default.a,\r\n    data(){\r\n        return{\r\n            clients:new Map(),\r\n            currentSocketId:\"\"\r\n        }\r\n    },\r\n    methods:{\r\n        setContext(context) {\r\n            this._context=context;\r\n            $(context).on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS,(event,context,data)=>{\r\n                this.currentSocketId=data.currentSocketId;\r\n\r\n                let tmpMap=new Map();\r\n                this.clients.forEach((value, key) => {\r\n                    tmpMap.set(key,value);\r\n                });\r\n                this.clients.clear();\r\n                data.clients.forEach(socketId=>{\r\n                    if(tmpMap.has(socketId)){\r\n                        this.clients.set(socketId,tmpMap.get(socketId));\r\n                    } else {\r\n                        this.clients.set(socketId,{socketId:socketId,chatLog:[]});\r\n                    }\r\n                    // this.clients.push({socketId:item,chatLog:[]});\r\n                });\r\n\r\n                this.$forceUpdate();\r\n\r\n                // this.clients.push(...data.clients);\r\n            });\r\n\r\n            $(context.socketConnector).on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG,(e,data)=>{\r\n                let targetSocketId;\r\n                if(data.sender==this.currentSocketId){\r\n                    targetSocketId=data.receiver;\r\n                } else if(data.receiver==this.currentSocketId){\r\n                    targetSocketId=data.sender;\r\n                }\r\n                if(targetSocketId){\r\n                    let target=this.clients.get(targetSocketId);\r\n                    if(target){\r\n                        target.chatLog.push(data.msg);\r\n                    }\r\n                }\r\n            })\r\n        },\r\n        targetSocketIDClicked(e){\r\n            let selectedSocketId=$(e.target).data(\"socket_id\");\r\n            if(selectedSocketId!=this._context.socketConnector.socketId){\r\n                // this.$emit(\"selected_target\",this.clients.get(selectedSocketId));\r\n                this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_CHAT_SESSION,selectedSocketId);\r\n            }else {\r\n                alert(\"you can't with you self\");\r\n            }\r\n            console.log();\r\n        },\r\n        getSocketIdLabel(socketId){\r\n            if(socketId!=this.currentSocketId){\r\n                return socketId\r\n            }else {\r\n                return socketId+\"自己\";\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientList);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/controllers/ClientList.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/controllers/MainApp.js":
/*!******************************************************!*\
  !*** ./FrontProject/Chat/src/controllers/MainApp.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/MainApp.html */ \"./FrontProject/Chat/src/views/MainApp.html\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_MainApp_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ClientList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientList */ \"./FrontProject/Chat/src/controllers/ClientList.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n\r\n\r\n\r\n\r\nconst MainApp = Vue.component(\"main-app\",\r\n{\r\n    template:_views_MainApp_html__WEBPACK_IMPORTED_MODULE_0___default.a,\r\n    data(){\r\n      return{\r\n          targetSocketId:\"\",\r\n          output:[],\r\n      }\r\n    },\r\n    computed:{\r\n        outputMsg(){\r\n            return this.output.join(\"\\n\");\r\n        }\r\n    },\r\n    methods:{\r\n       async  setContext(context) {\r\n            this._context=context;\r\n            this.$refs.client_list.setContext(context);\r\n            let media=await navigator.mediaDevices.getUserMedia({video:true,audio:false});\r\n            this.$refs.localPreview.srcObject=media;\r\n            this._context.setData(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_LOCAL_MEDIA_STREAM,media);\r\n\r\n            let remoteStream=new MediaStream();\r\n            context.setData(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_REMOTE_MEDIA_STREAM,remoteStream);\r\n\r\n            this.$refs.remotePreview.srcObject=remoteStream;\r\n\r\n\r\n\r\n            // $(this._context.socketConnector).on(\"msg\",(e,data)=>{\r\n            //     // console.log(data);\r\n            //     this.$refs.output.value+=data.msg+\"\\n\";\r\n            // });\r\n        },\r\n\r\n        selectedtargethander(target){\r\n            this.targetSocketId=target.socketId;\r\n            // this.output=target.chatLog;\r\n            // console.log(socketId);\r\n            this._context.peerConnector.connectTarget(this.targetSocketId);\r\n        },\r\n\r\n        submitHandler(e){\r\n            e.preventDefault();\r\n\r\n            // console.log(e.target.msg.value);\r\n\r\n            // if(this.targetSocketId){\r\n            //     this._context.socketConnector.sendMsg(e.target.msg.value,this.targetSocketId);\r\n            //     e.target.msg.value=\"\";\r\n            // }\r\n        }\r\n    },\r\n    watch:{\r\n        output(){\r\n            this.$nextTick(function () {\r\n                this.$refs.output.scrollTop=this.$refs.output.scrollHeight;\r\n            })\r\n        }\r\n    }\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainApp);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/controllers/MainApp.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/events/Events.js":
/*!************************************************!*\
  !*** ./FrontProject/Chat/src/events/Events.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Events={\r\n    LIST_CLIENTS:\"listClients\",\r\n    MSG:\"msg\",\r\n    RECEIVED_OFFER:\"receivedOffer\",\r\n    START_CHAT_SESSION:\"startChatSession\",\r\n    RECEIVED_ANSWER:\"receivedAnswer\",\r\n    RECEIVED_OFFER_ICE:\"receivedOfferICE\",\r\n    RECEIVED_ANSWER_ICE:\"receivedAnserICE\"\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\r\n\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/events/Events.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/events/SocketEvents.js":
/*!******************************************************!*\
  !*** ./FrontProject/Chat/src/events/SocketEvents.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SocketEvent={\r\n    OFFER:\"offer\",\r\n    ANSWER:\"answer\",\r\n    OFFER_ICE:\"offerICE\",\r\n    ANSWER_ICE:\"answerICE\"\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketEvent);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/events/SocketEvents.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/handlers/HandlerReceivedAnswer.js":
/*!*****************************************************************!*\
  !*** ./FrontProject/Chat/src/handlers/HandlerReceivedAnswer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n\r\n\r\nfunction HandlerReceivedAnswer(e,context,data) {\r\n    context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_OFFER_PEER_CONNECTION).setRemoteDescription(new RTCSessionDescription(data.answer));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedAnswer);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/handlers/HandlerReceivedAnswer.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/handlers/HandlerReceivedAnswerICE.js":
/*!********************************************************************!*\
  !*** ./FrontProject/Chat/src/handlers/HandlerReceivedAnswerICE.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n\r\n\r\nasync function HandlerReceivedAnswerICE(e,context,data) {\r\n    let offerPC=context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_OFFER_PEER_CONNECTION);\r\n    await offerPC.addIceCandidate(new RTCIceCandidate(data.ice));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedAnswerICE);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/handlers/HandlerReceivedAnswerICE.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/handlers/HandlerReceivedOffer.js":
/*!****************************************************************!*\
  !*** ./FrontProject/Chat/src/handlers/HandlerReceivedOffer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProject/Chat/src/events/SocketEvents.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ \"./FrontProject/Chat/src/Config.js\");\n\r\n\r\n\r\n\r\nasync function HandlerReceivedOffer(e,context,data) {\r\n    // console.log(data);\r\n\r\n    var answerPC=new RTCPeerConnection(_Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PC_INIT_CONFIG);\r\n    let localStream=context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_LOCAL_MEDIA_STREAM);\r\n    localStream.getTracks().forEach(t=>{\r\n       answerPC.addTrack(t);\r\n    });\r\n\r\n    context.setData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_ANSWER_PEER_CONNECTION,answerPC);\r\n\r\n    let remoteStream=context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_REMOTE_MEDIA_STREAM);\r\n    answerPC.ontrack=e=>{\r\n        remoteStream.addTrack(e.track);\r\n    };\r\n\r\n    answerPC.onicecandidate=e=>{\r\n        if(e.candidate){\r\n            context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER_ICE,{receiver: data.sender,ice:e.candidate});\r\n        }\r\n    };\r\n\r\n    answerPC.ondatachannel=e=>{\r\n      let dataChannel=e.channel;\r\n      dataChannel.onmessage=ev=>{\r\n          console.log(ev);\r\n      }\r\n    };\r\n\r\n    await answerPC.setRemoteDescription(new RTCSessionDescription(data.offer));\r\n    var answer= await answerPC.createAnswer();\r\n    context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER,{answer:answer,receiver:data.sender});\r\n    await answerPC.setLocalDescription(new RTCSessionDescription(answer));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedOffer);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/handlers/HandlerReceivedOffer.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/handlers/HandlerReceivedOfferICE.js":
/*!*******************************************************************!*\
  !*** ./FrontProject/Chat/src/handlers/HandlerReceivedOfferICE.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n\r\n\r\nasync function HandlerReceivedOfferICE(e,context,data) {\r\n    // console.log(data);\r\n\r\n    let answerPC= context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_ANSWER_PEER_CONNECTION);\r\n\r\n    await answerPC.addIceCandidate(new RTCIceCandidate(data.ice));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedOfferICE);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/handlers/HandlerReceivedOfferICE.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/handlers/HandlerStartChatSession.js":
/*!*******************************************************************!*\
  !*** ./FrontProject/Chat/src/handlers/HandlerStartChatSession.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProject/Chat/src/events/SocketEvents.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./FrontProject/Chat/src/Context.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ \"./FrontProject/Chat/src/Config.js\");\n\r\n\r\n\r\n\r\nasync function HandlerStartChatSession(e,context,data) {\r\n    let offerPC=new RTCPeerConnection(_Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PC_INIT_CONFIG);\r\n    context.setData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_OFFER_PEER_CONNECTION,offerPC);\r\n\r\n\r\n    offerPC.onicecandidate=e=>{\r\n        // console.log(e);\r\n        if(e.candidate){\r\n            context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER_ICE,{receiver: data,ice:e.candidate});\r\n        }\r\n    };\r\n\r\n    let remoteStream=context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_REMOTE_MEDIA_STREAM);\r\n    offerPC.ontrack=e=>{\r\n        remoteStream.addTrack(e.track);\r\n    };\r\n\r\n    let stream=context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_LOCAL_MEDIA_STREAM);\r\n    stream.getTracks().forEach(t=>{\r\n        offerPC.addTrack(t);\r\n    });\r\n\r\n\r\n    // let dataChannel= offerPC.createDataChannel(\"MessageChannel\");\r\n    // dataChannel.onopen=function(e){\r\n    //     dataChannel.send(\"Hello RTC\");\r\n    // };\r\n    // context.setData(Context.KEY_DATA_CHANNEL,dataChannel);\r\n\r\n    let offer= await offerPC.createOffer();\r\n    context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER,{receiver:data,offer:offer});\r\n\r\n    await offerPC.setLocalDescription(new RTCSessionDescription(offer));\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerStartChatSession);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/handlers/HandlerStartChatSession.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/main.js":
/*!***************************************!*\
  !*** ./FrontProject/Chat/src/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainApp */ \"./FrontProject/Chat/src/controllers/MainApp.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ \"./FrontProject/Chat/src/Context.js\");\n\r\n\r\n\r\nlet context=new _Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nlet mainApp=new _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nmainApp.$mount($(\"<div></div>\").appendTo(document.body)[0]);\r\nmainApp.setContext(context);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/main.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/net/PeerConnector.js":
/*!****************************************************!*\
  !*** ./FrontProject/Chat/src/net/PeerConnector.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProject/Chat/src/events/SocketEvents.js\");\n\r\n\r\nclass PeerConnector {\r\n\r\n    constructor(context) {\r\n        this._context=context;\r\n    }\r\n\r\n    async connectTarget(socketId){\r\n        this._offerPC=new RTCPeerConnection();\r\n\r\n        let offer= await this._offerPC.createOffer();\r\n        this._context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER,{receiver:socketId,offer:offer});\r\n        // console.log(offer);\r\n    }\r\n\r\n    get context() {\r\n        return this._context;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PeerConnector);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/net/PeerConnector.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/net/SocketConnector.js":
/*!******************************************************!*\
  !*** ./FrontProject/Chat/src/net/SocketConnector.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProject/Chat/src/events/SocketEvents.js\");\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Events */ \"./FrontProject/Chat/src/events/Events.js\");\n\r\n\r\n\r\nclass SocketConnector {\r\n    constructor(context) {\r\n        this._context=context;\r\n        this._socket=io();\r\n        this._socket.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS,clients=>{\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS,{clients:clients,currentSocketId:this._socket.id});\r\n        });\r\n        this._socket.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG,data=>{\r\n            // console.log(data);\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG,data);\r\n        });\r\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER,data=>{\r\n            console.log(data);\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER,data);\r\n        });\r\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER,data=>{\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER,data);\r\n        });\r\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER_ICE,data=>{\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_ICE,data);\r\n        });\r\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER_ICE,data=>{\r\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_ICE,data);\r\n        });\r\n    }\r\n\r\n    get socketId(){\r\n        return this._socket.id;\r\n    }\r\n\r\n    sendMsg(msg,targetSocketId){6\r\n        // this._socket.emit(\"msg\",{receiver:targetSocketId,sender:this._socket.id,msg:msg});\r\n        emit(\"msg\",{receiver:targetSocketId,sender:this._socket.id,msg:msg});\r\n    }\r\n\r\n    emit(eventType,data){\r\n        // console.log(\"Send data to server >>>>>>>>>\");\r\n        // console.log(\"eventType:\"+eventType);\r\n        // console.log(\"data:\"+data);\r\n        // console.log(\"Send data to server <<<<<<<<<\");\r\n        data.sender=this._socket.id;\r\n        this._socket.emit(eventType,data);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketConnector);\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/net/SocketConnector.js?");

/***/ }),

/***/ "./FrontProject/Chat/src/views/ClientList.html":
/*!*****************************************************!*\
  !*** ./FrontProject/Chat/src/views/ClientList.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"card\\\" style=\\\"width:100%\\\">\\r\\n    <div class=\\\"card-header\\\">\\r\\n        客户端列表\\r\\n    </div>\\r\\n    <div class=\\\"card-body\\\">\\r\\n        <button @click=\\\"targetSocketIDClicked\\\" style=\\\"width: 100%\\\" class=\\\"btn btn-outline-dark btn-sm\\\"\\r\\n                v-for=\\\"key in clients.keys()\\\" :data-socket_id=\\\"key\\\">\\r\\n            {{getSocketIdLabel(key)}}\\r\\n        </button>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/views/ClientList.html?");

/***/ }),

/***/ "./FrontProject/Chat/src/views/MainApp.html":
/*!**************************************************!*\
  !*** ./FrontProject/Chat/src/views/MainApp.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div style=\\\"display:flex;flex-direction: row;\\\">\\r\\n    <div style=\\\"display:flex;flex-direction:column;width: 260px;\\\">\\r\\n        <client-list ref=\\\"client_list\\\" @selected_target=\\\"selectedtargethander\\\"></client-list>\\r\\n        <video style=\\\"width: 240px;height: 180px;\\\" ref=\\\"localPreview\\\" autoplay controls></video>\\r\\n    </div>\\r\\n        <div class=\\\"card\\\" style=\\\"margin-left: 10px;flex:1\\\">\\r\\n        <div class=\\\"card-header\\\">\\r\\n            <span v-if=\\\"targetSocketId\\\">{{targetSocketId}}</span>\\r\\n            <span v-else>No target socketId</span>\\r\\n        </div>\\r\\n        <div class=\\\"card-body\\\">\\r\\n<!--            <textarea style=\\\"width: 100%;height: 300px;resize: none\\\" ref=\\\"output\\\" v-model=\\\"outputMsg\\\" class=\\\"form-control\\\" readonly></textarea>-->\\r\\n<!--            <form style=\\\"margin-top:10px;display: flex;flex-direction: row\\\" @submit=\\\"submitHandler\\\">-->\\r\\n<!--                <input style=\\\"flex:1\\\" type=\\\"text\\\" name=\\\"msg\\\" required class=\\\"form-control\\\"/>-->\\r\\n<!--                <input style=\\\"margin-left: 10px\\\" class=\\\"btn btn-primary\\\" type=\\\"submit\\\" value=\\\"send\\\"/>-->\\r\\n<!--            </form>-->\\r\\n            <video style=\\\"width: 480px;height: 320px;\\\" ref=\\\"remotePreview\\\" muted controls autoplay></video>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./FrontProject/Chat/src/views/MainApp.html?");

/***/ })

/******/ });