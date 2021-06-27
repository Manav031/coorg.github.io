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

const quickbtn = document.getElementById("quickbtn");
quickbtn.addEventListener("click", () => {
    const quickdiv = document.getElementById("quick");
    quickdiv.classList.toggle("quick-btn-click");
});

const sendmail = document.getElementById("sendmail");
sendmail.addEventListener("click", () => {
    const emailTo = "manavdarji1@gmail.com";
    const emailCC = "";
    const emailSub = document.getElementById("sub").value;
    const emailBody = document.getElementById("msg").value;
    const pnumber = document.getElementById("phonenumber").value;
    const uname = document.getElementById("username").value;
    const msg = "Name: " + uname + " " + "Phone Number: " + pnumber + " " + emailBody;
    window.open('mailto:'+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+msg);
});
