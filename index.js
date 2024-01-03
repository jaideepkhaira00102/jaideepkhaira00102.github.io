var rate;
var scrolled;
var maxscrolled = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var introvar = document.getElementsByClassName("Intro");
function scrolledvalue(){
    window.addEventListener('scroll', function(e){

        const target = document.querySelector('.Intro');
        scrolled = window.scrollY; //if having problems use pageYOffset instead of scrollY
        var tempr = (scrolled-introvar[0].getBoundingClientRect().y)/maxscrolled;
        rate = lerp(0, maxscrolled, tempr);
        (scrolled-tempr)/maxscrolled; //normalized rate
        if(rate >-100 && rate < 100)
        {
            rate = 0;
        }
        target.style.transform = 'translate3d('+(rate*maxscrolled)+'px, 0px,0px)';
        
    
    });
}
scrolledvalue();
