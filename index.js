const body = document.querySelector('body');
const hour = document.querySelector('.hour');
const minite = document.querySelector('.minite');
const seciond = document.querySelector('.secionds');
const madeswitch = document.querySelector('.made-switch');

madeswitch.addEventListener('click',function( ){
    
        body.classList.add("dark");
    
    
});

function updatetime(){
     let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    horToDeg = (date.getHours() / 12) * 360;
    

     
   seciond.style.transform = `rotate(${secToDeg}deg)`;
   minite.style.transform = `rotate(${ minToDeg}deg)`;
   hour.style.transform = `rotate(${ horToDeg}deg)`;
};

setInterval(updatetime, 1000);

updatetime();

//11111111111111
function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
      
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
      }
      
      // Update the clock every second
      setInterval(updateClock, 1000);
      
      // Initial call to avoid the delay of one second before the clock updates
      updateClock();