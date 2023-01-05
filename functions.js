const tecnologies = document.getElementById('tecnologies')
const experience = document.getElementById('experience')
const education = document.getElementById('education')

document.getElementById('tec-section').classList.toggle("no-display")
document.getElementById('exp-list').classList.toggle("no-display")
document.getElementById('edu-list').classList.toggle("no-display")

tecnologies.onclick = () => {
    document.getElementById('tec-section').classList.toggle("no-display")
}

experience.onclick = () => {
    document.getElementById('exp-list').classList.toggle("no-display")
}

education.onclick = () => {
    document.getElementById('edu-list').classList.toggle("no-display")
}

