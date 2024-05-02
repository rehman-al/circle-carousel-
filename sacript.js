console.clear();

gsap.registerPlugin(Draggable, InertiaPlugin, MotionPathPlugin);
const boxes = gsap.utils.toArray(".box");

gsap.set(boxes, {
  motionPath: {
    path: "#myPath",
    align: "#myPath",
    alignOrigin: [0.5, 0.5],
    start: -0.25,
    end: (i) => i / boxes.length - 0.25,
    autoRotate: true
  }
});

Draggable.create(".container", {
  type: "rotation",
  inertia: true,
  snap: (endVal) => gsap.utils.snap(360 / boxes.length, endVal)
});
