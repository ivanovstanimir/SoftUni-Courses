function attachEventsListeners() {
    let buttonElement = document.getElementById('convert');
    buttonElement.addEventListener('click', onclick);

    let metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onclick(event) {
        let fromValueEl = document.getElementById('inputUnits').value;
        let toValueEl = document.getElementById('outputUnits').value;

        let inputUnitsEl = Number(document.getElementById('inputDistance').value);
        let outputDistanceEl = document.getElementById('outputDistance');
        let valueInMetters = inputUnitsEl * metricUnits[fromValueEl];
        let convertedValue = valueInMetters / metricUnits[toValueEl];
        outputDistanceEl.value = convertedValue;
    }
}