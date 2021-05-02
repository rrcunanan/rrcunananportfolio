// event listeners
document.addEventListener('DOMContentLoaded', myFunctions);

//generate lists
function myFunctions() {
    navSlide();
    smoothScroll();
    messageHandler();
    recaptchaCallback();
}

// functions
function smoothScroll(){
    const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 1000,
                speedAsDuration: true
            });
}

function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   
    burger.addEventListener('click', () =>{
    // toggle nav
    nav.classList.toggle('nav-active');

    //animate links  
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
        }

        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

function messageHandler() {
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
            status.classList.add('success');
            status.innerHTML = "Thanks for your submission!";
            form.reset()
      }).catch(error => {
            status.classList.add('error');
            status.innerHTML = "There was a problem submitting your form."
      });
    }
    form.addEventListener("submit", handleSubmit)
}

function recaptchaCallback() {
    document.getElementById("submitBtn").removeAttribute("disabled");
};




