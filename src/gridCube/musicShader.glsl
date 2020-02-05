#define A 0.2
float kick(float time,float a) {
    return sin(6.283*a*time-1.0*exp(-100.0*time))*exp(-time*10.6);
}
float sequence(int s,float time){
  float n =mod(time,A);
  for(int i=0;i<16;i++){
    if((s>>(int(time/A)-i)%16&1)==1)break;
    n+=A;
  }
  return n;
}
vec2 mainSound( float time ){     
    float t=time-mod(time,0.2);   
 	  return vec2(
       0.5*kick(sequence(0xAAAA,time),100.0)+
       0.5*kick(sequence(0x5555,time),1000.0)
     );
}