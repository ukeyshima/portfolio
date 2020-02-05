#define PI 3.141592
#define ROW_SIZE 2.0
#define GRID_SIZE 4.0

vec3 cPos = vec3(0.0, 0.0, -20.0);
const vec3 cDir = vec3(0.0, 0.0, 1.0);
const vec3 cUp = vec3(0.0, 1.0, 0.0);
const float depth = 1.0;
const vec3 lPos = vec3(10.0,10.0,-10.0);

float random1(vec3 p){
    return fract(sin(dot(p.xyz,vec3(12.9898,46.2346,78.233)))*43758.5453123);
}
float random2(vec3 p){
    return fract(sin(dot(p.xyz,vec3(73.6134,21.6712,51.5781)))*51941.3781931);
}
float random3(vec3 p){
    return fract(sin(dot(p.xyz,vec3(39.1831,85.3813,16.2981)))*39183.4971731);
}
float perlinNoise(vec3 p){    
  float t=iTime-mod(iTime,0.4);
    p.z=p.z*t;
    vec3 i1=floor(p);    
    vec3 i2=i1+vec3(1.0,0.0,0.0);
    vec3 i3=i1+vec3(0.0,1.0,0.0);
    vec3 i4=i1+vec3(1.0,1.0,0.0);
    vec3 i5=i1+vec3(0.0,0.0,1.0);
    vec3 i6=i1+vec3(1.0,0.0,1.0);
    vec3 i7=i1+vec3(0.0,1.0,1.0);
    vec3 i8=i1+vec3(1.0,1.0,1.0);
    vec3 f1=vec3(random1(i1),random2(i1),random3(i1));
    vec3 f2=vec3(random1(i2),random2(i2),random3(i2));
    vec3 f3=vec3(random1(i3),random2(i3),random3(i3));
    vec3 f4=vec3(random1(i4),random2(i4),random3(i4));
    vec3 f5=vec3(random1(i5),random2(i5),random3(i5));
    vec3 f6=vec3(random1(i6),random2(i6),random3(i6));
    vec3 f7=vec3(random1(i7),random2(i7),random3(i7));
    vec3 f8=vec3(random1(i8),random2(i8),random3(i8));
    vec3 k1=p-i1;
    vec3 k2=p-i2;
    vec3 k3=p-i3;
    vec3 k4=p-i4;
    vec3 k5=p-i5;
    vec3 k6=p-i6;
    vec3 k7=p-i7;
    vec3 k8=p-i8;
    vec3 j=fract(p);
    j=j*j*(3.0-2.0*j);
	return mix(mix(mix(dot(f1,k1),dot(f2,k2),j.x),mix(dot(f3,k3),dot(f4,k4),j.x),j.y),mix(mix(dot(f5,k5),dot(f6,k6),j.x),mix(dot(f7,k7),dot(f8,k8),j.x),j.y),j.z)*0.5+0.5;
}

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

float boxDistFunc(vec3 p,vec3 b){
    return length(max(abs(p)-b,0.0));
}

float distFunc(vec3 p,vec3 ray) {  
  p=rotate(p,iTime,vec3(1.0,0.0,1.0));
  ray=rotate(ray,iTime,vec3(1.0,0.0,1.0));
  vec3 q=p;
  float dist=0.0;
  for(float i=0.0;i<ROW_SIZE+1.0;i++){    
    p=abs(p);
    p.xyz-=GRID_SIZE/2.0;
  }    
  dist=boxDistFunc(p, vec3(GRID_SIZE/2.0-0.3));   
  if((q.x<GRID_SIZE*ROW_SIZE) && (q.x>-GRID_SIZE*ROW_SIZE) && (q.y<GRID_SIZE*ROW_SIZE) && (q.y>-GRID_SIZE*ROW_SIZE) && (q.z<GRID_SIZE*ROW_SIZE) && (q.z>-GRID_SIZE*ROW_SIZE)){        
        vec3 c=mod(q,GRID_SIZE);
        float coordinatesRandom=perlinNoise(q-c);
        if(coordinatesRandom<0.5){
          dist = (min(min((GRID_SIZE*step(0.0,ray.x)-c.x)/ray.x,(GRID_SIZE*step(0.0,ray.y)-c.y)/ray.y),(GRID_SIZE*step(0.0,ray.z)-c.z)/ray.z)+0.001);
        }
    }
    return dist;
}

vec3 getNormal(vec3 p,vec3 ray) {
  float d = 0.001;
  return normalize(
      vec3(distFunc(p + vec3(d, 0.0, 0.0),ray) - distFunc(p + vec3(-d, 0.0, 0.0),ray),
           distFunc(p + vec3(0.0, d, 0.0),ray) - distFunc(p + vec3(0.0, -d, 0.0),ray),
           distFunc(p + vec3(0.0, 0.0, d),ray) - distFunc(p + vec3(0.0, 0.0, -d),ray)));
}

vec3 rayMarching(vec3 color, vec2 p) {  
  vec3 cSide = vec3(1.0,0.0,0.0);
  vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir * depth);
  vec3 rPos = cPos;    
  for (float i = 0.0; i < 30.0; i++) {           
    float distance = distFunc(rPos,ray);
    rPos += distance*ray;    
    if (distance < 0.11) {
      vec3 normal = getNormal(rPos,ray);
      vec3 lVec = normalize(lPos - rPos);      
      float diffuse = clamp(dot(normal, lVec), 0.1, 1.0) + 0.1;
      float specular = pow(clamp(dot(normal, lVec), 0.0, 1.0), 50.0);            
      vec3 rrp=rotate(rPos,iTime,vec3(1.0,0.0,1.0));
      vec3 srp=rrp-mod(rrp,GRID_SIZE);
      color=vec3(random1(srp),random2(srp),random3(srp))*1.9;
      color = (color * diffuse + specular);
      break;      
    }                          
    if(rPos.z>1000.0){
      break;
    }  
  }
  return color;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 p =
      (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
  vec3 color = rayMarching(vec3(0.1), p);
  fragColor = vec4(color, 1.0);
}