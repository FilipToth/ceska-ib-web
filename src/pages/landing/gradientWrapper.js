import { Gradient } from "assets/gradient";

const initGradient = (canvasId) => {
    const gradient = new Gradient();
    gradient.initGradient(canvasId);
};

export { initGradient };