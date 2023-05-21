let tupians=document.querySelectorAll('.tupian');

function setJihuo(){
    tupians.forEach((tupian)=>{
        tupian.classList.remove('jihuo');
    })

    this.classList.add('jihuo');
}

tupians.forEach((tupian)=>{
    tupian.addEventListener('click',setJihuo);
})