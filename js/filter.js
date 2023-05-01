const filterBox = document.querySelectorAll('.filter');

document.querySelector('.box3-one').addEventListener('click', event=>{
    filterBox.forEach( elem => {
        elem.classList.add('hide3__all')   
    });

    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f']

    filterBox.forEach( elem => {
        
        // elem.classList.remove('hide3')
        
        if (elem.classList.contains(filterClass)) //&& filterClass !== 'all') 
        {
            elem.classList.add('uput3')
            elem.classList.remove('hide3__all')    
        }
    });
});