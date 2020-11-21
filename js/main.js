const deg=6;
const hr=document.querySelector('#hr');
const min=document.querySelector('#min');
const sec=document.querySelector('#sec');
const bg=document.querySelector('body');

setInterval(()=>{
    let day= new Date();
    let t=day.getHours();
    let hh = t*30;
    let mm= day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;
    hr.style.transform= `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform=`rotateZ(${mm}deg)`;
    sec.style.transform=`rotateZ(${ss}deg)`;

    if (t>6 && t<12 ){
        bg.style.background="linear-gradient(to bottom, white, skyblue)";
    }else if(t>12 && t<19){
        bg.style.background="linear-gradient(to bottom, yellow, orangered)";
    }else{
        bg.style.background="linear-gradient(to bottom, black, darkblue)";
    }
})