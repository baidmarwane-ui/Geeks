const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radius = Number(radiusInput.value);

    if (radiusInput.value.trim() === "" ||
        !Number.isFinite(radius) ||
        radius < 0) {
        alert("Please enter a valid, non-negative radius.");
        return;
    }

    // Volume of a sphere: V = (4/3) * pi * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
});
