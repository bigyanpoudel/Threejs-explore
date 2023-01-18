import { useEffect } from "react";
import * as THREE from "three";

export const useBasicScene = () => {
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
    mesh.position.x = 1;
    mesh.position.z = 0.6;
    mesh.position.y = 0.6;

    mesh.position.set(0.1, 1, 0.2);
    //add created mesh or object to the scene
    scene.add(mesh);

    //reduce the distance of the object to initial i.e 1
    // mesh.position.normalize();

    //scale of the object
    mesh.scale.z = 2;

    //ROTATION

    //Reorder the rotation in axis
    //first reorder and change axis
    mesh.rotation.reorder("YXZ");

    mesh.rotation.x = Math.PI * 0.25;
    mesh.rotation.y = Math.PI * 0.25;

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

    //LOOKAT
    //focusing the camera at the particular co-ordinate
    camera.lookAt(mesh.position);

    //Axis helper
    const axisHelper = new THREE.AxesHelper(5);
    scene.add(axisHelper);

    /**
     * Provide distance between camera and object
     */
    const distance = mesh.position.distanceTo(camera.position);
    //distance between central point and the object
    const distance2 = mesh.position.length();

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
    createAScrene();
  }, []);
};
