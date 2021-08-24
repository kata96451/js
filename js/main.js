// function hidText() {
//     const hiddenText = document.getElementById('text');
//     hiddenText.className = 'js--hidden';
// }
//
// document.getElementById('hider2').onclick = function () {
//     document.getElementById('text2').hidden = true;
// }
//
// const hid = document.getElementById('hider3');
// hid.onclick = function hidText3() {
//     const hiddenText = document.getElementById('text3');
//     hiddenText.className = 'js--hidden';
// }
//
// // const butt = document.querySelector('#hidden-button');
// //
// // function hidButton() {
// // butt.style.visibility = 'hidden';
// // }
// // butt.onclick = hidButton;
//
// const butt = document.querySelector('#hidden-button');
// butt.onclick = function (){
//     this.style.visibility= 'hidden'
// }



$(function () {
    $('#hider').click(function () {
        $('#text').hide();
        }
    )
});
$(function () {
    $('#hider2').click(function () {
       $('#text2').toggle('slow');
    })
});
$(function () {
    $('#shower').click(function () {
        $('#text').show();
    })
});

$(function () {
    $('#hidden-button').click(function () {
        $(this).hide();
    })
});

$(document).ready( function () {
    $('input').css({
        'background-color': '#20B2AA',
        'border': '2px solid #B0E0E6',
    })
})
$(document).ready(function () {
    $('#text, #text2').css({
        'font-size': '25px',
        'text-transform': 'uppercase'
    })
})