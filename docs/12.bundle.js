(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{158:function(e,t,n){"use strict";n.r(t);n(8),n(9),n(10);var r,o=n(0),i=n.n(o),a=(n(92),n(93),n(32)),c=n(423),u=n.n(c),l=n(424),s=n.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,m,g,h,w,P,S,E,O=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],_=[0,2,1,1,2,3],x="\nvoid main( void ){\n  vec4 color = vec4(0.0,0.0,0.0,1.0);\n  mainImage( color, gl_FragCoord.xy );\n  color.w = 1.0;\n  gl_FragColor = color;\n}",R=function(e,t,n){var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;alert(e.getShaderInfoLog(r)),console.log(e.getShaderInfoLog(r))},z=function(e,t,n,r){var o=n.getExtension("OES_vertex_array_object")||n.getExtension("MOZ_OES_vertex_array_object")||n.getExtension("WEBKIT_OES_vertex_array_object");o||alert("vertex array object not supported");var i=function(e,t,n,r){var o=function(e,t,n){var r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?(e.useProgram(r),r):null}(e,R(e,n,e.VERTEX_SHADER),R(e,r,e.FRAGMENT_SHADER)),i=[];i[0]=e.getUniformLocation(o,"iTime"),i[1]=e.getUniformLocation(o,"iResolution");var a=e.getAttribLocation(o,"position"),c=t.createVertexArrayOES();return t.bindVertexArrayOES(c),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array(O),e.STATIC_DRAW),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Int16Array(_),e.STATIC_DRAW),t.bindVertexArrayOES(null),{mainPrg:o,mainUniLocation:i,mainVao:c}}(n,o,e,r),a=i.mainPrg,c=i.mainUniLocation,u=i.mainVao;n.clearColor(0,0,0,1);var l=(new Date).getTime();return{render:function(){n.clear(n.COLOR_BUFFER_BIT);var e=.001*((new Date).getTime()-l);n.useProgram(a),o.bindVertexArrayOES(u),n.uniform1f(c[0],e),n.uniform2fv(c[1],[t.width,t.height]),n.drawElements(n.TRIANGLES,_.length,n.UNSIGNED_SHORT,0),n.flush()}}},D=Object(a.b)(function(e){var t=e.state;return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,updateWindowSize:t.updateWindowSize,renderCanvas:t.renderCanvas,renderGl:t.renderGl,updateRenderCanvas:t.updateRenderCanvas,updateRenderGl:t.updateRenderGl}})(r=Object(a.c)(r=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=p(this,(e=v(t)).call.apply(e,[this].concat(o)))).handleResize=function(e){var t=e.target.innerWidth,r=e.target.innerHeight;n.props.updateWindowSize(t,r)},n.updateGl=function(e,t){var r=z(u()(),e,t,s()()+x).render;!function e(){r(),n.requestId=requestAnimationFrame(e)}()},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.renderCanvas;e.width=this.props.windowWidth,e.height=this.props.windowHeight;var t=e.getContext("webgl");this.props.updateRenderCanvas(e),this.props.updateRenderGl(t),this.updateGl(e,t),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId),window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this;return i.a.createElement("canvas",{style:{width:this.props.windowWidth,height:this.props.windowHeight},ref:function(t){e.renderCanvas=t}})}}])&&d(n.prototype,r),o&&d(n,o),t}())||r)||r,A=n(425),C=n.n(A),F=(n(38),n(97),n(37),n(2));function j(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var I=(b=F.d.bound,m=F.d.bound,g=F.d.bound,w=T((h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"windowWidth",w,this),j(this,"windowHeight",P,this),j(this,"renderCanvas",S,this),j(this,"renderGl",E,this)}var t,n,r;return t=e,(n=[{key:"updateWindowSize",value:function(e,t){this.windowWidth=e,this.renderCanvas.width=e,this.windowHeight=t,this.renderCanvas.height=t,this.renderGl.viewport(0,0,e,t)}},{key:"updateRenderCanvas",value:function(e){this.renderCanvas=e}},{key:"updateRenderGl",value:function(e){this.renderGl=e}}])&&L(t.prototype,n),r&&L(t,r),e}()).prototype,"windowWidth",[F.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.innerWidth}}),P=T(h.prototype,"windowHeight",[F.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.innerHeight}}),T(h.prototype,"updateWindowSize",[b],Object.getOwnPropertyDescriptor(h.prototype,"updateWindowSize"),h.prototype),S=T(h.prototype,"renderCanvas",[F.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T(h.prototype,"updateRenderCanvas",[m],Object.getOwnPropertyDescriptor(h.prototype,"updateRenderCanvas"),h.prototype),E=T(h.prototype,"renderGl",[F.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T(h.prototype,"updateRenderGl",[g],Object.getOwnPropertyDescriptor(h.prototype,"updateRenderGl"),h.prototype),h);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return N});var B={state:new I},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,U(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){C.a.use()}},{key:"componentWillUnmount",value:function(){C.a.unuse()}},{key:"render",value:function(){return i.a.createElement(a.a,B,i.a.createElement(i.a.Fragment,null,i.a.createElement(D,null)))}}])&&k(n.prototype,r),o&&k(n,o),t}()},423:function(e,t){e.exports=function(){return["attribute vec3 position;","void main(void){","    gl_Position = vec4(position, 1.0);","}"].join("\n")}},424:function(e,t){e.exports=function(){return["precision mediump float;","uniform float iTime;","uniform vec2  iResolution;","#define PI 3.141592","vec3 rotate(vec3 p, float angle, vec3 axis){","    vec3 a = normalize(axis);","    float s = sin(angle);","    float c = cos(angle);","    float r = 1.0 - c;","    mat3 m = mat3(","        a.x * a.x * r + c,","        a.y * a.x * r + a.z * s,","        a.z * a.x * r - a.y * s,","        a.x * a.y * r - a.z * s,","        a.y * a.y * r + c,","        a.z * a.y * r + a.x * s,","        a.x * a.z * r + a.y * s,","        a.y * a.z * r - a.x * s,","        a.z * a.z * r + c","    );","    return m * p;","}","float boxDistFunc(vec3 p,vec3 c,vec3 b){","    p=p-c;","    vec3 d=abs(p)-b;","    return length(max(d,0.0))+min(max(d.x,max(d.y,d.z)),0.0);","}","float doglegDistFunc(vec3 p,vec3 c,vec3 r,float d){","    p=p-c;","    p=rotate(p,d,r);","    return min(boxDistFunc(p,vec3(0.0,3.0,0.0),vec3(1.0,4.0,1.0)),boxDistFunc(p,vec3(3.0,0.0,0.0),vec3(4.0,1.0,1.0)));","}","vec3 getNormal(vec3 p,vec3 c,vec3 r,float d){","    float delta=0.001;","    return normalize(vec3(","        doglegDistFunc(p+vec3(delta,0.0,0.0),c,r,d)-doglegDistFunc(p+vec3(-delta,0.0,0.0),c,r,d),","        doglegDistFunc(p+vec3(0.0,delta,0.0),c,r,d)-doglegDistFunc(p+vec3(0.0,-delta,0.0),c,r,d),","        doglegDistFunc(p+vec3(0.0,0.0,delta),c,r,d)-doglegDistFunc(p+vec3(0.0,0.0,-delta),c,r,d)","        ));","}","const vec3 lightDir=vec3(1.0,-0.7,0.2);","const vec3 cDir=vec3(0.0,0.0,-1.0);","const vec3 cPos=vec3(0.0,0.0,8.0);    ","const vec3 cUp=vec3(0.0,1.0,0.0);","void mainImage( out vec4 fragColor, in vec2 fragCoord ){","    vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);            ","    const vec3 cSide=cross(cDir,cUp);","    const float targetDepth=1.0;","    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*targetDepth);","   \tfloat dist1=0.0;    ","    float dist2=0.0;","    vec3 rPos1=cPos;","    vec3 rPos2=cPos;","    vec3 color1=vec3(0.0); ","    vec3 color2=vec3(0.0);","    float rLen1=0.0;","    float rLen2=0.0;      ","    float maxLen=20.0;","    for(int i=0;i<50;i++){","    vec3 rPos=rotate(rPos1,iTime,vec3(0.0,1.0,0.0));","    float dist1=doglegDistFunc(rPos,vec3(-3.0,0.0,1.5),vec3(0.0,-1.0,1.0),PI/3.0);","    if(dist1<0.01){            ","       vec3 normal=getNormal(rPos,vec3(-3.0,0.0,1.5),vec3(0.0,-1.0,1.0),PI/3.0);","       color1=vec3(1.0,0.0,0.0)*vec3(clamp(dot(lightDir,normal),0.5,1.0));","       break;","    }","        rLen1+=dist1;","        rPos1=cPos+rLen1*ray;","    }","    for(int i=0;i<50;i++){ ","    vec3 rPos=rotate(rPos2,iTime,vec3(0.0,1.0,0.0));       ","    float dist2=doglegDistFunc(rPos,vec3(3.0,0.0,-1.5),vec3(0.0,0.5,1.0),-PI*0.8);  ","    if(dist2<0.01){           ","        vec3 normal=getNormal(rPos,vec3(3.0,0.0,-1.5),vec3(0.0,0.5,1.0),-PI*0.8);","        color2=vec3(0.0,0.0,1.0)*vec3(clamp(dot(lightDir,normal),0.5,1.0));","       break;","    }","        rLen2+=dist2;","       rPos2=cPos+rLen2*ray;","    }","    fragColor=vec4(rLen2>rLen1?(rLen2>maxLen?color1:color2):(rLen1>maxLen?color2:color1),1.0);","}"].join("\n")}},425:function(e,t,n){var r,o=0,i=n(426),a={hmr:!0};a.insertInto=void 0,"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(62)(i,a)),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},426:function(e,t,n){(e.exports=n(61)(!1)).push([e.i,"body {\n  overflow: hidden;\n  margin: 0;\n  padding: 0; }\n\n#root {\n  font-size: 0; }\n",""])}}]);