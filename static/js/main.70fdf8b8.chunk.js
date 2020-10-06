(this["webpackJsonpheic-converter"]=this["webpackJsonpheic-converter"]||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),r=a.n(l),i=a(6),c=a(7),s=a(2),d=a(11),u=a(10),p=(a(17),a(9)),m=[{value:"jpg",label:"JPEG"},{value:"png",label:"PNG"}],v=a(18),g=a(19),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).resetFileErrorState=function(){n.setState({isFileTypeError:!1})},n.clearUpload=function(){document.getElementById("upload").value=""},n.convertFile=function(e){var t=n.state.selectedFileType.value,a=function(){n.setState({isLoading:!1}),n.clearUpload()};switch(t){case"jpg":v({blob:e,toType:"image/jpeg",quality:.9}).then((function(e){g.saveAs(e,"conversion.jpg"),a()})).catch((function(e){return console.log(e)}));break;case"png":v({blob:e,toType:"image/png"}).then((function(e){g.saveAs(e,"conversion.png"),a()})).catch((function(e){return console.log(e)}))}},n.uploadHandler=function(e){if(n.state.isFileTypeError&&n.resetFileErrorState(),"image/heic"!==e.target.files[0].type)return n.setState({isLoading:!1,isFileTypeError:!0}),void n.clearUpload();n.setState({uploadedBlob:e.target.files})},n.convertHandler=function(){var e=n.state.uploadedBlob;if(n.state.uploadedBlob){n.setState({isLoading:!0});var t=new Blob(e);n.convertFile(t)}else window.alert("Please select a HEIC file.")},n.selectHandler=function(e){console.log(e),n.setState({selectedFileType:e})},n.state={uploadedBlob:"",isLoading:!1,isFileTypeError:!1,selectedFileType:m[0]},n.uploadHandler=n.uploadHandler.bind(Object(s.a)(n)),n.convertHandler=n.convertHandler.bind(Object(s.a)(n)),n.selectHandler=n.selectHandler.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.isLoading?"loader":"",t=this.state.isFileTypeError?"file-error":"dont-show-error";return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"header-container"},o.a.createElement("div",{className:"header"},"HEIC Converter")),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"box-header"},"Upload File"),o.a.createElement("input",{id:"upload",type:"file",name:"file",onChange:this.uploadHandler,className:"upload"}),o.a.createElement("button",{onClick:this.convertHandler,className:"submit-button"},"Convert"),o.a.createElement("div",null,"Select an output format:"),o.a.createElement(p.a,{options:m,defaultValue:m[0],onChange:this.selectHandler,className:"select"}),o.a.createElement("div",{className:e}),o.a.createElement("div",{className:t},"Error: wrong file type")))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.70fdf8b8.chunk.js.map