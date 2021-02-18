const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active'); // Add class 'active' to the panel we click
    })
})

function removeActiveClasses(){
    panels.forEach( (panel) =>{
        panel.classList.remove('active')
    })
}