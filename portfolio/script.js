

 		
     var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");

     function opentab(tabname) {
         for (tablink of tablinks) {
             tablink.classList.remove("active-link");
         }

         for (tabcontent of tabcontents) {
             tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab");
     }
     



    
    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }

    function closemenu(){
        sidemeu.style.right = "-200px";
    }




    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyemVYhbxSF7auJ1v8XENaMnlys35Ho2U_0PF57P_UOeAPPBE9omQwNgCNPc8OeLe11/exec'
    // const form = document.forms['contact-form']
    
    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //   .then(response => alert("Thank you! your form is submitted successfully." ))
    //   .then(() => { window.location.reload(); })
    //   .catch(error => console.error('Error!', error.message))
    // })


$(document).ready(function(){

    $(header).ripples({

        dropRadius: 10,
        perturbance: 0.09,

    });
})



let animat = new Typed(".auto-type",{

strings: ["Web Developer", "Software Developer","Java Developer"],

typeSpeed: 150,
backSpeed: 150,
loop: true
})


//GSAP START



var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}

tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.4,
    duration:1.5
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})



