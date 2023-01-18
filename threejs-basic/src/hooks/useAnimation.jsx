import React from "react";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
export const useAnimation = () => {
  const createAScrene = () => {
    console.log("hello", THREE);
    //scene where we will render every object
    const scene = new THREE.Scene();
    // creading the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    //creating the material for the geometry object that we just created
    const materail = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    //creating the mesh  is a object that is combitionation of geometry(shape) and material(looks for shape)
    const mesh = new THREE.Mesh(geometry, materail);
    scene.add(mesh);

    const sizes = {
      width: 800,
      height: 600,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);
    //Get canvas element
    const canvas = document.querySelector(".webgl");
    //RENDERER
    // render sence from the point of the camera added to the scence
    //result canvas
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    //animate with gsap
    gsap.to(mesh.position, {
      duration: 1,
      delay: 1,
      x: 2,
    });

    /**
     * Animate
     */
    // let time = Date.now();
    const clock = new THREE.Clock();

    const tick = () => {
      // Time
      //   const currentTime = Date.now();
      //   const deltaTime = currentTime - time;
      //   time = currentTime;

      //for constant animation indipent of FPS
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      //   mesh.rotation.y += 0.0025 * elapsedTime;

      mesh.position.y = Math.sin(elapsedTime);
      mesh.position.x = Math.cos(elapsedTime);
      camera.lookAt(mesh.position);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  };
  useEffect(() => {
    createAScrene();
  }, []);
};
