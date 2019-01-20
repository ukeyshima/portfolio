precision mediump float;
uniform float iTime;
uniform vec2  iResolution;
#define PI 3.141592

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

float boxDistFunc(vec3 p,vec3 c,vec3 b){
    p=p-c;
    vec3 d=abs(p)-b;
    return length(max(d,0.0))+min(max(d.x,max(d.y,d.z)),0.0);
}

float doglegDistFunc(vec3 p,vec3 c,vec3 r,float d){
    p=p-c;
    p=rotate(p,d,r);
    return min(boxDistFunc(p,vec3(0.0,3.0,0.0),vec3(1.0,4.0,1.0)),boxDistFunc(p,vec3(3.0,0.0,0.0),vec3(4.0,1.0,1.0)));
}

vec3 getNormal(vec3 p,vec3 c,vec3 r,float d){
    float delta=0.001;
    return normalize(vec3(
        doglegDistFunc(p+vec3(delta,0.0,0.0),c,r,d)-doglegDistFunc(p+vec3(-delta,0.0,0.0),c,r,d),
        doglegDistFunc(p+vec3(0.0,delta,0.0),c,r,d)-doglegDistFunc(p+vec3(0.0,-delta,0.0),c,r,d),
        doglegDistFunc(p+vec3(0.0,0.0,delta),c,r,d)-doglegDistFunc(p+vec3(0.0,0.0,-delta),c,r,d)
        ));
}

const vec3 lightDir=vec3(1.0,-0.7,0.2);
const vec3 cDir=vec3(0.0,0.0,-1.0);
const vec3 cPos=vec3(0.0,0.0,8.0);    
const vec3 cUp=vec3(0.0,1.0,0.0);

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);            
    const vec3 cSide=cross(cDir,cUp);
    const float targetDepth=1.0;
    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*targetDepth);
   	float dist1=0.0;    
    float dist2=0.0;
    vec3 rPos1=cPos;
    vec3 rPos2=cPos;
    vec3 color1=vec3(0.0); 
    vec3 color2=vec3(0.0);
    float rLen1=0.0;
    float rLen2=0.0;      
    float maxLen=20.0;
    for(int i=0;i<50;i++){
    vec3 rPos=rotate(rPos1,iTime,vec3(0.0,1.0,0.0));
    float dist1=doglegDistFunc(rPos,vec3(-3.0,0.0,1.5),vec3(0.0,-1.0,1.0),PI/3.0);
    if(dist1<0.01){            
       vec3 normal=getNormal(rPos,vec3(-3.0,0.0,1.5),vec3(0.0,-1.0,1.0),PI/3.0);
       color1=vec3(1.0,0.0,0.0)*vec3(clamp(dot(lightDir,normal),0.5,1.0));
       break;
    }
        rLen1+=dist1;
        rPos1=cPos+rLen1*ray;
    }
    for(int i=0;i<50;i++){ 
    vec3 rPos=rotate(rPos2,iTime,vec3(0.0,1.0,0.0));       
    float dist2=doglegDistFunc(rPos,vec3(3.0,0.0,-1.5),vec3(0.0,0.5,1.0),-PI*0.8);  
    if(dist2<0.01){           
        vec3 normal=getNormal(rPos,vec3(3.0,0.0,-1.5),vec3(0.0,0.5,1.0),-PI*0.8);
        color2=vec3(0.0,0.0,1.0)*vec3(clamp(dot(lightDir,normal),0.5,1.0));
       break;
    }
        rLen2+=dist2;
       rPos2=cPos+rLen2*ray;
    }
    fragColor=vec4(rLen2>rLen1?(rLen2>maxLen?color1:color2):(rLen1>maxLen?color2:color1),1.0);
}