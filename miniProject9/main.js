import { countries } from './countries.js'

const modifiedCountries = countries.map(country => country.toUpperCase())

document.body.style.minWidth = '1000px'
// *** MAKE THE TEXT IN FRONT OF THE BACKGROUND (NOT YET)
function modifyHeader() {
    const header = document.querySelector('header')
    header.style.fontFamily = 'Arial'
    header.style.textAlign = 'center'
    header.style.backgroundImage = 'url(./images/globe_2.jpg)' // the image is stretched, find way to minimize it
    header.style.color = 'white'
    header.style.height = '400px'
    header.style.paddingTop = '2.2%'
    header.style.backgroundSize = '100% 100%'

    const h1 = document.querySelector('h1')
    h1.style.fontWeight = '900'
    h1.style.fontSize = '2cm'
    h1.style.fontWeight = '500'
    h1.style.marginBottom = '0'

    const subtitle = document.querySelector('.subtitle')
    subtitle.textContent = `Total Number of countries: ${modifiedCountries.length}`
    subtitle.style.fontWeight = '900'
    subtitle.style.marginTop = '0'
    subtitle.style.marginBottom = '0.25%'



    const buttons = document.querySelectorAll('button')
    
    const startingWord = buttons[0]
    startingWord.style.backgroundColor = 'blueviolet'
    startingWord.style.color = 'white'
    startingWord.style.padding = '0.5% 1%'

    const searchingAnyWord = buttons[1]
    searchingAnyWord.style.backgroundColor = 'blueviolet'
    searchingAnyWord.style.color = 'white'
    searchingAnyWord.style.padding = '0.5% 1%'


    const sorting = buttons[2]
    sorting.style.backgroundColor = 'blueviolet'
    sorting.style.color = 'white'
    sorting.style.padding = '0.5% 1%'
    const sorting_icon = document.createElement('i')
    sorting_icon.id = 'sorting-icon'
    sorting.appendChild(sorting_icon)
    sorting_icon.className = 'fa fa-sort-alpha-asc'
    sorting_icon.style.fontSize = '15px'

    const input_wrapper = document.querySelector('.input-wrapper')
    input_wrapper.style.marginTop = '1.5%'

    const input = document.querySelector('input')
    input.style.width = '30%'
    input.style.fontSize = '125%'
    input.style.borderRadius = '25px'
    input.style.padding = '0.5% 1%'
    input.style.fontWeight = '100'


    const input_icon = document.querySelector('.input-icon')
    input_icon.style.display = 'inline'
    const input_icon_i = document.createElement('i')
    input_icon.appendChild(input_icon_i)
    input_icon_i.className = 'fa fa-search'
    input_icon_i.style.fontSize = '20px'
    input_icon.style.marginLeft = '10px'

    //Buttons' Animation
    //First button
    startingWord.addEventListener('mouseover', () => {
        startingWord.style.backgroundColor = 'indigo'
    })
    startingWord.addEventListener('mouseleave', () => {
        startingWord.style.backgroundColor = 'blueviolet'
    })
    startingWord.addEventListener('click', () => {
        searchingAnyWord.style.backgroundColor = 'blueviolet'
        
        sorting.style.backgroundColor = 'blueviolet'

        startingWord.style.backgroundColor = 'indigo'
        startingWord.addEventListener('mouseleave', () => {
            if (searchingAnyWord.style.backgroundColor == 'indigo' ||sorting.style.backgroundColor == 'indigo')
            {
                startingWord.style.backgroundColor = 'blueviolet'

            } else
            {
            startingWord.style.backgroundColor = 'indigo'
            }
        })
    })

    //Second button
    searchingAnyWord.addEventListener('mouseover', () => {
        searchingAnyWord.style.backgroundColor = 'indigo'
    })
    searchingAnyWord.addEventListener('mouseleave', () => {
        searchingAnyWord.style.backgroundColor = 'blueviolet'
    })
    searchingAnyWord.addEventListener('click', () => {
        startingWord.style.backgroundColor = 'blueviolet'

        sorting.style.backgroundColor = 'blueviolet'

        searchingAnyWord.style.backgroundColor = 'indigo'
        searchingAnyWord.addEventListener('mouseleave', () => {
            if (startingWord.style.backgroundColor == 'indigo' ||sorting.style.backgroundColor == 'indigo')
            {
                searchingAnyWord.style.backgroundColor = 'blueviolet'

            } else
            {
                searchingAnyWord.style.backgroundColor = 'indigo'
            }
        })
    })

    sorting.addEventListener('mouseover', () => {
        sorting.style.backgroundColor = 'indigo'
    })
    sorting.addEventListener('mouseleave', () => {
        sorting.style.backgroundColor = 'blueviolet'
    })
    sorting.addEventListener('click', () => {
        startingWord.style.backgroundColor = 'blueviolet'

        searchingAnyWord.style.backgroundColor = 'blueviolet'

        sorting.style.backgroundColor = 'indigo'
        sorting.addEventListener('mouseleave', () => {
            if (startingWord.style.backgroundColor == 'indigo' ||searchingAnyWord.style.backgroundColor == 'indigo')
            {
                sorting.style.backgroundColor = 'blueviolet'

            } else
            {
                sorting.style.backgroundColor = 'indigo'
            }
        })

        if (sorting_icon.className == 'fa fa-sort-alpha-asc')
        {
            sorting_icon.className = 'fa fa-sort-alpha-desc'
        } else
        {
            sorting_icon.className = 'fa fa-sort-alpha-asc'

        }
    })

}
modifyHeader()

