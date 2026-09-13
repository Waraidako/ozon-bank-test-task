function addStylesheet() {
    if (document.querySelector('#progress-styles')) return;

    const stylesheet = document.createElement("link");
    stylesheet.id = "progress-styles";
    stylesheet.rel = "stylesheet";
    stylesheet.href = new URL("./progress.css", import.meta.url).href;
    document.head.appendChild(stylesheet);
}

export function setupProgress(element) {
    addStylesheet();

    element.classList.add("progress");

    element.innerHTML = `
    <svg class="progress-ring" width="120" height="120" style="display: block">
        <circle 
            class="progress-ring-bg" 
            stroke="#eef3f6" 
            stroke-width="10" 
            fill="transparent" 
            r="52" 
            cx="60" 
            cy="60"
        />
        <circle 
            class="progress-ring-circle" 
            stroke="#005dff" 
            stroke-width="10"
            stroke-dashoffset="100"
            stroke-dasharray="100" 
            fill="transparent" 
            r="52" 
            cx="60" 
            cy="60" 
            pathLength="100"
            transform-origin="center"
            transform="rotate(-90)"
            />
    </svg>
    `
}

export function setProgressValue(element, value) {
    let normalizedValue = Number(value);
    if (Number.isNaN(normalizedValue)) normalizedValue = 0;
    if (normalizedValue > 100) normalizedValue = 100;
    if (normalizedValue < 0) normalizedValue = 0;

    const circle = element.querySelector(".progress-ring-circle");
    circle.style.strokeDashoffset = 100 - normalizedValue;
}

export function setProgressAnimated(element, isAnimated) {
    element.classList.toggle("animated", isAnimated);
}

export function setProgressHidden(element, isHidden) {
    element.classList.toggle("hidden", isHidden);
}