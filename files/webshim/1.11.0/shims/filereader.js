webshims.register("filereader",function(e,t){"use strict";(function(){var i=swfmini,n=e.Callbacks("once unique memory"),a=0,r=null;if(window.FileReader)return e.fn.fileReader=function(){return this},void 0;e.fn.fileReader=function(t){if(this.length){t=e.extend(e.fn.fileReader.defaults,t);var i=this;n.add(function(){return o(i,t)}),e.isFunction(t.callback)&&n.add(t.callback),FileAPIProxy.ready||FileAPIProxy.init(t)}return this},e.fn.fileReader.defaults={id:"fileReaderSWFObject",multiple:null,accept:null,label:null,extensions:null,filereader:"files/filereader.swf",expressInstall:null,debugMode:!1,callback:!1};var o=function(t,i){return t.each(function(t,n){n=e(n);var o,s,l,u=n.attr("id");u||(u="flashFileInput"+a,n.attr("id",u),a++),o=n.prop("multiple"),s=n.data("swfaccept")||n.prop("accept")||i.accept,l=n.jProp("labels").map(function(){return e(this).text()}).get().join(" ")||n.data("swflabel")||i.label,FileAPIProxy.inputs[u]=n,FileAPIProxy.swfObject.add(u,o,s,l,i.extensions),n.css("z-index",0).mouseover(function(e){u!==r&&(e=e||window.event,r=u,FileAPIProxy.swfObject.mouseover(u),FileAPIProxy.container.height(n.outerHeight()).width(n.outerWidth()).css(n.offset()))}).click(function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1})})};window.FileAPIProxy={ready:!1,_inititalized:!1,init:function(t){var a=this;this.debugMode=t.debugMode,this.container||(this.container=e("<div>").attr("id",t.id).wrap("<div>").parent().css({position:"fixed",width:"1px",height:"1px",display:"inline-block",background:"transparent","z-index":99999}).on("mouseover mouseout mousedown mouseup",function(t){r&&e("#"+r).trigger(t.type)}).appendTo("body"),i.embedSWF(t.filereader,t.id,"100%","100%","10",t.expressInstall,{debugMode:t.debugMode?!0:""},{wmode:"transparent",allowScriptAccess:"sameDomain"},{},function(t){a.swfObject=t.ref,e(a.swfObject).css({display:"block",outline:0}).attr("tabindex",0),a.ready=t.success&&"function"==typeof t.ref.add,a.ready&&n.fire()}))},swfObject:null,container:null,inputs:{},readers:{},onFileInputEvent:function(e){if(this.debugMode&&console.info("FileInput Event ",e.type,e),e.target in this.inputs){var i=this.inputs[e.target];e.target=i[0],"change"===e.type&&t.data(e.target,"fileList",new FileList(e.files)),i.trigger(e)}window.focus()},onFileReaderEvent:function(e){if(this.debugMode&&console.info("FileReader Event ",e.type,e,e.target in this.readers),e.target in this.readers){var t=this.readers[e.target];e.target=t,t._handleFlashEvent.call(t,e)}},onFileReaderError:function(e){this.debugMode&&console.log(e)},onSWFReady:function(){return this.container.css({position:"absolute"}),this.ready="function"==typeof this.swfObject.add,this.ready&&n.fire(),!0}},window.FileReader=function(){this.EMPTY=0,this.LOADING=1,this.DONE=2,this.readyState=0,this.result=null,this.error=null,this.onloadstart=null,this.onprogress=null,this.onload=null,this.onabort=null,this.onerror=null,this.onloadend=null,this._callbacks={loadstart:e.Callbacks("unique"),progress:e.Callbacks("unique"),abort:e.Callbacks("unique"),error:e.Callbacks("unique"),load:e.Callbacks("unique"),loadend:e.Callbacks("unique")},this._id=null},window.FileReader.prototype={readAsBinaryString:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsBinaryString")},readAsText:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsText")},readAsDataURL:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsDataURL")},readAsArrayBuffer:function(){throw"Whoops FileReader.readAsArrayBuffer is unimplemented"},abort:function(){this.result=null,this.readyState!==this.EMPTY&&this.readyState!==this.DONE&&FileAPIProxy.swfObject.abort(this._id)},addEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].add(t)},removeEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].remove(t)},dispatchEvent:function(t){if(t.target=this,t.type in this._callbacks){var i=this["on"+t.type];e.isFunction(i)&&i(t),this._callbacks[t.type].fire(t)}return!0},_register:function(e){this._id=e.input+"."+e.name,FileAPIProxy.readers[this._id]=this},_start:function(e){if(this._register(e),this.readyState===this.LOADING)throw{type:"InvalidStateError",code:11,message:"The object is in an invalid state."}},_handleFlashEvent:function(e){switch(e.type){case"loadstart":this.readyState=this.LOADING;break;case"loadend":this.readyState=this.DONE;break;case"load":this.readyState=this.DONE,this.result=FileAPIProxy.swfObject.result(this._id);break;case"error":this.result=null,this.error={name:"NotReadableError",message:"The File cannot be read!"}}this.dispatchEvent(new FileReaderEvent(e))}},window.FileReaderEvent=function(e){this.initEvent(e)},window.FileReaderEvent.prototype={initEvent:function(t){e.extend(this,{type:null,target:null,currentTarget:null,eventPhase:2,bubbles:!1,cancelable:!1,defaultPrevented:!1,isTrusted:!1,timeStamp:(new Date).getTime()},t)},stopPropagation:function(){},stopImmediatePropagation:function(){},preventDefault:function(){}},window.FileList=function(e){if(e){for(var t=0;e.length>t;t++)this[t]=e[t];this.length=e.length}else this.length=0},window.FileList.prototype={item:function(e){return e in this?this[e]:null}}})(),t.defineNodeNameProperty("input","files",{prop:{writeable:!1,get:function(){return"file"!=this.type?null:(e(this).is(".ws-filereader")||t.error("please add the 'ws-filereader' class to your input[type='file'] to implement files-property"),t.data(this,"fileList")||t.data(this,"fileList",new FileList))}}}),t.defineNodeNamesBooleanProperty("input","multiple"),e.fn.fileReader.defaults.filereader=t.cfg.basePath+"swf/filereader.swf";var i=["DOM"];t.modules["form-core"].loaded&&i.push("forms"),t.ready(i,function(){t.addReady(function(t){e('input[type="file"].ws-filereader',t).fileReader()})})});