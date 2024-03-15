//for Array1.html
function arrayOperation1() {
    let inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    let outputArray = inputArray.map(num => num * 2);
 
    document.getElementById('outputArray').value = outputArray.join(',');
}
//for Array2.html
function arrayOperation2() {
    let inputArray2 = document.getElementById('inputArray2').value.split(',').map(Number);
    let outputArray2 = inputArray2.filter(num => num !== 0).concat(inputArray2.filter(num => num === 0));

    document.getElementById('outputArray2').value = outputArray2.join(',');
}