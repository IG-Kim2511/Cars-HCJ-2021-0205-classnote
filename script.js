
// js 019 
// click menu btn and show menu
// html with '.target' in [menu, navbar, section] ....put '.change' class in there

document.querySelector('.menu').addEventListener('click',()=>{

    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')

    });
});

// js 024 
// back to nomal from menu mode, when I click any point on browser
// remove '.change' , when I click any point on browser

document.querySelectorAll('.wrapper').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelectorAll('.target').forEach((item)=>{
            item.classList.remove('change')            
    });
    })
});