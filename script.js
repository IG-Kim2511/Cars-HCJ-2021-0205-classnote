
// js 019 
// click menu btn and show menu
// html with '.target', put '.change' class in there

document.querySelector('.menu').addEventListener('click',()=>{

    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')

    });
});