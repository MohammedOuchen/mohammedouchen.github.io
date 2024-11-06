const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')



function PageTransition (){
    for (let index = 0; index < sectBtn.length; index++) {
        sectBtn[index].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn')
            // console.log('currentBtn => ', currentBtn[0].classList, currentBtn[0].classList);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }


    allSections.addEventListener('click', e => {
        const id = e.target.dataset.id

        if (id) {
            sectBtns.forEach(btn => {
                btn.classList.remove('active')
            })

            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)

            element.classList.add('active')

        }
    })
}

PageTransition()

