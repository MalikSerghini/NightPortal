uniform float uTime;
uniform float uRadius;

uniform float uPixelRatio;
uniform float uSize;

attribute float aScale;

void main() {

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(uTime + modelPosition.x * 10.0) * aScale * 0.5;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = uSize * aScale * uPixelRatio;
  gl_PointSize *= (1.0 / - viewPosition.z);

}