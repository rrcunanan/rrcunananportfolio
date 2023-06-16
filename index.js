// event listeners
document.addEventListener('DOMContentLoaded', myFunctions);

//generate lists
function myFunctions() {
    mobileNav();
    smoothScroll();
    messageHandler();
}

// functions
function smoothScroll(){
    const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 1000,
                speedAsDuration: true
            });
}

function mobileNav() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

    burger.addEventListener('click', () => {
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
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
