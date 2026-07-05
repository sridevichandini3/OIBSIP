function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    let c, f, k;

    document.getElementById("error").innerHTML = "";

    // Check if input is empty
    if (isNaN(temp)) {
        document.getElementById("error").innerHTML = "⚠ Please enter a valid temperature.";
        return;
    }

    // Convert to Celsius first
    if (unit === "c") {
        c = temp;
        f = (c * 9 / 5) + 32;
        k = c + 273.15;
    }

    else if (unit === "f") {
        c = (temp - 32) * 5 / 9;
        f = temp;
        k = c + 273.15;
    }

    else if (unit === "k") {
        c = temp - 273.15;
        f = (c * 9 / 5) + 32;
        k = temp;
    }

    // Absolute zero validation
    if (c < -273.15 || k < 0 || f < -459.67) {
        document.getElementById("error").innerHTML =
        "❌ Temperature cannot be below absolute zero.";
        return;
    }

    // Display results
    document.getElementById("celsius").innerHTML =
    c.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
    f.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
    k.toFixed(2) + " K";

}