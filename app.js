const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')



function PageTransition (){
    for (let index = 0; index < sectBtn.length; index++) {
        sectBtn[index].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn')
            console.log('currentBtn => ', currentBtn[0].classList, currentBtn[0].classList);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })

    }
}

PageTransition()

