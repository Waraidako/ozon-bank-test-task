import { setupProgress, setProgressValue, setProgressAnimated, setProgressHidden } from './progress/progress.js';

document.querySelector('.app').innerHTML = `
<section class="demo-wrapper">
    <span class="demo-title">Progress</span>
    <div class="progress"></div>
    <div class="controls-wrapper">
        <div class="value-wrapper">
            <input
                class="value"
                type="number"
                value="50"
                min="0"
                max="100"
            />
            <span>Value</span>
        </div>
        <div class="animate-wrapper">
            <label class="switch animate-switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
            <span>Animate</span>
        </div>
        <div class="hidden-wrapper">
            <label class="switch hide-switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
            <span>Hide</span>
        </div>
    </div>
</section>
`

// Listeners to react to controls + progress setup and initial state
const progress = document.querySelector('.progress');
const valueInput = document.querySelector(".value");
const animateCheckbox = document.querySelector(".animate-switch");
const hideCheckbox = document.querySelector(".hide-switch");

setupProgress(progress);
setProgressValue(progress, Number(valueInput.value));

valueInput.addEventListener("change", (event) => {
    const valueString = event.target.value;
    let value = 0;
    if (valueString) {
        value = Number(event.target.value);
        if (value < 0) value = 0;
        if (value > 100) value = 100;
    }
    valueInput.value = value;
    setProgressValue(progress, value);
});

animateCheckbox.addEventListener("change", (event) => {
    setProgressAnimated(progress, event.target.checked);
});

hideCheckbox.addEventListener("change", (event) => {
    setProgressHidden(progress, event.target.checked);
});


// An initial check for orientation + listener to make the layout reactive to orientation change
const mediaQuery = window.matchMedia("(orientation: portrait)");

const checkMatch = (query) => {
    document.querySelectorAll(".demo-wrapper").forEach(el => {
        el.classList.toggle("landscape", !query.matches);
    })
}

checkMatch(mediaQuery);
function handleOrientationChange(e) {
    checkMatch(e);
}
mediaQuery.addEventListener("change", handleOrientationChange);