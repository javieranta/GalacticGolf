import{S as c,C as l,P as m,W as p,B as u,M as b,a as w}from"./index-DJJeNqLQ.js";function g(){console.log("=== STANDALONE THREE.JS TEST ===");const o=new c;o.background=new l(1118498);const a=new m(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5;const t=new p;t.setSize(window.innerWidth,window.innerHeight),document.body.innerHTML="",document.body.appendChild(t.domElement);const s=new u(1,1,1),d=new b({color:65280}),e=new w(s,d);o.add(e);const i=document.createElement("div");i.style.cssText="position:fixed;top:10px;left:10px;background:black;color:lime;padding:20px;z-index:9999;font-size:18px;font-family:monospace;",document.body.appendChild(i);let n=0;function r(){n++,requestAnimationFrame(r),e.rotation.x+=.01,e.rotation.y+=.01,e.position.x=Math.sin(n*.02)*2,e.position.y=Math.cos(n*.02)*2,t.render(o,a),i.innerHTML=`
      <strong>STANDALONE TEST</strong><br>
      Frame: ${n}<br>
      Cube X: ${e.position.x.toFixed(2)}<br>
      Cube Y: ${e.position.y.toFixed(2)}<br>
      Rotation: ${(e.rotation.y*180/Math.PI).toFixed(0)}°
    `}r(),console.log("Standalone test started - you should see a green rotating cube")}export{g as runStandaloneTest};
//# sourceMappingURL=test-standalone-B8QmUxxM.js.map
