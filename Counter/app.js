const months  = [
'January', 
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December',

];

 const weekDays = [
     'Moday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday',
     'Sunday',

 ];

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelector('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

  
const deadlineDate = new Date(tempYear,tempMonth,tempDay+10,11,25,0);

const year = deadlineDate.getFullYear();

const hours = deadlineDate.getHours();

const minute = deadlineDate.getMinutes();

let month =  deadlineDate.getMonth();

month = months[month];

const day = weekDays[deadlineDate.getDay()];

const date = deadlineDate.getDate();

giveAway.textContent = `deadline on ${day}, ${date} ${month} ${year} ${hours}: ${minute}`;

const deadlineTime = deadlineDate.getTime();

function leftTime(){
    const today = new Date().getTime();
    const t  = deadlineTime - today;

    // 1s = 1000ms;
    // 1m = 60s;
    //1hr = 60m;
    //1d= 24hr;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

let days = t / oneDay;
days = Math.floor(days);
let hours  = Math.floor((t % oneDay) / oneHour);
let  minutes = Math.floor((t % oneHour) / oneMinute);
let  seconds = Math.floor((t % oneMinute) / 1000);
  

const values = [days, hours ,minutes, seconds];
function format(item){
    if(item < 10)
    {
        return (item = `0 ${item}`);
    }
    return item;

}
 
// items.forEach(function(item, index){
//      item.innerHTML = format(values [index] );
// });

if (t < 0 ){
    clearInterval(thedeadline);
    deadline.innerHTML = `<h4 class="expired"> it is deadline </h4>` 
}

}

let thedeadline  = setInterval(leftTime, 1000);

leftTime();