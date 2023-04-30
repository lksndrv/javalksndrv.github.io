window.addEventListener('DOMContentLoaded', function(){
    'use script';
})


let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('info-header'),
    tabContect  = document.querySelectorAll('.info-tabcontect');

function hideTabContect(a) {
    for (let i = a; i< tabContect.length; i++){
        tabContect[i].classList.remove("show");
        tabContect[i].classList.add("hide");
    }
}
hideTabContect(1);

function ShowTabContect(b) {
    if (tabContect[b].classList.contains('hide')){
        tabContect[b].classList.remove("hide");
        tabContect[b].classList.add("show");
    }
}

info.addEventListener('click', function (event){
    let target = event.target;

    if (target && target.classList.contains('info-header-tab')){
        for(let i =0; i <tab.length; i++){
            if (target == tab[i]){
                hideTabContect(0);
                tab.forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                ShowTabContect(i);

                break
            }
        }
    }
});

