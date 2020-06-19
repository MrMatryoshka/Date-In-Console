var newDate = new Date();

var
hors = '';
min = '';
sec = '';
day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
mon = ['Января', ' Февраля' , 'Марта' , 'Апреля' , ' Мая' , 'Июня' ,'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря'];
year = newDate.getFullYear();
month = newDate.getMonth();
date = newDate.getDate();
dayse =newDate.getDay()
hourse = newDate.getHours();
minutes = newDate.getMinutes();
second = newDate.getSeconds();
i = 0;


switch (newDate.getHours() ) {
  case 1: hors += 'час'
  break;
  case 2: hors += 'часа'
  break;
  case 3: hors += 'часа'
  break;
  case 4: hors += 'часа'
  break;
  case 21: hors += 'час'
  break;
  case 22: hors += 'часа'
  break;
  case 23: hors += 'часа'
  break;
  case 24: hors += 'часа'
  break;
    default:
    hors += 'часов'
}

switch (newDate.getSeconds()) {
  case 1: sec += 'секунда'
  break;
  case 2: sec += 'секунды'
  break;
  case 3: sec += 'секунды'
  break;
  case 4: sec += 'секунды'
  break;
  case 21: sec += 'секунда'
  break;
  case 22: sec += 'секунды'
  break;
  case 23: sec += 'секунды'
  break;
  case 24: sec += 'секунды'
  break;
  case 31: sec += 'секунда'
  break;
  case 32: sec += 'секунды'
  break;
  case 33: sec += 'секунды'
  break;
  case 34: sec += 'секунды'
  break;
  case 41: sec += 'секунда'
  break;
  case 42: sec += 'секунды'
  break;
  case 43: sec += 'секунды'
  break;
  case 44: sec += 'секунды'
  break;
  case 51: sec += 'секунда'
  break;
  case 52: sec += 'секунды'
  break;
  case 53: sec += 'секунды'
  break;
  case 54: sec += 'секунды'
  break;
    default:
    sec += 'секунд'
}

switch (newDate.getMinutes()) {
  case 1: min += 'минута'
  break;
  case 2: min += 'минуты'
  break;
  case 3: min += 'минуты'
  break;
  case 4: min += 'минуты'
  break;
  case 21: min += 'минута'
  break;
  case 22: min += 'минуты'
  break;
  case 23: min += 'минуты'
  break;
  case 24: min += 'минуты'
  break;
  case 31: min += 'минута'
  break;
  case 32: min += 'минуты'
  break;
  case 33: min += 'минуты'
  break;
  case 34: min += 'минуты'
  break;
  case 41: min += 'минута'
  break;
  case 42: min += 'минуты'
  break;
  case 43: min += 'минуты'
  break;
  case 44: min += 'минуты'
  break;
  case 51: min += 'минута'
  break;
  case 52: min += 'минуты'
  break;
  case 53: min += 'минуты'
  break;
  case 54: min += 'минуты'
  break;
    default:
    min += 'миннут'
};


 var presentDay = function () {
   return 'Сейчас' + ' '+ year  +' год ' + ' '+ day[newDate.getDay()]+ ' ' + date +' '+ mon[newDate.getMonth()] + ' '+ hourse + ' ' + hors + ' ' + minutes + ' '+ min + ' ' + second + ' ' + sec ;
 }


setInterval(function () {
  console.log(presentDay())
} , 1000);
