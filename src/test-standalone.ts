/**
 * STANDALONE THREE.JS TEST
 *
 * This file creates a minimal Three.js scene to test if basic rendering works.
 * Import this in main.tsx temporarily to run the test.
 */

import * as THREE from 'three';

export function runStandaloneTest() {
  console.log('=== STANDALONE THREE.JS TEST ===');

  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111122);

  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.innerHTML = ''; // Clear everything
  document.body.appendChild(renderer.domElement);

  // Create a simple cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Create debug display
  const debugDiv = document.createElement('div');
  debugDiv.style.cssText = 'position:fixed;top:10px;left:10px;background:black;color:lime;padding:20px;z-index:9999;font-size:18px;font-family:monospace;';
  document.body.appendChild(debugDiv);

  // Animation loop
  let frame = 0;
  function animate() {
    frame++;
    requestAnimationFrame(animate);

    // Rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Move cube in a circle
    cube.position.x = Math.sin(frame * 0.02) * 2;
    cube.position.y = Math.cos(frame * 0.02) * 2;

    renderer.render(scene, camera);

    debugDiv.innerHTML = `
      <strong>STANDALONE TEST</strong><br>
      Frame: ${frame}<br>
      Cube X: ${cube.position.x.toFixed(2)}<br>
      Cube Y: ${cube.position.y.toFixed(2)}<br>
      Rotation: ${(cube.rotation.y * 180 / Math.PI).toFixed(0)}°
    `;
  }

  animate();

  console.log('Standalone test started - you should see a green rotating cube');
}
