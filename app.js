const numbers = document.querySelectorAll('.number');

const currentDate = new Date().getDate();
let futureDate = new Date(2021,9,currentDate + 8,0,0,0).getTime();

const updateTimeRemaining = () => {
  const currentDate = new Date().getTime();
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000; 
  const oneMinute = 60 * 1000; 
  
  let diff = futureDate - currentDate;
  let days = Math.floor(diff / oneDay);
  let hours = Math.floor((diff % oneDay) / oneHour);
  let minutes = Math.floor((diff % oneHour) / oneMinute);
  let seconds = Math.floor((diff % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const format = (value) => {
    if(value < 10) {
      return value = `0${value}`;
    } 
    return value;
  }
  
  numbers.forEach((element, idx) => {
    element.innerHTML = format(values[idx]);
  });
};

setInterval(updateTimeRemaining, 1000);
updateTimeRemaining();
if(futureDate === new Date().getTime()) {
  futureDate = new Date().getTime + futureDate
}