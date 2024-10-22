let btn = document.querySelector('.send-button')
let input = document.querySelector('.num-class')


btn.addEventListener('click', () => {
    if (input.value.length > 5) {
        console.log('girise icaze verildi');
    }else{
        console.log('girise icaze verilmedi');
    }
})