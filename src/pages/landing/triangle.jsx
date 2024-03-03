import "../../assets/triangle.css"
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Triangle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

        const distanceFromOrigin = 2.2;

        const controls = new OrbitControls(camera, canvasRef.current);
        controls.target = new THREE.Vector3(0, 0.7, 0);
        controls.maxPolarAngle =  Math.PI/2;
        controls.autoRotate = true;
        controls.maxDistance = distanceFromOrigin;
        controls.minDistance = distanceFromOrigin;
        controls.zoomSpeed = 0;
        controls.rotateSpeed = 0.4;
        controls.autoRotate = true;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true
        });

        renderer.setClearColor(0xF9F8F8);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(600, 600);

        camera.position.setZ(2);
        camera.position.setY(0.7);

        const light = new THREE.AmbientLight(0x404040, 60);
        scene.add(light);

        let loader = new GLTFLoader();
        loader.load("src/assets/triangle.glb", (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (err) => {
            console.log(err)
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };

        animate();
    }, []);

    return (
        <canvas id="cube-view" className="cube-canvas" ref={canvasRef}></canvas>
    );
};

export default Triangle;