var c, ctx, w, h;
var r0, dr, cx, cy, i, j, incr;
var lightA, lightB, darkA, darkB, dc;
var resizeTimer;

function init() {
  c=document.getElementById("gradient");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  ctx=c.getContext("2d");
  w = c.width;
  h = c.height;
  r0 = w * 0.6;
  dr = r0 * 0.1;
  cx = w/2;
  cy = h/2;
  lightA = "darkturquoise";
  darkA = "indigo";
  lightB = "mediumseagreen";
  darkB = "midnightblue";
  dc = 0;
  i = 0;
  j = Math.PI;
  incr = Math.PI / 2000;

  tick();
}

function resize() {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout( function() {
    resizeTimer = null;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx=c.getContext("2d");
    w = c.width;
    h = c.height;
    r0 = w * 0.6;
    cx = w/2;
    cy = h/2;
  }, 100);
}

function setGrad(x1, y1, x2, y2, dc) {
  var grd=ctx.createLinearGradient(x1,y1,x2,y2);
  grd.addColorStop(0,lightA);
  grd.addColorStop(1,darkA);
  ctx.fillStyle=grd;
  ctx.fillRect(0,0,w,h);
}

function rotate(th, isX) {
  var r = r0 + dr * Math.sin(i * 10);
  return cx + r * (isX ? Math.cos(th) : Math.sin(th));
}

function tick() {
  var x1 = rotate(i, true);
  var y1 = rotate(i, false);
  var x2 = rotate(j, true);
  var y2 = rotate(j, false);

  setGrad(x1,y1,x2,y2);

  i += incr;
  j += incr;
  dc += incr;

  requestAnimationFrame(tick);
}
