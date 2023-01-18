console.log("hello", THREE);
//scene where we will render every object
const scene = new THREE.Scene();

// creading the cube
const geometry = new THREE.BoxGeometry(2, 2, 2);

//creating the material for the geometry object that we just created
const materail = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//creating the mesh  is a object that is combitionation of geometry(shape) and material(looks for shape)
const mesh = new THREE.Mesh(geometry, materail);

//add created mesh or object to the scene
scene.add(mesh);

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
camera.position.z = 6;
scene.add(camera);

//Get canvas element
const canvas = document.querySelector(".webgl-canvas");
//RENDERER
// render sence from the point of the camera added to the scence
//result canvas
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
