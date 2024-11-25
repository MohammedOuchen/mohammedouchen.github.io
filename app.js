const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')



function PageTransition (){
    for (let index = 0; index < sectBtn.length; index++) {
        sectBtn[index].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn')
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


    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body
        element.classList.toggle('light-mode')
    })


    document.getElementById("send-email").addEventListener("click", function () {
        // Récupérer les valeurs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Valider les champs
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Construire l'URL mailto
        const mailtoLink = `mailto:mohammed.ouchen@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Ouvrir le client de messagerie
        window.location.href = mailtoLink;
    });
}

PageTransition()

