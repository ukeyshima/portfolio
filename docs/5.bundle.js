(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,t,r){"use strict";r.r(t);r(8),r(9),r(10);var o=r(0),a=r.n(o),n=(r(95),r(93),r(94),r(222),r(441)),i=r.n(n),u=r(442),f=r.n(u),c=r(443),l=r.n(c),v=r(444),s=r.n(v),x=r(445),A=r.n(x),m=r(446),b=r.n(m),E=r(447),R=r.n(E),d=r(448),T=r.n(d),y=r(449),F=r.n(y),g=r(450),_=r.n(g),p=r(451),h=r.n(p),C=r(452),B=r.n(C),U=r(453),w=r.n(U),P=r(454),z=r.n(P),D=r(455),M=r.n(D),S=r(456),L=r.n(S);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function N(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Y(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=[i()(),f()(),l()(),s()(),A()(),b()(),R()(),T()(),F()(),_()()],k=[h.a,B.a,w.a,z.a,M.a,L.a],H=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Y(this,V(t).call(this,e))).requestId=0,r}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,a.a.Component),r=t,(o=[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId)}},{key:"updateCanvas",value:function(){var e=this;this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl2");var t=function(e,t,r){var o,a=function(e,r,o){var a=t.createProgram();return t.attachShader(a,e),t.attachShader(a,r),o&&t.transformFeedbackVaryings(a,["outPosition"],t.SEPARATE_ATTRIBS),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)?(t.useProgram(a),a):null},n=function(e,r){var o=t.createShader(r);if(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS))return o;alert(t.getShaderInfoLog(o)),console.log(t.getShaderInfoLog(o))},i=function(e,r,o){var a=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,a);for(var n=[],i=0;i<o;i++)n[i]=t.createTexture(),t.bindTexture(t.TEXTURE_2D,n[i]),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,r,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+i,t.TEXTURE_2D,n[i],0);var u=t.createRenderbuffer();return t.bindRenderbuffer(t.RENDERBUFFER,u),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e,r),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,u),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),{f:a,d:u,t:n}},u=a(n(r[0],t.VERTEX_SHADER),n(r[1],t.FRAGMENT_SHADER),!0),f=[],c=[],l=new Array(300).fill(0).map(function(e,t,r){return t%3==0?70*Math.random()-35:t%3==1?25*-Math.random()-50:70*Math.random()-35});f[0]=t.getAttribLocation(u,"position"),c[0]=3;var v=new Array(300).fill(0).map(function(e,t,r){return t%3==0?0:t%3==1?.1*Math.random():0});f[1]=t.getAttribLocation(u,"velocity"),c[1]=3;var s=[].concat(l);f[2]=t.getAttribLocation(u,"startPosition"),c[2]=3;var x=[t.createBuffer(),t.createBuffer()],A=t.createTransformFeedback(),m=[l,v,s],b=[];b[0]=t.createVertexArray(),t.bindVertexArray(b[0]),t.bindBuffer(t.ARRAY_BUFFER,x[0]),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[0]),t.DYNAMIC_COPY),t.enableVertexAttribArray(f[0]),t.vertexAttribPointer(f[0],c[0],t.FLOAT,!1,0,0),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,A),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[1]),t.STATIC_DRAW),t.enableVertexAttribArray(f[1]),t.vertexAttribPointer(f[1],c[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[2]),t.STATIC_DRAW),t.enableVertexAttribArray(f[2]),t.vertexAttribPointer(f[2],c[2],t.FLOAT,!1,0,0),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null),b[1]=t.createVertexArray(),t.bindVertexArray(b[1]),t.bindBuffer(t.ARRAY_BUFFER,x[1]),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[0]),t.DYNAMIC_COPY),t.enableVertexAttribArray(f[0]),t.vertexAttribPointer(f[0],c[0],t.FLOAT,!1,0,0),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,A),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[1]),t.STATIC_DRAW),t.enableVertexAttribArray(f[1]),t.vertexAttribPointer(f[1],c[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(m[2]),t.STATIC_DRAW),t.enableVertexAttribArray(f[2]),t.vertexAttribPointer(f[2],c[2],t.FLOAT,!1,0,0),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,x[1]),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null);var E=a(n(r[2],t.VERTEX_SHADER),n(r[3],t.FRAGMENT_SHADER),!1),R=[];R[0]=t.getUniformLocation(E,"cubeTexture"),R[1]=t.getUniformLocation(E,"resolution"),R[2]=t.getUniformLocation(E,"eyePosition"),R[3]=t.getUniformLocation(E,"viewPoint");var d,T={p:[-(d=1),-d,d,d,-d,d,d,d,d,-d,d,d,-d,-d,-d,-d,d,-d,d,d,-d,d,-d,-d,-d,d,-d,-d,d,d,d,d,d,d,d,-d,-d,-d,-d,d,-d,-d,d,-d,d,-d,-d,d,d,-d,-d,d,d,-d,d,d,d,d,-d,d,-d,-d,-d,-d,-d,d,-d,d,d,-d,d,-d],n:[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],i:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]},y=[];y[0]=t.getAttribLocation(E,"position");var F=[];F[0]=3;var g=t.createVertexArray();t.bindVertexArray(g),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(T.p),t.STATIC_DRAW),t.enableVertexAttribArray(y[0]),t.vertexAttribPointer(y[0],F[0],t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(T.i),t.STATIC_DRAW),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),function(e){for(var r=[t.TEXTURE_CUBE_MAP_POSITIVE_X,t.TEXTURE_CUBE_MAP_POSITIVE_Y,t.TEXTURE_CUBE_MAP_POSITIVE_Z,t.TEXTURE_CUBE_MAP_NEGATIVE_X,t.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.TEXTURE_CUBE_MAP_NEGATIVE_Z],a=[],n=[],i=function(t){a[t]=new Image,a[t].src=e[t],a[t].onload=function(){n[t]=!0,n[0]&&n[1]&&n[2]&&n[3]&&n[4]&&n[5]&&f()}},u=0;u<6;u++)i(u);var f=function(){var e=t.createTexture();t.bindTexture(t.TEXTURE_CUBE_MAP,e);for(var n=0;n<6;n++)t.texImage2D(r[n],0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,a[n]);t.generateMipmap(t.TEXTURE_CUBE_MAP),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o=e,t.bindTexture(t.TEXTURE_CUBE_MAP,null)}}(k),t.activeTexture(t.TEXTURE0);var _=a(n(r[4],t.VERTEX_SHADER),n(r[5],t.FRAGMENT_SHADER),!1),p=[];p[0]=t.getUniformLocation(_,"resolution"),p[1]=t.getUniformLocation(_,"time"),p[2]=t.getUniformLocation(_,"cubeTexture"),p[3]=t.getUniformLocation(_,"eyePosition"),p[4]=t.getUniformLocation(_,"viewPoint");var h=[],C=[],B=function(e,t,r){for(var o=[],a=[],n=[],i=0;i<=e;i++)for(var u=Math.PI/e*i,f=Math.cos(u),c=Math.sin(u),l=0;l<=t;l++){var v=2*Math.PI/t*l,s=c*r*Math.cos(v),x=f*r,A=c*r*Math.sin(v),m=c*Math.cos(v),b=c*Math.sin(v);o.push(s,x,A),a.push(m,f,b)}for(var E=0;E<e;E++)for(var R=0;R<t;R++){var d=(t+1)*E+R;n.push(d,d+1,d+t+2),n.push(d,d+t+2,d+t+1)}return{p:o,n:a,i:n}}(64,64,.3);h[0]=t.getAttribLocation(_,"position"),C[0]=3,h[1]=t.getAttribLocation(_,"normal"),C[1]=3,h[2]=t.getAttribLocation(_,"offset"),C[2]=3;var U=[];U[0]=t.createVertexArray(),t.bindVertexArray(U[0]),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(B.p),t.STATIC_DRAW),t.enableVertexAttribArray(h[0]),t.vertexAttribPointer(h[0],C[0],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(B.n),t.STATIC_DRAW),t.enableVertexAttribArray(h[1]),t.vertexAttribPointer(h[1],C[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,x[0]),t.enableVertexAttribArray(h[2]),t.vertexAttribPointer(h[2],C[2],t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(B.i),t.DYNAMIC_COPY),t.vertexAttribDivisor(h[2],1),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,x[0]),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),U[1]=t.createVertexArray(),t.bindVertexArray(U[1]),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(B.p),t.STATIC_DRAW),t.enableVertexAttribArray(h[0]),t.vertexAttribPointer(h[0],C[0],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(B.n),t.STATIC_DRAW),t.enableVertexAttribArray(h[1]),t.vertexAttribPointer(h[1],C[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,x[1]),t.enableVertexAttribArray(h[2]),t.vertexAttribPointer(h[2],C[2],t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(B.i),t.DYNAMIC_COPY),t.vertexAttribDivisor(h[2],1),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,x[1]),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null);var w=a(n(r[6],t.VERTEX_SHADER),n(r[7],t.FRAGMENT_SHADER),!1),P=[];P[0]=t.getUniformLocation(w,"cubeColor"),P[1]=t.getUniformLocation(w,"resolution"),P[2]=t.getUniformLocation(w,"weight");for(var z=[],D=[],M=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],S=[0,2,1,1,2,3],L=new Array(10),I=0,O=0;O<L.length;O++){var N=1+2*O,Y=Math.exp(N*N*-.5/100);L[O]=Y,O>0&&(Y*=2),I+=Y}for(var V=0;V<L.length;V++)L[V]/=I;var X=[0,0,1,0,0,1,1,1];z[0]=t.getAttribLocation(w,"position"),D[0]=3,z[1]=t.getAttribLocation(w,"textureCoord"),D[1]=2;var j=t.createVertexArray();t.bindVertexArray(j),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(M),t.STATIC_DRAW),t.enableVertexAttribArray(z[0]),t.vertexAttribPointer(z[0],D[0],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(X),t.STATIC_DRAW),t.enableVertexAttribArray(z[1]),t.vertexAttribPointer(z[1],D[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(S),t.STATIC_DRAW),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null);var H=a(n(r[8],t.VERTEX_SHADER),n(r[9],t.FRAGMENT_SHADER),!1),G=[];G[0]=t.getUniformLocation(H,"sphereColor"),G[1]=t.getUniformLocation(H,"sphereDepth"),G[2]=t.getUniformLocation(H,"cubeColor"),G[3]=t.getUniformLocation(H,"cubeDepth"),G[4]=t.getUniformLocation(H,"resolution"),G[5]=t.getUniformLocation(H,"weight");var W=[],q=[];W[0]=t.getAttribLocation(H,"position"),q[0]=3,W[1]=t.getAttribLocation(H,"textureCoord"),q[1]=2;var K=t.createVertexArray();t.bindVertexArray(K),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(M),t.STATIC_DRAW),t.enableVertexAttribArray(W[0]),t.vertexAttribPointer(W[0],q[0],t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array(X),t.STATIC_DRAW),t.enableVertexAttribArray(W[1]),t.vertexAttribPointer(W[1],q[1],t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(S),t.STATIC_DRAW),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null);var Z=[],J=[t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1];Z[0]=i(e.width,e.height,2),Z[1]=i(e.width,e.height,2),Z[2]=i(e.width,e.height,2),t.enable(t.BLEND),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE);var Q=[0,0,0],$=[0,0,0],ee=(new Date).getTime(),te=1;return function(){var r=.001*((new Date).getTime()-ee);Q[0]=30*Math.sin(r/20),Q[2]=30*Math.cos(r/20),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.useProgram(u),t.bindVertexArray(b[1-te]),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,x[te]),t.enable(t.RASTERIZER_DISCARD),t.beginTransformFeedback(t.POINTS),t.drawArrays(t.POINTS,0,100),t.endTransformFeedback(),t.disable(t.RASTERIZER_DISCARD),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,null),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,Z[0].f),t.clearColor(0,0,0,1),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.useProgram(_),t.bindVertexArray(U[te]),t.uniform2fv(p[0],[e.width,e.height]),t.uniform1f(p[1],r),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_CUBE_MAP,o),t.uniform1i(p[2],0),t.uniform3fv(p[3],Q),t.uniform3fv(p[4],$),t.drawBuffers(J),t.drawElementsInstanced(t.TRIANGLES,new Int16Array(B.i).length,t.UNSIGNED_SHORT,0,100),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.disable(t.DEPTH_TEST),t.bindFramebuffer(t.FRAMEBUFFER,Z[1].f),t.useProgram(E),t.bindVertexArray(g),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_CUBE_MAP,o),t.uniform1i(R[0],0),t.uniform2fv(R[1],[e.width,e.height]),t.uniform3fv(R[2],Q),t.uniform3fv(R[3],$),t.drawBuffers(J),t.drawElements(t.TRIANGLES,T.i.length,t.UNSIGNED_SHORT,0),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,Z[2].f),t.useProgram(w),t.bindVertexArray(j),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Z[1].t[0]),t.uniform1i(P[0],0),t.uniform2fv(P[1],[e.width,e.height]),t.uniform1fv(P[2],L),t.drawBuffers(J),t.drawElements(t.TRIANGLES,S.length,t.UNSIGNED_SHORT,0),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.useProgram(H),t.clearColor(242/255,242/255,232/255,1),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.bindVertexArray(K),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Z[0].t[0]),t.uniform1i(G[0],0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Z[0].t[1]),t.uniform1i(G[1],1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,Z[2].t[0]),t.uniform1i(G[2],2),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,Z[1].t[1]),t.uniform1i(G[3],3),t.uniform2fv(G[4],[e.width,e.height]),t.uniform1fv(G[5],L),t.drawElements(t.TRIANGLES,S.length,t.UNSIGNED_SHORT,0),t.bindVertexArray(null),te=1-te}}(this.canvas,this.gl,j);!function r(){t(),e.requestId=requestAnimationFrame(r)}()}},{key:"handleResize",value:function(e,t){}},{key:"render",value:function(){var e=this;return a.a.createElement("canvas",O({},this.props,{ref:function(t){e.canvas=t}}))}}])&&N(r.prototype,o),n&&N(r,n),t}(),G=r(457),W=r.n(G);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"default",function(){return $});var $=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Z(this,J(t).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},r}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,a.a.Component),r=t,(o=[{key:"componentDidMount",value:function(){W.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){W.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth,r=e.target.innerHeight;this.refs.createCanvas.handleResize(t,r),this.setState({width:t,height:r})}},{key:"render",value:function(){return a.a.createElement(H,{ref:"createCanvas",style:{width:this.state.width,height:this.state.height}})}}])&&K(r.prototype,o),n&&K(r,n),t}()},222:function(e,t,r){var o=r(21);o(o.P,"Array",{fill:r(65)}),r(96)("fill")},441:function(e,t){e.exports=function(){return["#version 300 es","layout (location = 0)in vec3 position;                   ","layout (location = 1)in vec3 velocity;                                 ","layout (location = 2)in vec3 startPosition;","out vec3 outPosition;","  void main(void){                ","  outPosition=position+velocity;","  if(outPosition.y>50.0){","    outPosition=startPosition;","  } ","  gl_Position = vec4(outPosition, 1.0);               ","}"].join("\n")}},442:function(e,t){e.exports=function(){return["#version 300 es   ","precision highp float;   ","out vec4 outColor;","  void main(void){ ","    outColor=vec4(0.0,0.0,0.0,1.0);","  }"].join("\n")}},443:function(e,t){e.exports=function(){return["#version 300 es","  layout (location = 0)in vec3 position;      ","  out vec3 vPosition;              ","  out float vDepth;","  uniform vec3 eyePosition;","  uniform vec3 viewPoint;","  uniform vec2 resolution;      ","  #define PI 3.141592    ","  const mat4 identity=mat4(","    1.0,0.0,0.0,0.0,","    0.0,1.0,0.0,0.0,","    0.0,0.0,1.0,0.0,","    0.0,0.0,0.0,1.0","  );","  mat4 translate(mat4 m,vec3 v){","    return mat4(","      m[0][0],m[0][1],m[0][2],m[0][3],","      m[1][0],m[1][1],m[1][2],m[1][3],","      m[2][0],m[2][1],m[2][2],m[2][3],","      m[0][0]*v.x+m[1][0]*v.y+m[2][0]*v.z+m[3][0],","      m[0][1]*v.x+m[1][1]*v.y+m[2][1]*v.z+m[3][1],","      m[0][2]*v.x+m[1][2]*v.y+m[2][2]*v.z+m[3][2],","      m[0][3]*v.x+m[1][3]*v.y+m[2][3]*v.z+m[3][3]","    );","  }","  mat4 rotate(mat4 mat, float angle, vec3 axis){","    mat4 dest;","    if(length(axis)==0.0){return identity;}","    axis=normalize(axis);","    float d = sin(angle);","    float e = cos(angle);","    float f = 1.0 - e;","    float g = mat[0][0];","    float h = mat[0][1];","    float i = mat[0][2];","    float j = mat[0][3];","    float k = mat[1][0];","    float l = mat[1][1];","    float m = mat[1][2];","    float n = mat[1][3];","    float o = mat[2][0];","    float p = mat[2][1];","    float q = mat[2][2];","    float r = mat[2][3];","    float s = axis.x * axis.x * f + e;","    float t = axis.y * axis.x * f + axis.z * d;","    float u = axis.z * axis.x * f - axis.y * d;","    float v = axis.x * axis.y * f - axis.z * d;","    float w = axis.y * axis.y * f + e;","    float x = axis.z * axis.y * f + axis.x * d;","    float y = axis.x * axis.z * f + axis.y * d;","    float z = axis.y * axis.z * f - axis.x * d;","    float A = axis.z * axis.z * f + e;","    if(angle != 0.0){","      dest[3][0] = mat[3][0]; dest[3][1] = mat[3][1];","      dest[3][2] = mat[3][2]; dest[3][3] = mat[3][3];        ","    } else {","      dest = mat;","    }","    dest[0][0]  = g * s + k * t + o * u;","    dest[0][1]  = h * s + l * t + p * u;","    dest[0][2]  = i * s + m * t + q * u;","    dest[0][3]  = j * s + n * t + r * u;","    dest[1][0]  = g * v + k * w + o * x;","    dest[1][1]  = h * v + l * w + p * x;","    dest[1][2]  = i * v + m * w + q * x;","    dest[1][3]  = j * v + n * w + r * x;","    dest[2][0]  = g * y + k * z + o * A;","    dest[2][1]  = h * y + l * z + p * A;","    dest[2][2] = i * y + m * z + q * A;","    dest[2][3] = j * y + n * z + r * A;","    return dest;","    }","  mat4 scale(mat4 mat, vec3 vec){","    return mat4(","      mat[0][0]*vec.x,mat[0][1]*vec.x,mat[0][2]*vec.x,mat[0][3]*vec.x,","      mat[1][0]*vec.y,mat[1][1]*vec.y,mat[1][2]*vec.y,mat[1][3]*vec.y,","      mat[2][0]*vec.z,mat[2][1]*vec.z,mat[2][2]*vec.z,mat[2][3]*vec.z,","      mat[3][0],mat[3][1],mat[3][2],mat[3][3]","    );","  }","  mat4 lookAt(vec3 eye, vec3 center, vec3 up){","    vec3 z=eye-center;","    if(z==vec3(0.0)){return identity;}    ","    z = normalize(z);","    vec3 x=vec3(up.y*z.z-up.z*z.y,up.z*z.x-up.x*z.z,up.x*z.y-up.y*z.x);","    x=length(x)==0.0?vec3(0.0):normalize(x);","    vec3 y=vec3(z.y*x.z-z.z*x.y,z.z*x.x-z.x*x.z,z.x*x.y-z.y*x.x);","    y=length(y)==0.0?vec3(0.0):normalize(y);","    return mat4(x.x,y.x,z.x,0.0,","                x.y,y.y,z.y,0.0,","                x.z,y.z,z.z,0.0,","                -dot(x,eye),-dot(y,eye),-dot(z,eye),1.0);","  }","  mat4 perspective(float fovy, float aspect, float near, float far){","    float t = near * tan(fovy * PI / 360.0);","    float r = t * aspect;","    float a = r * 2.0;","    float b = t * 2.0;","    float c = far - near;","    mat4 dest=mat4(","      near*2.0/a,0.0,0.0,0.0,","      0.0,near*2.0/b,0.0,0.0,","      0.0,0.0,-(far+near)/c,-1.0,","      0.0,0.0,-(far*near*2.0)/c,0.0","    );","    return dest;","  }       ","                                    ","void main(void){                       ","  mat4 mMatrix=identity;   ","  mMatrix=scale(mMatrix,vec3(100.0));      ","  mat4 vMatrix=lookAt(eyePosition,viewPoint,vec3(0.0,1.0,0.0));","  mat4 pMatrix=perspective(90.0,resolution.x/resolution.y,0.1,1000.0);","  mat4 mvpMatrix=pMatrix*vMatrix*mMatrix;","  vPosition=(mMatrix*vec4(position,1.0)).xyz;","  gl_Position=mvpMatrix*vec4(position, 1.0);     ","  vDepth = gl_Position.z / gl_Position.w;           ","}"].join("\n")}},444:function(e,t){e.exports=function(){return["#version 300 es","precision mediump float;","uniform samplerCube cubeTexture;","in vec3 vPosition;","in float vDepth;","layout (location = 0) out vec4 outColor0;","layout (location = 1) out vec4 outColor1;","void main(void){","    outColor0=texture(cubeTexture,vPosition);       ","    outColor1 = vec4(vec3((vDepth + 1.0) / 2.0), 1.0);","}"].join("\n")}},445:function(e,t){e.exports=function(){return["#version 300 es","  layout (location = 0)in vec3 position;    ","  layout (location = 1)in vec3 normal;                 ","  layout (location = 2)in vec3 offset;     ","  uniform vec2 resolution;","  uniform float time;","  out vec3 vPosition;  ","  out vec3 vNormal;  ","  out float vDepth;","  uniform vec3 eyePosition;  ","  out vec3 vEyePosition;","  uniform vec3 viewPoint;","  #define PI 3.141592","  const mat4 identity=mat4(","    1.0,0.0,0.0,0.0,","    0.0,1.0,0.0,0.0,","    0.0,0.0,1.0,0.0,","    0.0,0.0,0.0,1.0","  );","  mat4 translate(mat4 m,vec3 v){","    return mat4(","      m[0][0],m[0][1],m[0][2],m[0][3],","      m[1][0],m[1][1],m[1][2],m[1][3],","      m[2][0],m[2][1],m[2][2],m[2][3],","      m[0][0]*v.x+m[1][0]*v.y+m[2][0]*v.z+m[3][0],","      m[0][1]*v.x+m[1][1]*v.y+m[2][1]*v.z+m[3][1],","      m[0][2]*v.x+m[1][2]*v.y+m[2][2]*v.z+m[3][2],","      m[0][3]*v.x+m[1][3]*v.y+m[2][3]*v.z+m[3][3]","    );","  }","  mat4 rotate(mat4 mat, float angle, vec3 axis){","    mat4 dest;","    if(length(axis)==0.0){return identity;}","    axis=normalize(axis);","    float d = sin(angle);","    float e = cos(angle);","    float f = 1.0 - e;","    float g = mat[0][0];","    float h = mat[0][1];","    float i = mat[0][2];","    float j = mat[0][3];","    float k = mat[1][0];","    float l = mat[1][1];","    float m = mat[1][2];","    float n = mat[1][3];","    float o = mat[2][0];","    float p = mat[2][1];","    float q = mat[2][2];","    float r = mat[2][3];","    float s = axis.x * axis.x * f + e;","    float t = axis.y * axis.x * f + axis.z * d;","    float u = axis.z * axis.x * f - axis.y * d;","    float v = axis.x * axis.y * f - axis.z * d;","    float w = axis.y * axis.y * f + e;","    float x = axis.z * axis.y * f + axis.x * d;","    float y = axis.x * axis.z * f + axis.y * d;","    float z = axis.y * axis.z * f - axis.x * d;","    float A = axis.z * axis.z * f + e;","    if(angle != 0.0){","      dest[3][0] = mat[3][0]; dest[3][1] = mat[3][1];","      dest[3][2] = mat[3][2]; dest[3][3] = mat[3][3];        ","    } else {","      dest = mat;","    }","    dest[0][0]  = g * s + k * t + o * u;","    dest[0][1]  = h * s + l * t + p * u;","    dest[0][2]  = i * s + m * t + q * u;","    dest[0][3]  = j * s + n * t + r * u;","    dest[1][0]  = g * v + k * w + o * x;","    dest[1][1]  = h * v + l * w + p * x;","    dest[1][2]  = i * v + m * w + q * x;","    dest[1][3]  = j * v + n * w + r * x;","    dest[2][0]  = g * y + k * z + o * A;","    dest[2][1]  = h * y + l * z + p * A;","    dest[2][2] = i * y + m * z + q * A;","    dest[2][3] = j * y + n * z + r * A;","    return dest;","    }","  mat4 scale(mat4 mat, vec3 vec){","    return mat4(","      mat[0][0]*vec.x,mat[0][1]*vec.x,mat[0][2]*vec.x,mat[0][3]*vec.x,","      mat[1][0]*vec.y,mat[1][1]*vec.y,mat[1][2]*vec.y,mat[1][3]*vec.y,","      mat[2][0]*vec.z,mat[2][1]*vec.z,mat[2][2]*vec.z,mat[2][3]*vec.z,","      mat[3][0],mat[3][1],mat[3][2],mat[3][3]","    );","  }","  mat4 lookAt(vec3 eye, vec3 center, vec3 up){","    vec3 z=eye-center;","    if(z==vec3(0.0)){return identity;}    ","    z = normalize(z);","    vec3 x=vec3(up.y*z.z-up.z*z.y,up.z*z.x-up.x*z.z,up.x*z.y-up.y*z.x);","    x=length(x)==0.0?vec3(0.0):normalize(x);","    vec3 y=vec3(z.y*x.z-z.z*x.y,z.z*x.x-z.x*x.z,z.x*x.y-z.y*x.x);","    y=length(y)==0.0?vec3(0.0):normalize(y);","    return mat4(x.x,y.x,z.x,0.0,","                x.y,y.y,z.y,0.0,","                x.z,y.z,z.z,0.0,","                -dot(x,eye),-dot(y,eye),-dot(z,eye),1.0);","  }","  mat4 perspective(float fovy, float aspect, float near, float far){","    float t = near * tan(fovy * PI / 360.0);","    float r = t * aspect;","    float a = r * 2.0;","    float b = t * 2.0;","    float c = far - near;","    mat4 dest=mat4(","      near*2.0/a,0.0,0.0,0.0,","      0.0,near*2.0/b,0.0,0.0,","      0.0,0.0,-(far+near)/c,-1.0,","      0.0,0.0,-(far*near*2.0)/c,0.0","    );","    return dest;","  }","float random(vec3 p){","  return fract(sin(dot(p,vec3(15.1928,21.4918,32.1948))*12.9898)*43758.5453123);    ","}","float random2(float p){","  return fract(sin(p*12.9898)*43758.5453123);    ","}","    void main(void){          ","      vEyePosition=eyePosition;                                   ","      mat4 mMatrix=identity;   ","      mMatrix=translate(mMatrix,position+offset);  ","      mMatrix=scale(mMatrix,20.0*vec3(random2(float(gl_InstanceID))));          ","      mat4 vMatrix=lookAt(eyePosition,viewPoint,vec3(0.0,1.0,0.0));","      mat4 pMatrix=perspective(90.0,resolution.x/resolution.y,0.1,1000.0);","      mat4 mvpMatrix=pMatrix*vMatrix*mMatrix;","      vPosition=(mMatrix*vec4(position,1.0)).xyz;","      vNormal=(mMatrix*vec4(normal,0.0)).xyz;","      gl_Position =mvpMatrix*vec4(position, 1.0);       ","      vDepth = gl_Position.z / gl_Position.w;                   ","    }"].join("\n")}},446:function(e,t){e.exports=function(){return["#version 300 es   ","precision highp float;   ","uniform samplerCube cubeTexture;    ","in vec3 vPosition;","in vec3 vNormal;","in vec3 vEyePosition;","in float vDepth;","layout (location = 0) out vec4 outColor0;","layout (location = 1) out vec4 outColor1;","void main(void){","  outColor0 = texture(cubeTexture,reflect(vPosition-vEyePosition,normalize(vNormal)));","  outColor0.w=0.6;","  outColor1 = vec4(vec3((vDepth + 1.0) / 2.0), 1.0);","}"].join("\n")}},447:function(e,t){e.exports=function(){return["#version 300 es","layout (location = 0)in vec3 position;                                         ","layout (location = 1)in vec2 textureCoord;          ","out vec2 vTextureCoord;","  void main(void){     ","    vTextureCoord=textureCoord;","    gl_Position = vec4(position, 1.0);               ","}"].join("\n")}},448:function(e,t){e.exports=function(){return["#version 300 es","precision highp float;","uniform sampler2D cubeColor;","uniform float weight[10];","uniform vec2 resolution;","layout (location = 0) out vec4 outColor;","in vec2 vTextureCoord;","void main(void){     ","    vec2 tFrag = 1.0 / resolution;   ","    vec3  color = vec3(0.0);","    color += texture(cubeColor, (vTextureCoord + vec2(-9.0, 0.0)*tFrag)).rgb * weight[9];","    color += texture(cubeColor, (vTextureCoord + vec2(-8.0, 0.0)*tFrag)).rgb * weight[8];","    color += texture(cubeColor, (vTextureCoord + vec2(-7.0, 0.0)*tFrag)).rgb * weight[7];","    color += texture(cubeColor, (vTextureCoord + vec2(-6.0, 0.0)*tFrag)).rgb * weight[6];","    color += texture(cubeColor, (vTextureCoord + vec2(-5.0, 0.0)*tFrag)).rgb * weight[5];","    color += texture(cubeColor, (vTextureCoord + vec2(-4.0, 0.0)*tFrag)).rgb * weight[4];","    color += texture(cubeColor, (vTextureCoord + vec2(-3.0, 0.0)*tFrag)).rgb * weight[3];","    color += texture(cubeColor, (vTextureCoord + vec2(-2.0, 0.0)*tFrag)).rgb * weight[2];","    color += texture(cubeColor, (vTextureCoord + vec2(-1.0, 0.0)*tFrag)).rgb * weight[1];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 0.0)*tFrag)).rgb * weight[0];","    color += texture(cubeColor, (vTextureCoord + vec2( 1.0, 0.0)*tFrag)).rgb * weight[1];","    color += texture(cubeColor, (vTextureCoord + vec2( 2.0, 0.0)*tFrag)).rgb * weight[2];","    color += texture(cubeColor, (vTextureCoord + vec2( 3.0, 0.0)*tFrag)).rgb * weight[3];","    color += texture(cubeColor, (vTextureCoord + vec2( 4.0, 0.0)*tFrag)).rgb * weight[4];","    color += texture(cubeColor, (vTextureCoord + vec2( 5.0, 0.0)*tFrag)).rgb * weight[5];","    color += texture(cubeColor, (vTextureCoord + vec2( 6.0, 0.0)*tFrag)).rgb * weight[6];","    color += texture(cubeColor, (vTextureCoord + vec2( 7.0, 0.0)*tFrag)).rgb * weight[7];","    color += texture(cubeColor, (vTextureCoord + vec2( 8.0, 0.0)*tFrag)).rgb * weight[8];","    color += texture(cubeColor, (vTextureCoord + vec2( 9.0, 0.0)*tFrag)).rgb * weight[9];    ","    outColor = vec4(color, 1.0);        ","}"].join("\n")}},449:function(e,t){e.exports=function(){return["#version 300 es","layout (location = 0)in vec3 position;                                         ","layout (location = 1)in vec2 textureCoord;          ","out vec2 vTextureCoord;","  void main(void){     ","    vTextureCoord=textureCoord;","    gl_Position = vec4(position, 1.0);             ","}"].join("\n")}},450:function(e,t){e.exports=function(){return["#version 300 es","precision highp float;","uniform sampler2D sphereColor;","uniform sampler2D sphereDepth;","uniform sampler2D cubeColor;","uniform sampler2D cubeDepth;","uniform vec2 resolution;","uniform float weight[10];","out vec4 outColor;","in vec2 vTextureCoord;","void main(void){     ","    vec2 tFrag = 1.0 / resolution;   ","    vec3  color = vec3(0.0);","    float cube_depth = texture(cubeDepth,vTextureCoord).r;","    float sphere_depth = texture(cubeDepth,vec2(vTextureCoord.x,1.0-vTextureCoord.y)).r;","    if(length(texture(sphereColor,vec2(vTextureCoord.x,1.0-vTextureCoord.y)).xyz)<0.01)sphere_depth=1000.0;","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -9.0)*tFrag)).rgb * weight[9];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -8.0)*tFrag)).rgb * weight[8];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -7.0)*tFrag)).rgb * weight[7];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -6.0)*tFrag)).rgb * weight[6];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -5.0)*tFrag)).rgb * weight[5];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -4.0)*tFrag)).rgb * weight[4];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -3.0)*tFrag)).rgb * weight[3];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -2.0)*tFrag)).rgb * weight[2];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, -1.0)*tFrag)).rgb * weight[1];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 0.0)*tFrag)).rgb * weight[0];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 1.0)*tFrag)).rgb * weight[1];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 2.0)*tFrag)).rgb * weight[2];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 3.0)*tFrag)).rgb * weight[3];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 4.0)*tFrag)).rgb * weight[4];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 5.0)*tFrag)).rgb * weight[5];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 6.0)*tFrag)).rgb * weight[6];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 7.0)*tFrag)).rgb * weight[7];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 8.0)*tFrag)).rgb * weight[8];","    color += texture(cubeColor, (vTextureCoord + vec2( 0.0, 9.0)*tFrag)).rgb * weight[9];       ","     if(sphere_depth > cube_depth){","         outColor = vec4(color, 1.0);                ","     }else{","         outColor=mix(texture(sphereColor,vec2(vTextureCoord.x,1.0-vTextureCoord.y)),vec4(color,1.0),0.4);","     }    ","}"].join("\n")}},451:function(e,t,r){e.exports=r.p+"727b24e7d0763811183a97b0c3cf24fc.jpg"},452:function(e,t,r){e.exports=r.p+"02985607959f8aa9aaaf8ea1db9ab6ff.jpg"},453:function(e,t,r){e.exports=r.p+"b5dbb955a43820533637d5125e7f0e9b.jpg"},454:function(e,t,r){e.exports=r.p+"3377a4addd2e83d6a8b3d2f1764c4a7d.jpg"},455:function(e,t,r){e.exports=r.p+"942153cadbea264189b1a87bd84aa487.jpg"},456:function(e,t,r){e.exports=r.p+"f489fee89f92036a0f64f926e063bc10.jpg"},457:function(e,t,r){var o,a=0,n=r(458),i={hmr:!0};i.insertInto=void 0,"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(t.locals=n.locals),t.use=t.ref=function(){return a++||(o=r(61)(n,i)),t},t.unuse=t.unref=function(){a>0&&!--a&&(o(),o=null)}},458:function(e,t,r){(e.exports=r(60)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])}}]);