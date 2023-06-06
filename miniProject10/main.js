import { asabenehChallenges2020 } from './data.js'


function modifyHeader() {
    const header = document.querySelector('header')
    header.style.marginLeft = '10%'
    header.style.marginTop = '2.5%'

    const h1 = document.querySelector('h1')
    h1.style.fontFamily = 'Arial'
    h1.style.fontSize = '2cm'
    h1.style.fontWeight = '400'
    h1.style.letterSpacing = '0.5cm'
}
modifyHeader()

function modifyTitles() {
    const data = asabenehChallenges2020.author.titles

    const titles_wrapper = document.querySelector('.titles-wrapper')
    titles_wrapper.style.backgroundColor = 'mistyRose'
    titles_wrapper.style.marginLeft = '10%'
    titles_wrapper.style.marginRight = '10%'
    titles_wrapper.style.display = 'grid'
    titles_wrapper.style.gridTemplateColumns = '50px 150px'
    titles_wrapper.style.fontFamily = 'Arial'
    titles_wrapper.style.padding = '20px'
    titles_wrapper.style.alginItems = 'center'
    titles_wrapper.style.fontSize = '25px'

    const title_icon = document.createElement('div')
    titles_wrapper.appendChild(title_icon)
    title_icon.style.display = 'flex'
    title_icon.style.alignItems = 'center'
    title_icon.style.textAlign = 'center'

    
    const title_text = document.createElement('div')
    title_text.className = 'title-text'
    titles_wrapper.appendChild(title_text)
    title_text.style.display = 'flex'
    title_text.style.alignItems = 'center'
    title_text.style.fontWeight = 'lighter'
    title_text.style.width = '300px'


    let index = 0
    setInterval(() => {
        if (index == data.length)
        {
            index = 0
        }
        title_icon.textContent = data[index][0]
        title_text.textContent = data[index][1]
        index++
   }, 2500)
}
modifyTitles()

function modifyInformation() {
    const information_wrapper = document.querySelector('.information-wrapper')
    information_wrapper.style.marginLeft = '10%'
    information_wrapper.style.marginRight = '10%'
    information_wrapper.style.marginTop = '20px'
    information_wrapper.style.fontFamily = 'Arial'

    const information_text = document.querySelector('.information-text')
    //Set spacing between lines of the text
    information_text.style.lineHeight = '200%'

    const information_grid_container = document.querySelector('.information-grid-container')
    information_grid_container.style.display = 'grid'
    information_grid_container.style.gridTemplateColumns = 'repeat(3, 225px)'
    information_grid_container.style.justifyContent = 'center'
    information_grid_container.style.columnGap = '50px'
    information_grid_container.style.marginTop = '20px'
    
    const tagsStrong = document.querySelectorAll('strong')
    for (const tag of tagsStrong)
    {
        const information_grid_wrapper = document.createElement('div')
        information_grid_container.appendChild(information_grid_wrapper)
        information_grid_wrapper.style.display = 'flex'
        information_grid_wrapper.style.justifyContent = 'center'
        information_grid_wrapper.style.alignItems = 'center'
        information_grid_wrapper.style.height = '175px'
        information_grid_wrapper.style.backgroundColor = 'ghostWhite'

        const information_grid_text = document.createElement('div')
        information_grid_wrapper.appendChild(information_grid_text)
        information_grid_text.textContent = tag.textContent.toUpperCase()
        information_grid_text.style.textAlign = 'center'

        information_grid_wrapper.addEventListener('mouseover', () => {
            information_grid_wrapper.style.backgroundColor = 'navajoWhite'
        })
        information_grid_wrapper.addEventListener('mouseleave', () => {
            information_grid_wrapper.style.backgroundColor = 'ghostWhite'
        })
    }

    const information_technologies = document.querySelector('.information-technologies')
    information_technologies.style.marginTop = '1cm'

    const technology = document.createElement('span')
    technology.className = 'technology'
    information_technologies.appendChild(technology)
    technology.style.fontSize = '1cm'
    technology.style.fontWeight = '900'
    
    const technologies = ['React', 'Redux', 'Node', 'Python', 'MongoDB', 'Pandas', 'Numpy', 'HTML', 'JavaScript']
    let index = 0
    setInterval(() => {
        if (index == technologies.length - 1)
        {
            index = 0
        }
        technology.textContent = technologies[index].toUpperCase()
        index++
        technology.style.color = changeColor()
    },2500)
}
modifyInformation()

function changeColor(){
    let color = '#'
    for (let i = 0; i < 3; i++)
    {
        let factor = Math.floor(Math.random() * 256).toString(16)
        color += factor
    }
    return color
}