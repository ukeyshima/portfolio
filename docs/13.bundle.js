(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(e,t,c){"use strict";c.r(t);c(8),c(9),c(10);var n=c(0),o=c.n(n),i=(c(94),c(37),c(92),c(93),c(432)),r=c.n(i),a=c(433),u=c.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function p(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e,t,c,n){var o=function(e,c){var n=t.createShader(c);if(t.shaderSource(n,e),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS))return n;alert(t.getShaderInfoLog(n)),console.log(t.getShaderInfoLog(n))},i=function(e,c){var n=t.createProgram();return t.attachShader(n,e),t.attachShader(n,c),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)?(t.useProgram(n),n):null}(o(c,t.VERTEX_SHADER),o(n,t.FRAGMENT_SHADER)),r=[];r[0]=t.getUniformLocation(i,"time"),r[1]=t.getUniformLocation(i,"resolution");var a,u,s=[0,2,1,1,2,3],v=[],p=[],l=(a=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],u=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),u);v[0]=t.getAttribLocation(i,"position"),p[0]=3;var f=function(e){var c=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,c),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),c}(s);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,f),t.clearColor(1,0,0,1);var m=(new Date).getTime();return function(){var c,n;t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(r[0],.001*((new Date).getTime()-m)),t.uniform2fv(r[1],[e.width,e.height]),c=v,n=p,[l].forEach(function(e,o,i){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(c[o]),t.vertexAttribPointer(c[o],n[o],t.FLOAT,!1,0,0)}),t.drawElements(t.TRIANGLES,s.length,t.UNSIGNED_SHORT,0),t.flush()}},d=function(e){function t(e){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(c=l(this,f(t).call(this,e))).requestId=0,c}var c,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),c=t,(n=[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId)}},{key:"updateCanvas",value:function(){var e=this;this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl");var t=b(this.canvas,this.gl,r()(),u()());!function c(){t(),e.requestId=requestAnimationFrame(c)}()}},{key:"handleResize",value:function(e,t){this.canvas.width=e,this.canvas.height=t,this.gl.viewport(0,0,e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("canvas",v({},this.props,{ref:function(t){e.canvas=t}}))}}])&&p(c.prototype,n),i&&p(c,i),t}(),h=c(434),x=c.n(h);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}c.d(t,"default",function(){return w});var w=function(e){function t(e){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(c=F(this,g(t).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},c}var c,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,o.a.Component),c=t,(n=[{key:"componentDidMount",value:function(){x.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){x.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth,c=e.target.innerHeight;this.refs.createCanvas.handleResize(t,c),this.setState({width:t,height:c})}},{key:"render",value:function(){return o.a.createElement(d,{ref:"createCanvas",style:{width:this.state.width,height:this.state.height}})}}])&&z(c.prototype,n),i&&z(c,i),t}()},432:function(e,t){e.exports=function(){return["attribute vec3 position;","void main(void){","    gl_Position = vec4(position, 1.0);","}"].join("\n")}},433:function(e,t){e.exports=function(){return["precision mediump float;","uniform float time;","uniform vec2 resolution;","#define PI 3.141592","float random(vec3 p){","    return fract(sin(dot(p.xyz,vec3(12.9898,0.0,78.233)))*36.253);","}","vec3 rotate(vec3 p, float angle, vec3 axis){","    vec3 a = normalize(axis);","    float s = sin(angle);","    float c = cos(angle);","    float r = 1.0 - c;","    mat3 m = mat3(","        a.x * a.x * r + c,","        a.y * a.x * r + a.z * s,","        a.z * a.x * r - a.y * s,","        a.x * a.y * r - a.z * s,","        a.y * a.y * r + c,","        a.z * a.y * r + a.x * s,","        a.x * a.z * r + a.y * s,","        a.y * a.z * r - a.x * s,","        a.z * a.z * r + c","    );","    return m * p;","}","float boxDistFunc(vec3 p,float t,vec3 b){","     vec3 i=vec3(p.x-mod(p.x,20.0),0.0,p.z-mod(p.z,20.0));","     p.xz=t<5.0?p.xz:t<26.0?(sin(pow(t-5.0,1.2))>0.93?mod(p.xz,20.0)-10.0:p.xz):(length(p.xz)<pow(t-26.0,3.0)?mod(clamp(p.xz,-900.0,900.0),20.0)-10.0:p.xz);","     p=rotate(p,t*3.0,vec3(1.0,0.3,0.5));","    return length(max(abs(p)-b,0.0));","}","float boxDistFunc2(vec3 p,vec3 b,vec3 c){","    return length(max(abs(p-c)-b,0.0));","}","float planeDistFunc(vec3 p,float t){","    p=t<35.0?rotate(p,t,vec3(0.0,1.0,0.0)):p;","    vec3 i=vec3(p.x-mod(p.x,10.0),0.0,p.z-mod(p.z,10.0));","    p.xz=mod(clamp(p.xz,-2000.0,2000.0),10.0)-5.0;","    return boxDistFunc2(p,vec3(4.7),vec3(0.0,-20.0,0.0));   ","}","float distFunc(vec3 p,float t){","    float obj1,obj2;","    obj1=planeDistFunc(p,t);","    obj2=boxDistFunc(p,t,vec3(5.0));","    float c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35,c36,c37,c38,c39,c40,c41,c42,c43,c44;","    float z=-1450.0;","    c0=boxDistFunc2(p,vec3(5.0),vec3(-125.0,38.0,z));","    c1=boxDistFunc2(p,vec3(5.0),vec3(-125.0,24.0,z));","    c2=boxDistFunc2(p,vec3(5.0),vec3(-120.0,51.0,z));","    c3=boxDistFunc2(p,vec3(5.0),vec3(-125.0,10.0,z));","    c4=boxDistFunc2(p,vec3(5.0),vec3(-110.0,56.0,z));","    c5=boxDistFunc2(p,vec3(5.0),vec3(-110.0,5.0,z));","    c6=boxDistFunc2(p,vec3(5.0),vec3(-95.0,56.0,z));","    c7=boxDistFunc2(p,vec3(5.0),vec3(-95.0,5.0,z));","    c8=boxDistFunc2(p,vec3(5.0),vec3(-80.0,46.0,z));","    c9=boxDistFunc2(p,vec3(5.0),vec3(-80.0,15.0,z));","    ","    c10=boxDistFunc2(p,vec3(5.0),vec3(-55.0,57.0,z));","    c11=boxDistFunc2(p,vec3(5.0),vec3(-55.0,44.0,z));","    c12=boxDistFunc2(p,vec3(5.0),vec3(-55.0,31.0,z));","    c13=boxDistFunc2(p,vec3(5.0),vec3(-50.0,18.0,z));","    c14=boxDistFunc2(p,vec3(5.0),vec3(-40.0,5.0,z));","    c15=boxDistFunc2(p,vec3(5.0),vec3(-25.0,5.0,z));","    c16=boxDistFunc2(p,vec3(5.0),vec3(-15.0,18.0,z));","    c17=boxDistFunc2(p,vec3(5.0),vec3(-10.0,31.0,z));","    c18=boxDistFunc2(p,vec3(5.0),vec3(-10.0,44.0,z));","    c19=boxDistFunc2(p,vec3(5.0),vec3(-10.0,57.0,z));","    ","    c20=boxDistFunc2(p,vec3(5.0),vec3(15.0,57.0,z));","    c21=boxDistFunc2(p,vec3(5.0),vec3(15.0,44.0,z));","    c22=boxDistFunc2(p,vec3(5.0),vec3(15.0,31.0,z));","    c23=boxDistFunc2(p,vec3(5.0),vec3(15.0,18.0,z));","    c24=boxDistFunc2(p,vec3(5.0),vec3(15.0,5.0,z));","    c25=boxDistFunc2(p,vec3(5.0),vec3(30.0,5.0,z));","    c26=boxDistFunc2(p,vec3(5.0),vec3(30.0,57.0,z));","    c27=boxDistFunc2(p,vec3(5.0),vec3(45.0,5.0,z));","    c28=boxDistFunc2(p,vec3(5.0),vec3(45.0,57.0,z));","    c29=boxDistFunc2(p,vec3(5.0),vec3(30.0,31.0,z));","    c30=boxDistFunc2(p,vec3(5.0),vec3(45.0,31.0,z));","    c31=boxDistFunc2(p,vec3(5.0),vec3(50.0,18.0,z));","    c32=boxDistFunc2(p,vec3(5.0),vec3(50.0,44.0,z));","    ","    c33=boxDistFunc2(p,vec3(5.0),vec3(75.0,57.0,z));","    c34=boxDistFunc2(p,vec3(5.0),vec3(75.0,44.0,z));","    c35=boxDistFunc2(p,vec3(5.0),vec3(75.0,31.0,z));","    c36=boxDistFunc2(p,vec3(5.0),vec3(75.0,18.0,z));","    c37=boxDistFunc2(p,vec3(5.0),vec3(75.0,5.0,z));","    c38=boxDistFunc2(p,vec3(5.0),vec3(90.0,5.0,z));","    c39=boxDistFunc2(p,vec3(5.0),vec3(90.0,57.0,z));","    c40=boxDistFunc2(p,vec3(5.0),vec3(105.0,5.0,z));","    c41=boxDistFunc2(p,vec3(5.0),vec3(105.0,57.0,z));","    c42=boxDistFunc2(p,vec3(5.0),vec3(90.0,31.0,z));","    c43=boxDistFunc2(p,vec3(5.0),vec3(105.0,31.0,z));","    float a=min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(min(c0,c1),c2),c3),c4),c5),c6),c7),c8),c9),c10),c11),c12),c13),c14),c15),c16),c17),c18),c19),c20),c21),c22),c23),c24),c25),c26),c27),c28),c29),c30),c31),c32),c33),c34),c35),c36),c37),c38),c39),c40),c41),c42),c43);","    return t>38.5?min(obj1,a):min(obj1,obj2);","}","vec3 genNormal(vec3 p,vec3 origin,float t){","    float d=0.001;","    return normalize(vec3(","        distFunc(p+vec3(d,0.0,0.0),t)-distFunc(p+vec3(-d,0.0,0.0),t),","        distFunc(p+vec3(0.0,d,0.0),t)-distFunc(p+vec3(0.0,-d,0.0),t),","        distFunc(p+vec3(0.0,0.0,d),t)-distFunc(p+vec3(0.0,0.0,-d),t)","        ));","}","vec3 getRayColor(inout vec3 ray,inout vec3 origin,float t,out bool hit){","    float distance=0.0;","    float rLen=0.0;","    vec3 rPos=origin;","    vec3 color=vec3(200.0/255.0);","    float maxDist=300.0;","    for(int i=0;i<80;i++){","        distance=distFunc(rPos,t);","        if(abs(distance)<0.25){","             if(distance==boxDistFunc(rPos,t,vec3(5.0))){","                color=vec3(0.2+t/100.0,0.,0.5);","                break;","            }else if(distance==planeDistFunc(rPos,t)){","                vec3 p=t<35.0?rotate(rPos,t,vec3(0.0,1.0,0.0)):rPos;","                vec3 i=vec3(p.x-mod(p.x,10.0),0.0,p.z-mod(p.z,10.0));","                  p.xz=mod(clamp(p.xz,-500.0,500.0),10.0)-5.0;","                color=vec3(0.3*random(i));","                break;","            }else {","                color=vec3(0.1);","                break;","            }","        }","        rLen+=distance;","        rPos=origin+rLen*ray;","        if(rLen>maxDist){","            break;","        }","    }","if(abs(distance)<0.45){","    vec3 normal=genNormal(rPos,origin,t);","    origin=rPos+normal*0.46;","    ray=normalize(reflect(ray,normal));","    hit=true;","}","    return color;","}","void main(void){","    float t=mod(time,45.0);    ","    vec2 p=(gl_FragCoord.xy*2.0-resolution)/min(resolution.x,resolution.y);","    vec3 cPos=vec3(0.0,10.0,30.0);","    vec3 cDir=normalize(vec3(0.0,t<36.0?-0.5:-0.5+clamp((t-36.0)*0.15,0.0,0.5),-1.0));","    vec3 cUp=vec3(0.0,1.0,0.0);","    vec3 cSide=cross(cDir,cUp);","    float depth=1.0;","    cPos+=t>32.0?vec3(0.0,clamp(20.0-(t-32.0)*7.0,0.0,20.0),clamp(90.0-pow((t-33.0),4.0),-1300.0,1000.0)):(t<15.0?vec3(0.0):vec3(0.0,clamp(pow((t-15.0),2.8),0.0,20.0),clamp(pow((t-15.0),4.0),0.0,90.0)));       ","    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*depth);","    vec3 origin=cPos;","    vec3 color=vec3(0.0);","    float alpha=0.7;","    bool hit;","    for(int i=0;i<3;i++){","        color+=alpha*getRayColor(ray,origin,t,hit);","        alpha*=0.6;","        if(!hit)break;","    }","    color=color.r>0.99?vec3(242.0/255.0,242.0/255.0,232.0/255.0):color;","    gl_FragColor=vec4(color,1.0);","}"].join("\n")}},434:function(e,t,c){var n,o=0,i=c(435);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(n=c(62)(i,{hmr:!0})),t},t.unuse=t.unref=function(){o>0&&!--o&&(n(),n=null)}},435:function(e,t,c){(e.exports=c(61)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])}}]);