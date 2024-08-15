const myData=JSON.parse(  localStorage.getItem('myData'))||{
    first:{
qtn:"What is HTML",
o1:"Hyper Text Markup Language",
o2:"Stylesheet",
o3:"Hyper Text Monopoly Language ",
o4:"It Software",
timer:20,
correct:'o1',
takentime:0,
answer:0},
    second:{
        qtn:"What is CSS ?",
        o1:"Change Style Sheet",
        o2:"Charming Style Sheet",
        o3:"Cascade Style Sheet",
        o4:"color Style Sheet",
        timer:20,
        correct:'o3',
        takentime:0,
        answer:0
            },
    third:{
        qtn:"What is Arrow Function in JS?",
        o1:"=>()",
        o2:"(=>)",
        o3:"()>=",
        o4:"()=>",
        timer:20,
        correct:'o4',
        takentime:0,
        answer:0
            },
    forth:{
        qtn:"What is Array in JS",
        o1:"[]",
        o2:"()",
        o3:"{}",
        o4:"<>",
        timer:20,
        correct:'o1',
        takentime:0,
        answer:0
            },
    fifth:{
        qtn:"What is Object in JS",
        o1:"()",
        o2:"{}",
        o3:"<>",
        o4:"[]",
        timer:20,
        correct:'o2',
        takentime:0,
        answer:0
            }
}





let qno=localStorage.getItem('qno')|| 1;
console.log(qno);

const next=document.querySelector('#next')

next.addEventListener('click',questionPaper)






















const qtnnnn=document.querySelector('.question')

const score=document.querySelector('#score')
const reset=document.querySelector('#reset')
const options=document.querySelector('#options')
const strtNow=document.querySelector('#start_now')
const body=document.querySelector('body')
const main_img=document.querySelector('#main-img')
const sound_on=document.querySelector('#sound-on')
const sound_of=document.querySelector('#sound-off')
const calculatenobtn=document.querySelector('#calculate_answers')
const maindiv=document.querySelector('.qa')
const timerDiv=document.querySelector('#timer')
var correctsnd = new Audio("assets/cute-level-up-1-189852.mp3");
var wrongsnd = new Audio("assets/wrong-38598.mp3");

let countcorrect= localStorage.getItem('curr') || 0;

if(countcorrect<=0){
    countcorrect=+countcorrect
}
score.innerText=+countcorrect

var snd = new Audio("assets/to-frighten-121407.mp3");
snd.loop = true; 
function volumeDown(){
    snd.volume=0.0;
}
volumeDown()

reset.addEventListener('click',()=>{
localStorage.clear()
location.reload()
})



function timeoutttt(){
    options.style="display:none"
            score.innerText=+countcorrect
            qtnnnn.style="display:none;"
timerDiv.style="display:none;"
reset.style="display:block"

main_img.style.cssText="width:100%; max-width:600px; "
strtNow.style="display:none"
sound_on.style.cssText="display:none;"
sound_of.style.cssText="display:none"
calculatenobtn.style="display:none;"
maindiv.style.cssText="padding-top:10px;display:flex"
}

sound_on.addEventListener('click',()=>{
    sound_of.style="display:block"
    sound_on.style="display:none;"
    function enableMute() { 
        snd.muted = true;
      } 
      enableMute()
})
sound_of.addEventListener('click',()=>{
    sound_of.style="display:none"
    sound_on.style="display:block;"
    function disableMute() { 
        snd.muted = false;
      } 
      disableMute()
})



strtNow.addEventListener('click',questionPaper)

let jk;


    
let quesno="first";
const noofq=document.querySelector('#noofquestion')


