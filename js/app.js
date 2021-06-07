window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const top_btn = document.getElementById("top-btn"); 
    header.classList.toggle('sticky', scrollY > 0);
});


const mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
};

const ham = document.getElementById("ham");
const close = document.getElementById("close");
const mobilenav = document.getElementById("mobile-nav");
const header = document.querySelector("header");
const links = document.querySelectorAll("#links li a");

ham.addEventListener("click", () => {
    ham.style.display="none";
    close.style.display="block";
    close.style.color = "#fff";
    mobilenav.classList.add('is-active');
    header.classList.remove('sticky');
});

close.addEventListener("click", () => {
    ham.style.display="block";
    close.style.display="none";
    mobilenav.classList.remove('is-active');
    header.classList.add('sticky');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        mobilenav.classList.remove('is-active');
        close.style.display = "none";
        ham.style.display="block";
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}