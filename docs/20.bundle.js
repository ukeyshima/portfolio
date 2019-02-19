(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1053:function(e,t){e.exports=function(){return["attribute vec3 position;","void main(void){","    gl_Position = vec4(position, 1.0);","}"].join("\n")}},1054:function(e,t){e.exports=function(){return["precision mediump float;","uniform float time;","uniform vec2  resolution;","#define PI 3.141592","const vec3 lightPos=vec3(0.0,5.0,5.0);","const vec3 ambientColor=vec3(0.05);","const vec3 cPos=vec3(0.0,3.0,12.0);","const vec3 cDir=vec3(0.0,-.2,-1.0);","const vec3 cUp=vec3(0.0,1.0,0.0);","float sphereDistFunc(vec3 p,vec3 c,float radius){","    return length(p-c)-radius;","}","float planeDistFunc(vec3 p){","    vec3 pos=vec3(0.0,1.0,0.0);","    vec3 n=normalize(pos);","    return dot(p,n)+2.0;","}","float distFunc(vec3 p){","    float obj1,obj2,obj3,obj4,obj5;","    obj1=sphereDistFunc(p,vec3(0.0,cos(time),0.0),2.0);","    obj2=planeDistFunc(p);","    obj3=sphereDistFunc(p,vec3(5.0*(2.0+cos(1.2*time))*sin(time),-1.0,5.0*cos(time)),1.0);","    obj4=sphereDistFunc(p,vec3(5.0*(3.0+cos(1.5*time))*sin(time+PI*2.0/3.0),-1.0,5.0*cos(time+PI*2.0/3.0)),1.0);","    obj5=sphereDistFunc(p,vec3(5.0*(2.0+sin(1.7*time))*sin(time+PI*4.0/3.0),-1.0,5.0*cos(time+PI*4.0/3.0)),1.0);","    return min(min(min(min(obj1,obj2),obj3),obj4),obj5);","}","vec3 genNormal(vec3 p){","    float d=0.001;","    return normalize(vec3(","        distFunc(p+vec3(d,0.0,0.0))-distFunc(p+vec3(-d,0.0,0.0)),","        distFunc(p+vec3(0.0,d,0.0))-distFunc(p+vec3(0.0,-d,0.0)),","        distFunc(p+vec3(0.0,0.0,d))-distFunc(p+vec3(0.0,0.0,-d))","        ));","}","float genShadow(vec3 o,vec3 lightPos){","    vec3 lightVec=normalize(lightPos);","    float h=0.0;","    float c=0.001;","    float r=1.0;","    float shadowCoef=0.5;","    for(int i=0;i<30;i++){","    h=distFunc(o+lightVec*c);","    if(h<0.02)return shadowCoef;","    r=min(r,h*16.0/c);","    c+=h;","    }","    return 1.0+shadowCoef*(r-1.0);","}","vec3 getRayColor(inout vec3 ray,inout vec3 origin){","    float distance=0.0;","    float rLen=0.0;","    vec3 rPos=origin;","    vec3 color=vec3(0.62);","    vec3 normal,specular,halfLE;","    float shadow;","    float maxDist=70.0;","    for(int i=0;i<120;i++){","        distance=distFunc(rPos);","        if(abs(distance)<0.01){","             if(distance==planeDistFunc(rPos)){","                color=(mod(rPos.x,6.0)<3.0&&mod(rPos.z,6.0)<3.0 ||mod(rPos.x,6.0)>3.0&&mod(rPos.z,6.0)>3.0)?vec3(1.0):vec3(0.0);","             }else if(distance==sphereDistFunc(rPos,vec3(0.0,cos(time),0.0),2.0)){","                color=vec3(0.0,1.0,1.0);","             }else if(distance==sphereDistFunc(rPos,vec3(5.0*(2.0+cos(1.2*time))*sin(time),-1.0,5.0*cos(time)),1.0)){","                color=vec3(1.0,0.0,0.0);","            }else if(distance==sphereDistFunc(rPos,vec3(5.0*(3.0+cos(1.5*time))*sin(time+PI*2.0/3.0),-1.0,5.0*cos(time+PI*2.0/3.0)),1.0)){","                color=vec3(1.0,1.0,0.0);","            }else if(distance==sphereDistFunc(rPos,vec3(5.0*(2.0+sin(1.7*time))*sin(time+PI*4.0/3.0),-1.0,5.0*cos(time+PI*4.0/3.0)),1.0)){","                color=vec3(1.0,0.0,1.0);","            }","            normal=genNormal(rPos);","            origin=rPos+normal*0.02;","            ray=normalize(reflect(ray,normal));","            halfLE=normalize(lightPos-cDir);","            specular=vec3(pow(clamp(dot(normal,halfLE),0.0,1.0),50.0));","            shadow=genShadow(rPos+normal*0.001,lightPos);","            color=(color*vec3(clamp(dot(lightPos,normal),0.0,1.0))+specular+ambientColor)*max(0.5,shadow)+rLen/100.0*0.8;","            break;","        }","        rLen+=distance;","        rPos=origin+rLen*ray;","        if(rLen>maxDist){","            break;","        }","    }","        return color;","    ","}","void main(void){","    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);    ","    const vec3 cSide=cross(cDir,cUp);","    const float targetDepth=1.0;","    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*targetDepth);","    vec3 origin=cPos;","    vec3 destColor=vec3(0.0);","    vec3 alpha=vec3(0.7,0.7,0.67);","    for(int i=0;i<3;i++){","        destColor+=alpha*getRayColor(ray,origin);","        alpha*=0.7;","    }","    gl_FragColor=vec4(destColor,1.0);","}"].join("\n")}},1055:function(e,t,n){var o,r=0,i=n(1056),c={hmr:!0};c.insertInto=void 0,"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return r++||(o=n(59)(i,c)),t},t.unuse=t.unref=function(){r>0&&!--r&&(o(),o=null)}},1056:function(e,t,n){(e.exports=n(58)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])},142:function(e,t,n){"use strict";n.r(t);n(8),n(9),n(10);var o=n(0),r=n.n(o),i=(n(91),n(43),n(89),n(90),n(1053)),c=n.n(i),a=n(1054),s=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t,n,o){var r=function(e,n){var o=t.createShader(n);if(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS))return o;alert(t.getShaderInfoLog(o)),console.log(t.getShaderInfoLog(o))},i=function(e,n){var o=t.createProgram();return t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?(t.useProgram(o),o):null}(r(n,t.VERTEX_SHADER),r(o,t.FRAGMENT_SHADER)),c=[];c[0]=t.getUniformLocation(i,"time"),c[1]=t.getUniformLocation(i,"resolution");var a,s,u=[0,2,1,1,2,3],l=[],f=[],p=(a=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],s=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),s);l[0]=t.getAttribLocation(i,"position"),f[0]=3;var h=function(e){var n=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),n}(u);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,h),t.clearColor(1,0,0,1);var v=(new Date).getTime();return function(){var n,o;t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(c[0],.001*((new Date).getTime()-v)),t.uniform2fv(c[1],[e.width,e.height]),n=l,o=f,[p].forEach(function(e,r,i){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(n[r]),t.vertexAttribPointer(n[r],o[r],t.FLOAT,!1,0,0)}),t.drawElements(t.TRIANGLES,u.length,t.UNSIGNED_SHORT,0),t.flush()}},m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,h(t).call(this,e))).requestId=0,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId)}},{key:"updateCanvas",value:function(){var e=this;this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl");var t=d(this.canvas,this.gl,c()(),s()());!function n(){t(),e.requestId=requestAnimationFrame(n)}()}},{key:"handleResize",value:function(e,t){this.canvas.width=e,this.canvas.height=t,this.gl.viewport(0,0,e,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",l({},this.props,{ref:function(t){e.canvas=t}}))}}])&&f(n.prototype,o),i&&f(n,i),t}(),b=n(1055),y=n.n(b);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return E});var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,F(t).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){y.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){y.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth,n=e.target.innerHeight;this.refs.createCanvas.handleResize(t,n),this.setState({width:t,height:n})}},{key:"render",value:function(){return r.a.createElement(m,{ref:"createCanvas",style:{width:this.state.width,height:this.state.height}})}}])&&w(n.prototype,o),i&&w(n,i),t}()}}]);