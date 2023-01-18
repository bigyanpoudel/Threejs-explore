import { useEffect } from "react";
import * as THREE from "three";
export const useGroup = () => {
  const creatingGroup = () => {
    //scene where we will render every object
    const scene = new THREE.Scene();

    const group = new THREE.Group();
    group.position.y = 0.5;
    group.scale.y = 1;
    group.rotation.y = Math.PI * 0.15;
    scene.add(group);

    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xfffff })
    );
    group.add(cube1);

    const cube2 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    cube2.position.x = -2;
    group.add(cube2);

    const cube3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00fff0 })
    );
    cube3.position.x = 2;
    group.add(cube3);

    const sizes = {
      width: 800,
      height: 600,
    };
    //Camera
    /**
     * first params fov(field of view ) in degree
     * second params aspect ratio
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    //Axis helper
    const axisHelper = new THREE.AxesHelper(5);
    scene.add(axisHelper);

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
  };
  useEffect(() => {
    creatingGroup();
  }, []);
};
