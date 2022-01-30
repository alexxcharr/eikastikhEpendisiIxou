a.show()
a.setBins(6)
a.setSmooth(0.95)



shape(()=>a.fft[1]+1, ()=>Math.sin(time) + 0.2,.01)
.repeat(5,3, ()=>a.fft[0]*2, ()=>a.fft[1]*2)
.scrollY(.5,0.1)
.layer(
  src(o1)
  .mask(o0)
  .luma(.01, .1)
  .invert(.2)
)
.modulate(o1,.02)
.diff(
  shape(3, 0.3,  0.1)
  .rotate(()=>Math.sin(time))
  .scrollY(0.1)
  .color(.2, 0.5, 0.9)
  .modulate(
    osc(2)
    .modulateScale(osc(100, 0.1))
    .modulateScale(voronoi(100, 0.1).blend(voronoi(()=>a.fft[5] *100, 0.1)))
    .invert(()=>a.fft[4]*80)))
.blend(o0)
.out(o0)

//osc(40, 0.09, 0.9)
//.color(.9,0,5)
//.modulate(osc(10).rotate(1, 0.5))
//.rotate(1, 0.2)
//.out(o1)

//render(o1)
