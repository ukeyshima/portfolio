precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D tex;
varying vec2 vTextureCoord;
#define PI 3.141592

float r1(vec3 p){    
    return fract(sin(dot(p,vec3(127.1,311.7,231.4)))*437.53)*2.0-1.0;
}
float r2(vec3 p){    
    return fract(sin(dot(p,vec3(491.4,134.1,712.4)))*831.23)*2.0-1.0;
}
float r3(vec3 p){    
    return fract(sin(dot(p,vec3(323.3,941.3,531.2)))*612.31)*2.0-1.0;
}
float n(float x,float y,float z){
    vec3 p=vec3(x,y,z);
    vec3 i=floor(p);
    vec3 j=fract(p);
    vec3 f1=vec3(r1(i),r2(i),r3(i));
    vec3 f2=vec3(r1(i+vec3(1.0,0.0,0.0)),r2(i+vec3(1.0,0.0,0.0)),r3(i+vec3(1.0,0.0,0.0)));
    vec3 f3=vec3(r1(i+vec3(0.0,1.0,0.0)),r2(i+vec3(0.0,1.0,0.0)),r3(i+vec3(0.0,1.0,0.0)));
    vec3 f4=vec3(r1(i+vec3(1.0,1.0,0.0)),r2(i+vec3(1.0,1.0,0.0)),r3(i+vec3(1.0,1.0,0.0)));
    vec3 f5=vec3(r1(i+vec3(0.0,0.0,1.0)),r2(i+vec3(0.0,0.0,1.0)),r3(i+vec3(0.0,0.0,1.0)));
    vec3 f6=vec3(r1(i+vec3(1.0,0.0,1.0)),r2(i+vec3(1.0,0.0,1.0)),r3(i+vec3(1.0,0.0,1.0)));
    vec3 f7=vec3(r1(i+vec3(0.0,1.0,1.0)),r2(i+vec3(0.0,1.0,1.0)),r3(i+vec3(0.0,1.0,1.0)));
    vec3 f8=vec3(r1(i+vec3(1.0,1.0,1.0)),r2(i+vec3(1.0,1.0,1.0)),r3(i+vec3(1.0,1.0,1.0)));
    vec3 k1=p-i;
    vec3 k2=p-(i+vec3(1.0,0.0,0.0));
    vec3 k3=p-(i+vec3(0.0,1.0,0.0));
    vec3 k4=p-(i+vec3(1.0,1.0,0.0));
    vec3 k5=p-(i+vec3(0.0,0.0,1.0));
    vec3 k6=p-(i+vec3(1.0,0.0,1.0));
    vec3 k7=p-(i+vec3(0.0,1.0,1.0));
    vec3 k8=p-(i+vec3(1.0,1.0,1.0));
    j=j*j*(3.0-2.0*j);
    return (((dot(f1,k1)*(1.0-j.x)+dot(f2,k2)*j.x)*(1.0-j.y)+(dot(f3,k3)*(1.0-j.x)+dot(f4,k4)*j.x)*j.y)*(1.0-j.z)+((dot(f5,k5)*(1.0-j.x)+dot(f6,k6)*j.x)*(1.0-j.y)+(dot(f7,k7)*(1.0-j.x)+dot(f8,k8)*j.x)*j.y)*j.z)*0.5+0.5;    
}

float o(float x,float y,float z){
    float value=0.0;
    float maxValue=0.0;
    for(float i=0.0;i<4.0;i++){
        value+=pow(0.5,i)*n(x*pow(2.0,i),y*pow(2.0,i),z);
        maxValue+=pow(0.5,i);
    }
    return value/maxValue;
}

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0-resolution) / min(resolution.x, resolution.y);
    vec2 uv = vTextureCoord;
    vec3 nScale=vec3(5.0,0.1,time*0.4);
    float nx=uv.x*nScale.x;
    float ny=uv.y+nScale.y;
    float nz=nScale.z;
    float n = o(nx,ny,nz);
    uv.y+=0.6*n-0.3;
    float rdiff=0.003*sin(time);
    float gdiff=-0.002*cos(time/3.0);
    float bdiff=-0.002*sin(time*2.0);
    vec3 color=vec3(1.0);
    color.r=texture2D(tex,uv+vec2(rdiff,0.003*sin(time/2.0))).r;
    color.g=texture2D(tex,uv+vec2(gdiff,-0.001*cos(time))).g;
    color.b=texture2D(tex,uv+vec2(bdiff,0.002*sin(time*3.0))).b;        
    gl_FragColor = vec4(color,1.0);    
}