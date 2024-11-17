function changeValue(type, delta) {
    const cpuElement = document.getElementById('cpu');
    const ramElement = document.getElementById('ram');
    const diskElement = document.getElementById('disk');

    let cpu = parseInt(cpuElement.innerText);
    let ram = parseInt(ramElement.innerText);
    let disk = parseInt(diskElement.innerText);

    if (type === 'cpu') {

        if (cpu + delta >= 0 && cpu + delta <= 10) {
            cpuElement.innerText = cpu + delta;
        }
    } else if (type === 'ram') {
        if (ram + delta >= 0 && ram + delta <= 30) {
            ramElement.innerText = ram + delta;
        }
    } else if (type === 'disk') {
        if (disk + delta >= 0 && disk + delta <= 60) {
            diskElement.innerText = disk + delta;
        }
    }

    calculateTotal();
}

function calculateTotal() {
    const cpu = parseInt(document.getElementById('cpu').innerText);
    const ram = parseInt(document.getElementById('ram').innerText);
    const disk = parseInt(document.getElementById('disk').innerText);

    const total = (cpu * 10) + (ram * 5) + (disk * 1);
    document.getElementById('total').innerText = total;
}

calculateTotal();
