
function showNumber() {
    var i=0;

    while (i<3){
        alert('number' + i + '!')
        i++;
        console.log(i);
    }
}

function writeNumber() {
    do {
        let x = prompt('Введите число больше 100',);
        if (x == null) {
            break;
        }
    } while (x <= 100  );

}