const themeDots = document.querySelectorAll('.theme-dot')
const inforBtn = document.querySelectorAll('.info')
const crossBtn = document.querySelectorAll('.fa-times')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('purple')
} else {
    setTheme(theme)
}

themeDots.forEach((e) => {
    e.addEventListener('click', function () {
        let mode = this.dataset.mode
        setTheme(mode)
    })
})


function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style.css'
    } else if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    } else if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    } else if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)

}

inforBtn.forEach((e) => {
    e.addEventListener('click', function showInfo() {
        let clickedData = this.dataset.project
        console.log(clickedData)
        document.getElementById(`${clickedData}`).classList.remove('inactive')
    })
})


crossBtn.forEach((e) => {
    e.addEventListener('click', function () {
        let CrossData = this.dataset.project
        document.getElementById(`${CrossData}`).classList.add('inactive')
    })
})