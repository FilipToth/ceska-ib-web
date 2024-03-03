import * as THREE from 'three';

const getMouseVector2 = (event, canvas) => {
    let mousePointer = new THREE.Vector2();

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const x = canvas.offsetLeft;
    const y = canvas.offsetTop;

    // check if mouse is within canvas
    if (event.clientX < x || event.clientY < y ||
        event.clientX > x + width || event.clientY > y + height)
    {
        return undefined;
    }

    const relX = event.clientX - x;
    const relY = event.clientY - y;

    mousePointer.x = (relX / width) * 2 - 1;
	mousePointer.y = -(relY / height) * 2 + 1;

    return mousePointer;
};

const checkRayIntersections = (mousePointer, camera, raycaster, scene, getFirstValue) => {
    raycaster.setFromCamera(mousePointer, camera);

    let intersections = raycaster.intersectObjects(scene.children, true);
    intersections = getFirstValue ? intersections[0] : intersections;

    return intersections;
};

export { getMouseVector2, checkRayIntersections };