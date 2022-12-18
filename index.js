var ele = document.getElementById('mouse-effect');
// console.log(ele);

ele.addEventListener('mouseover', function handleMouseOver(){
    ele.style.color='hsl(219, 85%, 26%)';
    this.style.cursor='pointer';
})

ele.addEventListener('mouseout', function handleMouseOut(){
    ele.style.color='hsl(219, 12%, 42%)';
})
