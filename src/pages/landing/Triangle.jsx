import "../../assets/triangle.css"
import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getFirstIntersection } from "../../utils/raycastHelpers";
import { redirect } from "../../utils/helpers"

const redirects = {
    "001": "other/cas-handbook.pdf",
    "002": "other/ee.pdf",
    "003": "other/tok.pdf",
};

const getIDFromMeshName = (name) => {
    let id = "";
    if (name.length == 7) {
        // TextXXX
        id = name.substring(4, 7);
    } else {
        // CircleXXX
        id = name.substring(6, 9)
    }

    return id;
};

const Triangle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const raycaster = new THREE.Raycaster();
        const mixer = new THREE.AnimationMixer();

        camera.position.setZ(2);
        camera.position.setY(1.4);

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

        const light = new THREE.AmbientLight(0x404040, 60);
        scene.add(light);

        let loader = new GLTFLoader();
        loader.load("triangle.glb", (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (err) => {
            console.log(err)
        });

        let currentAnims = {};
        let returningAnims = [];

        const tweenReturnedToStart = (id) => {
            delete currentAnims[id];

            const index = returningAnims.indexOf(id);
            if (index <= -1)
                return;

            returningAnims.splice(index, 1)
        };

        const cancelAllAnims = (except) => {
            const keys = Object.keys(currentAnims);
            keys.forEach((key) => {
                if (key == except)
                    return;

                if (returningAnims.includes(key))
                    return;

                const tweens = currentAnims[key];
                tweens.forEach((data) => {
                    // reverse tween
                    const pos = data.pos;
                    const tween = data.tween;

                    tween.to(pos, 700)
                         .easing(TWEEN.Easing.Bounce.InOut)
                         .start()
                         .onComplete(() => tweenReturnedToStart(key));
                });

                returningAnims.push(key)
            });
        };

        const onMouseMove = (e) => {
            const intersection = getFirstIntersection(e, canvasRef.current, camera, raycaster, scene);
            if (intersection == undefined) {
                cancelAllAnims();
                return;
            }

            const hitObj = intersection.object;
            const name = hitObj.name;
            const id = getIDFromMeshName(name);

            const circle = scene.getObjectByName(`Circle${id}`);
            const text = scene.getObjectByName(`Text${id}`);

            const tweenObj = (obj) => {
                const pos = obj.position;
                const posCoeff = 1.6;
                const newPos = new THREE.Vector3(pos.x * posCoeff, pos.y, pos.z * posCoeff);

                let tween = new TWEEN.Tween(obj.position)
                    .to(newPos, 700)
                    .easing(TWEEN.Easing.Bounce.InOut)
                    .start();

                return tween;
            };

            if (currentAnims[id] != undefined)
                return;

            cancelAllAnims(id);

            const startCircle = new THREE.Vector3(circle.position.x, circle.position.y, circle.position.z);
            const startText = new THREE.Vector3(text.position.x, text.position.y, text.position.z);

            const circleTween = tweenObj(circle);
            const textTween = tweenObj(text);

            currentAnims[id] = [
                { pos: startCircle, tween: circleTween },
                { pos: startText, tween: textTween }
            ];
        };

        const onClick = (e) => {
            const intersection = getFirstIntersection(e, canvasRef.current, camera, raycaster, scene);
            if (intersection == undefined)
                return;

            const object = intersection.object;
            const name = object.name;
            const id = getIDFromMeshName(name);

            const url = redirects[id];
            redirect(url);
        };

        const onResize = () => {
            const width = window.innerWidth;

            // note: camera aspect always stays at 1

            let size = 600;
            if (width <= 600) {
                // smaller width, still on right
                size = 0.9 * width; // 90vw
            } else if (width <= 1400) {
                // mobile/tablet, on bottom
                size = 0.38 * width; // 38vw
            }

            renderer.setSize(size, size);
        };

        document.addEventListener("mousemove", onMouseMove, false);
        document.addEventListener("click", onClick);
        window.addEventListener("resize", onResize, false);

        // initial scale check
        onResize();

        const animate = () => {
            requestAnimationFrame(animate);
            TWEEN.update();
            renderer.render(scene, camera);
            controls.update();
        };

        animate();
    }, []);

    return (
        <canvas className="triangle-canvas" ref={canvasRef}></canvas>
    );
};

export default Triangle;