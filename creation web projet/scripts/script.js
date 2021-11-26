window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/* back to top*/
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





/*get modal*/
var modal = document.getElementById('id01');

/*close outide the box*/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




/*back to top*/
$(document).ready(function()
{
$(window).scroll(function()
{
if($(this).scrollTop() > 100)
{
$('#scroll') .fadeIn();
}
else
{
$('#scroll') .fadeOut();
}
});
$('#scroll').click(function()
{
$("html,body") .animate(
{scrollTop: 0 }, 600)
return flase;
});
});