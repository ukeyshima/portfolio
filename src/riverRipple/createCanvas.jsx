import React from "react";
import vert from "./vertexShader.glsl";
import frag from "./fragmentShader.glsl";
const webGLStart = (canvas, gl, vs, fs) => {
  const create_program = (vs, fs) => {
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.useProgram(program);
      return program;
    } else {
      return null;
    }
  };
  const create_shader = (text, type) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, text);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return shader;
    } else {
      alert(gl.getShaderInfoLog(shader));
      console.log(gl.getShaderInfoLog(shader));
    }
  };
  const create_vbo = data => {
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vbo;
  };
  const create_ibo = data => {
    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Int16Array(data),
      gl.STATIC_DRAW
    );
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    return ibo;
  };
  const set_attribute = (vbo, attL, attS) => {
    vbo.forEach((e, i, a) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, e);
      gl.enableVertexAttribArray(attL[i]);
      gl.vertexAttribPointer(attL[i], attS[i], gl.FLOAT, false, 0, 0);
    });
  };
  const prg = create_program(
    create_shader(vs, gl.VERTEX_SHADER),
    create_shader(fs, gl.FRAGMENT_SHADER)
  );
  const uniLocation = [];
  uniLocation[0] = gl.getUniformLocation(prg, "time");
  uniLocation[1] = gl.getUniformLocation(prg, "resolution");

  const position = [
    -1.0,
    1.0,
    0.0,
    1.0,
    1.0,
    0.0,
    -1.0,
    -1.0,
    0.0,
    1.0,
    -1.0,
    0.0
  ];
  const index = [0, 2, 1, 1, 2, 3];
  const attLocation = [];
  const attStride = [];

  const vPosition = create_vbo(position);
  attLocation[0] = gl.getAttribLocation(prg, "position");
  attStride[0] = 3;

  const vIndex = create_ibo(index);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vIndex);

  gl.clearColor(1.0, 0.0, 0.0, 1.0);

  const startTime = new Date().getTime();
  const render = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uniLocation[0], (new Date().getTime() - startTime) * 0.001);
    gl.uniform2fv(uniLocation[1], [canvas.width, canvas.height]);
    set_attribute([vPosition], attLocation, attStride);
    gl.drawElements(gl.TRIANGLES, index.length, gl.UNSIGNED_SHORT, 0);
    gl.flush();    
  };
  return render;
};


class CreateCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.requestId=0;
  }
  componentDidMount() {
    this.updateCanvas();
  }
  componentWillUnmount(){
    cancelAnimationFrame(this.requestId);
  }
  updateCanvas() {    
    this.canvas.width = this.props.style.width;
    this.canvas.height = this.props.style.height;
    this.gl = this.canvas.getContext("webgl");
    const render=webGLStart(this.canvas,this.gl,vert(),frag());
    const loop=()=>{
      render();
      this.requestId=requestAnimationFrame(loop);
    }
    loop();
  }
  handleResize(w,h){
    this.canvas.width = w;
    this.canvas.height = h;
    this.gl.viewport(0,0,w,h);        
  }  
  render() {
    return (
      <canvas
        {...this.props}
        ref={e => {
          this.canvas = e;
        }}
      />
    );
  }
}
export default CreateCanvas;
