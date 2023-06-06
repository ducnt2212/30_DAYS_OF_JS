const colorArray = ['forestgreen', 'cadetBlue', 'burlyWood', 'lightBlue', 'slateBlue', 'wheat', 'paleGreen']
const fontFamilyArray = ['Aldrich', 'Lato', 'Montserrat', 'Nunito', 'Oswald', 'Raleway', "Roboto"]
let textString = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH'


function changeColor() {
    let color = '#'
    for (let i = 0; i < 3; i++)
    {
        let factor = Math.floor(Math.random() * 256).toString(16)
        color += factor
    }
    return color
}


const text_wrapper = document.createElement('div')
document.body.appendChild(text_wrapper)
text_wrapper.style.margin = '30px 15px 30px 15px'
text_wrapper.style.height = '950px'
const text = document.createElement('div')
text_wrapper.appendChild(text)
text.style.fontSize = '4.25cm'
text.style.marginLeft = '30px'
text.style.paddingTop = '50px'

function modifyText() {
    const charArray = textString.split('')

    for (const char of charArray)
    {
        const character = document.createElement('div')
        text.appendChild(character)
        character.className = 'character'
    
        character.textContent = char
        character.style.display = 'inline'
        character.style.color = changeColor()

        setInterval(() => {
            character.style.color = changeColor()
        }, 3000)
    }
}

function changeFontFamily() {
    let index = 0
    setInterval(() => {
        if (index == fontFamilyArray.length)
        {
            index = 0
        }

        text.style.fontFamily = fontFamilyArray[index]
        index++
    }, 3000)
}

function changeBackgroundColor() {
    let index = 0
    setInterval(() => {
        if (index == colorArray.length)
        {
            index = 0
        }
        text_wrapper.style.backgroundColor = colorArray[index]
        index++
    }, 3000)
}


setTimeout(() => {
    modifyText()
}, 3200)

changeFontFamily()
changeBackgroundColor()