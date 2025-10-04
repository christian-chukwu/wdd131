const temperature = 45; // °F
const windSpeed = 5; // mph

function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const windChillElement = document.getElementById("windchill");
  if (temperature <= 50 && windSpeed > 3) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayWindChill();

  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;
});
