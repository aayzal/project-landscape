// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Contact Form

const contactForm = document.querySelector(".contact form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        this.reset();

    });

}


// Register Form

const registerForm = document.querySelector(".register form");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Registration Successful!");

        this.reset();

    });

}


// Login Form

const loginForm = document.querySelector(".login form");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login Successful!");

        this.reset();

    });

}