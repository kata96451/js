function buttonClic(){
    const officalname = prompt('Каково "официальное" название Javascript?', '');

    if (officalname === 'EcmaScript'){
        alert('Верно!');
    }
    else{
        alert('Не знаете? "EcmaScript"!');
    }
}
function buttonClic2() {
    let number = prompt('Введите любое число', '');

    if (number > 0){
        alert('1');
    }

    else if(number < 0){
        alert('-1');
    }
    else if(number == 0){
        alert('0');
    }
}
function loginClic(){
   const login = prompt('Кто пришел?', '');

   if (login === 'Admin'){
       const password = prompt('Пароль?', '');
       if (password === 'Черный Властелин'){
           alert('Добро пожаловать!');
       }
       else if(password == null){
           alert('Вход отменен');
       }
       else{
           alert('Пароль неверен');
       }
   }
   else if (login == null){
       alert('Вход отменен');
   }
   else{
       alert('Я вас не знаю');
   }
}