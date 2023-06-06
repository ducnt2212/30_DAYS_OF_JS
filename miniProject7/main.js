function ModifyLayout() {
//Set the background of the page
document.body.style.backgroundImage = 'url(./images/galaxy.gif)'

//Center h1, input, select, button
const header = document.querySelector('header')
header.style.textAlign = 'center'
header.style.marginBottom = '1%'

//Modify h1
const h1 = document.querySelector('h1')
h1.style.color = 'white'
h1.style.fontFamily = 'Helvetica'
h1.style.fontSize = '1.5cm'
h1.style.fontWeight = 'normal'
h1.style.marginTop = '2.5%'
h1.style.minWidth = 'fit-content'

//Modify input
const input = document.querySelector('input')
input.style.width = '15%'
input.style.fontSize = '100%'
input.style.marginTop = '2.5%'
input.style.padding = '0.5%'
input.style.minWidth = 'fit-content'

//Modify select
const select = document.querySelector('select')
select.style.width = '10%'
select.style.fontSize = '100%'
select.style.padding = '0.5%'
select.style.color = 'gray'
select.style.minWidth = 'fit-content'
select.style.marginLeft = '0.3%'
select.style.minWidth = 'fit-content'

//Add options
const planetsArray = ['mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
for (const planet of planetsArray)
{
    let option = document.createElement('option')
    option.value = planet
    option.textContent = planet.toUpperCase()
    select.appendChild(option)
}

//Modify button
const button = document.querySelector('button')
button.style.fontSize = '100%'
button.style.padding = '0.5%'
button.style.marginLeft = '0.3%'
button.style.color = 'white'
button.style.backgroundColor = 'gray'
button.style.alignContent
button.style.minWidth = 'fit-content'


//Modify flex-container
const flex_container = document.querySelector('.flex-container')
flex_container.style.margin = '1% 15% auto 15%'
flex_container.style.padding = '5%'
flex_container.style.minWidth = 'fit-content'

//See-through background
flex_container.style.backgroundColor = 'rgb(211,211,211)'
flex_container.style.backgroundColor = 'rgba(211,211,211,0.15)'

//Center the earth's image at the beginning
flex_container.style.display = 'flex'
flex_container.style.justifyContent = 'center'
}
ModifyLayout()

function pageFunction() {
    const button = document.querySelector('button')
    const select = document.querySelector('select')
    
    //Modify the message respond the user's input
    const message = document.createElement('div')
    const flex_item_image = document.querySelector('.flex-container')
    flex_item_image.appendChild(message)
    message.style.color = 'white'
    message.style.fontFamily = 'Helvetica'
    message.style.fontSize = '150%'
    message.style.fontWeight = 'lighter'
    message.style.backgroundColor = 'rgb(211,211,211)'
    message.style.backgroundColor = 'rgba(211,211,211,0.2)'
    message.style.textAlign = 'center'
    message.style.minWidth = 'fit-content'
    

    button.addEventListener('click', () => {
        const input = document.querySelector('input')
        const flex_container = document.querySelector('.flex-container')
        if (input.value == '')
        {
            const planet_image = document.querySelector('.planet-image')
            planet_image.src = ''
            message.textContent = 'Mass is required'
            message.style.padding = '1.5% 20% 1.5% 20%'
        } else if (select.value == 'none')
        {
            const planet_image = document.querySelector('.planet-image')
            planet_image.src = ''
            message.textContent = 'You did not choose a planet yet'
            message.style.padding = '1.5% 13.5% 1.5% 13.5%'
        } else
        {
            const planetsArray = [{name: 'mercury', gravity: 3.7}, {name: 'venus', gravity: 8.9}, {name: 'earth', gravity: 9.8}, {name: 'moon', gravity: 1.6}, {name: 'mars', gravity: 3.7}, {name: 'jupiter', gravity: 23.1}, {name: 'saturn', gravity: 9}, {name: 'uranus', gravity: 8.7}, {name: 'neptune', gravity: 11}, {name: 'pluto', gravity: 0.7}]
            for (const planet of planetsArray)
            {
                if (message.textContent != '')
                {
                    // Clean the printed message if the user have entered full and valid inputs
                    message.style.color = ''
                    message.style.fontFamily = ''
                    message.style.fontSize = ''
                    message.style.fontWeight = ''
                    message.style.backgroundColor = ''
                    message.style.backgroundColor = ''
                    message.style.textAlign = ''
                    message.style.minWidth = ''
                    message.textContent = ''
                    message.style.padding = ''        
                }
                if (select.value == planet.name)
                {
                    const planet_image = document.querySelector('.planet-image')
                    planet_image.src = `./images/${planet.name}.png`
                    flex_container.style.justifyContent = 'left'
                    planet_image.style.marginLeft = '-10%'

                    //Modify the flex-item description
                    const div = document.querySelectorAll('div')
                    const flex_item_description = div[2]                
                    flex_item_description.style.backgroundColor = 'rgb(211,211,211)'
                    flex_item_description.style.backgroundColor = 'rgba(211,211,211,0.2)'
                    flex_item_description.style.color = 'white'
                    flex_item_description.style.textAlign = 'center'
                    flex_item_description.style.margin = '10% -5% 10% 0%'// Write this in pixel to fixed the background of the flex-item description
                    flex_item_description.style.padding = '2.5% 10%' // Might this should be written in pixel too
                    flex_item_description.style.fontFamily = 'Helvetica'
                    flex_item_description.style.fontSize = '150%'
                    flex_item_description.textContent = 'The weight of the object on '
                    
                    const description_2 = document.createElement('span')
                    flex_item_description.appendChild(description_2)                
                    description_2.textContent = `${planet.name.toUpperCase()}`
                    flex_item_description.style.fontWeight = 'lighter'
                    description_2.style.fontWeight = '900'

                    const description_3 = document.createElement('div')
                    flex_item_description.appendChild(description_3)                
                    description_3.style.margin = '5% auto 10% auto'
                    description_3.style.backgroundColor = 'rgb(211,211,211)'
                    description_3.style.backgroundColor = 'rgba(211,211,211,0.25)'
                    description_3.style.borderRadius = '50%'
                    description_3.style.height = '35%'
                    description_3.style.width = '30%'
                    description_3.style.padding = '15% 2.5% 2.5% 2.5%'
                    description_3.style.justifyContent = 'center'
                    description_3.style.fontWeight = 'bold'
                    description_3.textContent = `${(input.value * planet.gravity).toFixed(2)} N` //toFixed rounds the string to a specified number of decimals. Examples: 0 -> 0.00
                    break
                    
                }
            }
        }    
    })
}
pageFunction()