function pageFuntion() {
    //Print the initial grid
    const countries_container = document.querySelector('.countries-container')
    countries_container.style.margin = '2.5% 5% auto 5%'

    
    
    const countries_wrapper = document.querySelector('.countries-wrapper')
    countries_wrapper.style.display = 'grid'
    countries_wrapper.style.gridTemplateColumns = 'repeat(6, 150px)'
    countries_wrapper.style.rowGap = '0.45%'
    countries_wrapper.style.columnGap = '2%'
    countries_wrapper.style.justifyContent = 'center'

    function printTheGrid(array) {
        for (let i = 0; i < array.length; i++)
        {
            let country_wrapper = document.createElement('div')
            countries_wrapper.appendChild(country_wrapper)
            country_wrapper.style.backgroundImage = 'url(./images/map_image.jpg)'
            country_wrapper.style.backgroundSize = '150px 150px'

            country_wrapper.style.height = '150px'
            country_wrapper.style.width = '150px'
            country_wrapper.style.border = 'thin black solid'
            country_wrapper.style.borderRadius = '5px'
            //Make the text center
            country_wrapper.style.display = 'flex'
            country_wrapper.style.justifyContent = 'center'
            country_wrapper.style.alignItems = 'center'

            let country_text = document.createElement('div')
            country_wrapper.appendChild(country_text)
            country_text.display = 'flex'
            country_text.style.textAlign = 'center'
            country_text.textContent = array[i]
            country_text.style.fontFamily = 'Arial'
            country_text.style.fontWeight = '900'
        }
    }
    printTheGrid(modifiedCountries)


    const buttons = document.querySelectorAll('button')
    const input = document.querySelector('input')
    const feedback = document.querySelector('.feedback')

    //The first function
    const startingWord = buttons[0]
    startingWord.addEventListener('click', () => {
        feedback.style.marginTop = '0%'
        feedback.style.fontWeight = '100'

        const feedback_1 = document.createElement('span')
        feedback_1.textContent = input.value
        feedback_1.style.color = 'red'
        
        //Print the feedback when write the input first then push the button
        if (feedback_1.textContent != '')
        {
            feedback.textContent = 'Countries start with '    
            feedback.appendChild(feedback_1) //Help the function to do as requirement
            
            const feedback_2 = document.createElement('span')
            feedback_2.textContent = ' are '
            feedback_1.appendChild(feedback_2)
            feedback_2.style.color = 'white'
            
            const feedback_3 = document.createElement('span')
            feedback_2.appendChild(feedback_3)

            const feedback_information = modifiedCountries.filter(country => country.startsWith(`${input.value.toUpperCase()}`))
            feedback_3.textContent = feedback_information.length
            feedback_3.style.color = 'lawngreen'

            if (countries_wrapper.innerHTML != '')
            {
                countries_wrapper.innerHTML = ''

                printTheGrid(feedback_information)

                sortingButton(feedback_information)
            }        
        }
        //Print the feedback when push the button then write the input
        input.addEventListener('input', e => {
            if (e.target.value == '')
            {
                feedback.textContent = ''
                countries_wrapper.innerHTML = ''

                printTheGrid(modifiedCountries)

                sortingButton(modifiedCountries)
            } else
            {
                feedback.textContent = 'Countries start with '

                feedback.appendChild(feedback_1) //Help the function to do as requirement
                feedback_1.textContent = e.target.value
            
                const feedback_2 = document.createElement('span')
                feedback_2.textContent = ' are '
                feedback_1.appendChild(feedback_2)
                feedback_2.style.color = 'white'
            
                const feedback_3 = document.createElement('span')
                feedback_2.appendChild(feedback_3)

                const feedback_information = modifiedCountries.filter(country => country.startsWith(`${input.value.toUpperCase()}`))
                feedback_3.textContent = feedback_information.length
                feedback_3.style.color = 'lawngreen'
                if (countries_wrapper.innerHTML != '')
                {
                    countries_wrapper.innerHTML = ''

                    printTheGrid(feedback_information)
                    
                    sortingButton(feedback_information)
                } else
                {
                    printTheGrid(feedback_information)

                    sortingButton(feedback_information)
                }
            }
        })
    })


    //The second function
    const searchWithAnyWord = buttons[1]
    searchWithAnyWord.addEventListener('click', () => {
        feedback.style.marginTop = '0%'
        feedback.style.fontWeight = '100'

        const feedback_1 = document.createElement('span')
        feedback_1.textContent = input.value
        feedback_1.style.color = 'red'

        //Print the feedback when write the input first then push the button
        if (input.value != '')
        {
            feedback.textContent = 'Countries containing '
            feedback.appendChild(feedback_1)

            const feedback_2 = document.createElement('span')
            feedback_1.appendChild(feedback_2)
            feedback_2.textContent = ' are '
            feedback_2.style.color = 'white'

            const feedback_3 = document.createElement('span')
            feedback_2.appendChild(feedback_3)

            const feedback_information = modifiedCountries.filter(country => country.includes(`${input.value.toUpperCase()}`))
            feedback_3.textContent = feedback_information.length
            feedback_3.style.color = 'lawngreen'

            if (countries_wrapper.innerHTML != '')
            {
                countries_wrapper.innerHTML = ''
                
                printTheGrid(feedback_information)

                sortingButton(feedback_information)
            }
        }

        //Print the feedback when push the button then write input
        input.addEventListener('input', e => {
            if (e.target.value == '')
            {
                feedback.textContent = ''
                countries_wrapper.innerHTML = ''

                printTheGrid(modifiedCountries)

                sortingButton(modifiedCountries)

            } else
            {
                feedback.textContent = 'Countries containing '

                feedback.appendChild(feedback_1)
                feedback_1.textContent = e.target.value

                const feedback_2 = document.createElement('span')
                feedback_1.appendChild(feedback_2)
                feedback_2.textContent = ' are '
                feedback_2.style.color = 'white'

                const feedback_3 = document.createElement('span')
                feedback_2.appendChild(feedback_3)

                const feedback_information = modifiedCountries.filter(country => country.includes(`${input.value.toUpperCase()}`))
                feedback_3.textContent = feedback_information.length
                feedback_3.style.color = 'lawngreen'

                if (countries_wrapper.innerHTML != '')
                {
                    countries_wrapper.innerHTML = ''
                    
                    printTheGrid(feedback_information)

                    sortingButton(feedback_information)
                } else
                {
                    printTheGrid(feedback_information)

                    sortingButton(feedback_information)
                }
            }
        })
    })


    //Third button
    function sortingButton(array)
    {
        const sorting = document.querySelector('.sorting')
        const sorting_icon = document.querySelector('#sorting-icon')
        sorting.addEventListener('click', () => {
            if (sorting_icon.className == 'fa fa-sort-alpha-desc')
            {
                modifiedCountries.sort().reverse()
                
                array.sort().reverse()

                countries_wrapper.innerHTML = ''

                printTheGrid(array)
            } else
            {
                modifiedCountries.sort()

                array.sort()

                countries_wrapper.innerHTML = ''

                printTheGrid(array)
            }
        })
    }
    if(input.value == '')
    {
        sortingButton(modifiedCountries)
    }

}
pageFuntion()