// directives/clickOutside.js

export default {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
            // Check if the click was outside the element
            if (!(el === event.target || el.contains(event.target))) {
                // Call the method provided in the v-click-outside directive
                binding.value(event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
};
