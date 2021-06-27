
window.addEventListener("load", function(){
    /* -------------------- Page Loader--------------------- */
    document.querySelector(".pageLoader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".pageLoader").style.display="none";
    }, 600);
    /* -------------------- Animation On Scroll--------------------- */
    AOS.init();
});
/* -----------------
Toggle Navbar 
--------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);
function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* -----------------
Close Nav when clicking on nav item 
--------------*/
document.addEventListener("click", function(e){
    if(e.target.closest(".navItem")){
        toggleNav();
    }
});

/* -----------------
Navbar Sticky 
--------------*/
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* -----------------
Menu Tabs Active and Show Content according to activated tab
--------------*/
const menuTabs = document.querySelector(".menuTabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menuTabItem") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menuSection");
        menuSection.querySelector(".menuTabContent.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        /*Animation On Scroll*/
        AOS.init();
    }
});

/* -----------------
Trigger To Top Button
--------------*/

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 40);
});
