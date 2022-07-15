
const hour = document.querySelector('.h');
const min  = document.querySelector('.m');
const sec  = document.querySelector('.s');
const hoursNumber = document.querySelector('.hours');
const minutesNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date();
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    
    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;
    
    
    
    hoursNumber.innerHTML = time.getHours();
    minutesNumber.innerHTML = time.getMinutes();
    
    setTimeout(() => clock(), 1000)
    
}
clock();

const link = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');


for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', function() {
        
        for(let ix = 0; ix < link.length; ix++){
            link[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        tabsNew(this, tabs[i]);
    })
}

function tabsNew(link, tabs) {
    link.classList.add('active');
    tabs.classList.add('active');
} 


const watchHours = document.querySelector('.stopwatch__hours');
const watchMinutes = document.querySelector('.stopwatch__minutes');
const watchSeconds = document.querySelector('.stopwatch__seconds');
const watchBtn = document.querySelector('.stopwatch__btn');
const tabsSpan = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function(){ 
   if(this.innerHTML == 'start'){
       this.innerHTML = 'stop';
       tabsSpan.classList.add('active');
       let i = 0;
       stopWatch(this, i);
   }
    
   else if(this.innerHTML == 'stop'){
       this.innerHTML = 'clear';
       tabsSpan.classList.remove('active');
       tabsSpan.classList.add('active_clear');
   }
   
   else{
       tabsSpan.classList.remove('active_clear');
       this.innerHTML = 'start';
       watchHours.innerHTML=0;
       watchMinutes.innerHTML=0;
       watchSeconds.innerHTML=0;
   }
   
 });
 
 function stopWatch(WchClick, i) {
     if(WchClick.innerHTML == 'stop'){
         
        
        if(i == 59){
            i = 0;
            watchSeconds.innerHTML = i;
            
            if(watchMinutes.innerHTML == 59){
                watchMinutes.innerHTML = 0;
                watchHours.innerHTML++;
            }
            
            else{
                watchMinutes.innerHTML++
            }
            
            
        }
        
        else{
            i++;
            watchSeconds.innerHTML = i;
        }
        
        setTimeout(() => stopWatch(WchClick, i),30);
     }
 }