function setup() {
  // Set onclick handlers to match input unit (opposite of conversion target)
  document.getElementById("fahrenheit").onclick = function () {
    setUnits("C"); // Input is Celsius when converting to Fahrenheit
  };
  document.getElementById("celsius").onclick = function () {
    setUnits("F"); // Input is Fahrenheit when converting to Celsius
  };
  // Set default label to °F (input is Fahrenheit, default is convert to Celsius)
  setUnits("F");
}

function setUnits(unit) {
  var label = document.getElementById("label");
  label.innerHTML = "&deg; " + unit;
  // Refresh jQuery Mobile controlgroup to ensure UI updates
  $('[data-role="controlgroup"]').controlgroup('refresh');
}

function convert() {
  var celsiusButton = document.getElementById("celsius");
  var temperature = parseFloat(document.getElementById("temperature").value);

  if (isNaN(temperature)) {
    document.getElementById("answer").innerHTML = "Please enter a valid number";
    return;
  }

  if (celsiusButton.checked) {
    convertToCelsius(temperature);
  } else {
    convertToFahrenheit(temperature);
  }
}

function convertToCelsius(temperatureInFahrenheit) {
  var celsiusTemperature = (temperatureInFahrenheit - 32) * 5 / 9;
  document.getElementById("answer").innerHTML =
    temperatureInFahrenheit +
    "&deg; Fahrenheit converts to " +
    celsiusTemperature.toFixed(1) +
    "&deg; Celsius";
}

function convertToFahrenheit(temperatureInCelsius) {
  var fahrenheitTemperature = temperatureInCelsius * 9 / 5 + 32;
  document.getElementById("answer").innerHTML =
    temperatureInCelsius +
    "&deg; Celsius converts to " +
    fahrenheitTemperature.toFixed(1) +
    "&deg; Fahrenheit";
}
