precision mediump float;
uniform float iTime;
uniform vec2 iResolution;
#define PI 3.141592

const vec3 cPos = vec3(0.0, 0.0, -2.0);
const vec3 cDir = vec3(0.0, 0.0, 1.0);
const vec3 cUp = vec3(0.0, 1.0, 0.0);
const float depth = 1.0;
const vec3 lPos = vec3(10.0, 10.0, -10.0);

vec3 rotate(vec3 p, float angle, vec3 axis) {
  vec3 a = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float r = 1.0 - c;
  mat3 m =
      mat3(a.x * a.x * r + c, a.y * a.x * r + a.z * s, a.z * a.x * r - a.y * s,
           a.x * a.y * r - a.z * s, a.y * a.y * r + c, a.z * a.y * r + a.x * s,
           a.x * a.z * r + a.y * s, a.y * a.z * r - a.x * s, a.z * a.z * r + c);
  return m * p;
}

float sphere(vec3 p, float r) { return length(p) - r; }

float fractal(vec3 p) {
  float result = 100.0;
  for (float i = 0.0; i < 10.0; i++) {
    p = rotate(p, iTime, vec3(0.2, 0.3, 0.5));
    result = min(result, sphere(p, exp(-i / 1.2)));
    result =
        max(result, -sphere(p, exp(-i / 1.2 * abs(2.0 * sin(iTime / 2.0)))));
    p = abs(p) - exp(-i / 1.2) / 2.0;
  }
  return result;
}

float distFunc(vec3 p) { return fractal(p); }

vec3 getNormal(vec3 p) {
  float d = 0.001;
  return normalize(
      vec3(distFunc(p + vec3(d, 0.0, 0.0)) - distFunc(p + vec3(-d, 0.0, 0.0)),
           distFunc(p + vec3(0.0, d, 0.0)) - distFunc(p + vec3(0.0, -d, 0.0)),
           distFunc(p + vec3(0.0, 0.0, d)) - distFunc(p + vec3(0.0, 0.0, -d))));
}

vec3 rayMarching(vec3 color, vec2 p) {
  vec3 cSide = cross(cDir, cUp);
  vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir * depth);
  vec3 rPos = cPos;
  float rLen = 0.0;
  for (float i = 0.0; i < 22.0; i++) {
    float distance = distFunc(rPos);
    color = clamp(vec3(0.8, 0.2, 0.6) / distance, 0.0, 1.0);
    if (distance < 0.01) {
      vec3 normal = getNormal(rPos);
      float diffuse = clamp(dot(normal, -lPos), 0.0, 1.0) + 0.03;
      color = (color / diffuse / 50.0);
      break;
    }
    rLen += distance;
    rPos = cPos + rLen * ray;
  }
  return color;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 p =
      (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
  vec3 color = rayMarching(vec3(0.0), p);
  fragColor = vec4(color, 1.0);
}