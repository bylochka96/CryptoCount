'use stric'

let calc = () => {
    const COMMISION = 0.002;

    let inputPoint = document.getElementById('inputPoint').value
    let spot = document.getElementById('spot').value
    let currentPoint = document.getElementById('currentPoint').value
    let profit = document.getElementById('profit')

    let fullCommission = currentPoint * spot * COMMISION + inputPoint * spot * COMMISION;
    result = (currentPoint - inputPoint) * spot - fullCommission;
    profit.value = `${Math.floor(result * 100) / 100}$`
}

document.getElementById('profit').onfocus = calc;