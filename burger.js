// $(document).ready(function(){
//     $('header__burher').click(function(event){
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})