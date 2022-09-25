const bh_more = document.getElementById('h_main-nav_more');
const on_plus = document.querySelector('.change_plus');
const on_minus = document.querySelector('.change_minus');
let stauschange;
function mainnav_more_visiblefunction(){
    bh_more.classList.toggle('main-nav_more');

    stauschange = bh_more.classList.contains('main-nav_more');
    if(stauschange){
        on_plus.style.display='none';
        on_minus.style.display='inline-block';
    }else{
        on_plus.style.display='inline-block';
        on_minus.style.display='none';
    }
}