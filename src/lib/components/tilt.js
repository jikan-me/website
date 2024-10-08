//https://svelte.dev/repl/7b23ad9d2693424482cd411b0378b55b?version=3.24.1
function getSettings(settings = {}) {
    return { scale: 1, max: 5, reverse: false, ...settings };
}

const TRANSITION_MS = 300;

export default function tilt(node, settingsObj) {
    const { width, height, left, top } = node.getBoundingClientRect();
    let settings = getSettings(settingsObj);
    let reverse = settings.reverse ? -1 : 1;

    function onMouseMove(e) {
        const percX = (e.clientX - left) / width;
        const percY = (e.clientY - top) / height;

        const { max, scale } = settings;
        const twiceMax = max * 2;
        const tiltX = max - percX * twiceMax;
        const tiltY = percY * twiceMax - max;

        node.style.transform = `perspective(${1000}px) `+
            `rotateX(${reverse * tiltY}deg) ` +
            `rotateY(${reverse * tiltX}deg) ` +
            `scale3d(${Array(3).fill(scale).join(', ')})`;
    }

    let transitionId;
    function smoothTransition() {
        clearTimeout(transitionId);
        node.style.willChange = 'transform';
        node.style.transition = `${TRANSITION_MS}ms`;
        transitionId = setTimeout(() => node.style.transition = '0s', TRANSITION_MS);
    }

    function onMouseLeave() {
        smoothTransition();
        node.style.transform = `perspective(${1000}px) `+
            `rotateX(0deg) ` +
            `rotateY(0deg) ` +
            `scale3d(1, 1, 1)`;
    }

    function onMouseEnter() {
        smoothTransition();
        node.style.willChange = "transform";
    }

    node.addEventListener('mousemove', onMouseMove);
    node.addEventListener('mouseleave', onMouseLeave);
    node.addEventListener('mouseenter', onMouseEnter);

    return {
        destroy() {
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseleave', onMouseLeave);
            node.removeEventListener('mouseleave', onMouseEnter);
        },
        update(settingsObj) {
            settings = getSettings(settingsObj);
            reverse = settings.reverse ? -1 : 1;
        }
    }
}