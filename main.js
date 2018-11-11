function clickedHander(e) {
    // console.log('click')
    e.preventDefault();
    let btnId = e.target.id;
    toggle(btnId);
}

function toggle(btnId) {
    console.log('toggle');
    let itemsId = btnId + '-items';
    let x = document.getElementById(itemsId);
    if (x.style) {
        if (x.style.display === 'none') {
            x.style.display = 'grid';
            // console.log('grid')
        } else {
            // console.log('none')
            x.style.display = 'none';
        }
    }
}


document.getElementById('categories').addEventListener('click', clickedHander);