function questionPaper(){

     body.style="background-color:#F5F5F5;"
     timerDiv.style="background-color: #FEC33D;"
    options.setAttribute('val',"0")
    clearTimeout(jk);
    localStorage.setItem('qno',qno)
    next.style="display:block"

 

    if(localStorage.getItem('qno')==1){
        quesno="first"
        reset.style="display:none"
          noofq.innerText=1
        }
 
    if(localStorage.getItem('qno')==2){
quesno="second"
noofq.innerText=2
    }
     if(localStorage.getItem('qno')==3){
quesno="third"
noofq.innerText=3
    }
     if(localStorage.getItem('qno')==4){
quesno="forth"
noofq.innerText=4
    }
     if(localStorage.getItem('qno')==5){
quesno="fifth"
 next.style="display:none"
 

 noofq.innerText=5
    }
   
    if(myData[quesno].answer!=0){
        options.setAttribute('val',localStorage.getItem('vale'))
    }

  

    localStorage.setItem('myData',JSON.stringify(myData))
    main_img.style.cssText="width:100%; max-width:200px; position:absolute; top:10px; left:5%;"
    strtNow.style="display:none"
    sound_on.style.cssText="display:block;"
    // snd.play()
  
    maindiv.style="display:flex"

const quest=document.querySelector('.question')
const opt1=document.querySelector('#option1')
const opt2=document.querySelector('#option2')
const opt3=document.querySelector('#option3')
const opt4=document.querySelector('#option4')

console.log(myData[quesno]);
quest.innerText=myData[quesno].qtn

opt1.innerText=myData[quesno].o1
opt2.innerText=myData[quesno].o2
opt3.innerText=myData[quesno].o3
opt4.innerText=myData[quesno].o4

const okok=options.children
for(i=0;i<okok.length;i++){
    okok[i].style.cssText="border: solid 1px  #D9D9D9;"
    okok[i].setAttribute('true','')
    if(okok[i].getAttribute('check')==myData[quesno].correct){
okok[i].setAttribute('true','true')
    }
}










  body.style="background-color:#CCE2C2"
        calculatenobtn.style="display:block"
        if(myData[quesno].takentime!=0){
            timerDiv.innerHTML=myData[quesno].takentime
for(i=0;i<okok.length;i++){
    if(okok[i].getAttribute('check')==myData[quesno].answer){
        if(okok[i].getAttribute('true')=='true'){
            const correct=document.createElement('img')
            correct.setAttribute('src','assets/correct.png')
          okok[i].style.cssText="border:solid 3px #35BD3A"
          okok[i].appendChild(correct)
        }else{
            const correct=document.createElement('img')
            correct.setAttribute('src','assets/wrong.png')
          okok[i].style.cssText="border:solid 3px #FF7A7A"
          okok[i].appendChild(correct)
        }

    }
}
                }else{

                
var ok=setInterval(()=>{
    changeTime()
},1000)
jk=ok;
let oktime=myData[quesno].timer
let oktim2=myData[quesno].timer
const timerValue=document.querySelector('.time')
timerValue.innerHTML=oktime
function  changeTime() {
    
    
    const newTime=oktime-1
    
        console.log(oktime);
if(newTime==oktim2/2){
    body.style="background-color:#E4E5C7"
     timerDiv.style="background-color:#C5B100"
}
if(newTime>=10 ){
        timerValue.innerText=newTime
        oktime=newTime
    }

      
        if(newTime==oktim2/4){
            body.style="background-color:#DBADAD"
             timerDiv.style="background-color:#C50C00"
        }
         if(newTime<10 && newTime>0){
            timerValue.innerText=`0${newTime}`
            oktime=newTime
        
       
    }
    else if(newTime==0){
        clearTimeout(ok);
        timerValue.innerText=`00`
        timerDiv.style.cssText="animation: shake 0.4s ease-out;background-color:#C50C00;"
        options.setAttribute('val',localStorage.getItem('vale'))
        if(localStorage.getItem('qno')==5){
            setTimeout(timeoutttt,2000)
        }
    }

}
                }
if(localStorage.getItem('qno')<=5){
    qno++
  }
  if(localStorage.getItem('qno')>5){
  localStorage.setItem('qno',1)
  
  
  }

}





options.addEventListener('click',checkAnswer)

function checkAnswer(e){
  
const val=+options.getAttribute('val')

if(val==0){
    if(e.target==options){
  
    }
    else if(e.target.getAttribute('true'=='true')){
        const correct=document.createElement('img')
        correct.setAttribute('src','assets/correct.png')
      e.target.style.cssText="border:solid 3px #35BD3A"
      e.target.appendChild(correct)
      clearTimeout(jk);
      correctsnd.play()
      countcorrect=+countcorrect+1
      localStorage.setItem('curr',countcorrect)
      score.innerText=localStorage.getItem('curr')
   
      
      if(localStorage.getItem('qno')==5){
options.style="display:none"
qtnnnn.style="display:none;"
timerDiv.style="display:none;"

reset.style="display:block"
main_img.style.cssText="width:100%; max-width:600px; "
strtNow.style="display:none"
sound_on.style.cssText="display:none;"
sound_of.style.cssText="display:none"
calculatenobtn.style="display:none;"
maindiv.style.cssText="padding-top:10px;display:flex"
      }
   
    }
    else{
        e.target.style.cssText="border:solid 3px #FF7A7A"
        const wrong=document.createElement('img')
        wrong.setAttribute('src','assets/wrong.png')
        e.target.appendChild(wrong)
        clearTimeout(jk)
        wrongsnd.play()
        countcorrect=countcorrect-1
        localStorage.setItem('curr',countcorrect)
        score.innerText=+localStorage.getItem('curr')
        if(localStorage.getItem('qno')==5){
            options.style="display:none"
            score.innerText=+countcorrect
            qtnnnn.style="display:none;"
timerDiv.style="display:none;"
reset.style="display:block"

main_img.style.cssText="width:100%; max-width:600px; "
strtNow.style="display:none"
sound_on.style.cssText="display:none;"
sound_of.style.cssText="display:none"
calculatenobtn.style="display:none;"
maindiv.style.cssText="padding-top:10px;display:flex"
        }
    }


    if(localStorage.getItem('qno')==1){
        quesno="first"
        reset.style="display:none"
          noofq.innerText=1
        }
 
    if(localStorage.getItem('qno')==2){
quesno="second"
noofq.innerText=2
    }
     if(localStorage.getItem('qno')==3){
quesno="third"
noofq.innerText=3
    }
     if(localStorage.getItem('qno')==4){
quesno="forth"
noofq.innerText=4
    }
     if(localStorage.getItem('qno')==5){
quesno="fifth"
 next.style="display:none"
 

 noofq.innerText=5
    }
    if(myData[quesno].answer==0){
        
        myData[quesno].answer=e.target.getAttribute('check')
        myData[quesno].takentime=timerDiv.innerText
        localStorage.setItem('myData',JSON.stringify(myData))
        console.log('hello');
        options.setAttribute('val',localStorage.getItem('vale'))
    }
 

}



}


localStorage.setItem('vale',1)