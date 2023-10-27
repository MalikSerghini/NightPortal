void main() {

  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = 0.05 / distanceToCenter - 0.1;

  gl_FragColor = vec4(1,0.6313725490196078,0.1568627450980392, strength);
  
}