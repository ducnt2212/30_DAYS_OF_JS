import { countries_data } from './countries_data.js'

document.body.style.minWidth = 'fit-content'
function modifyHeader() {
    const header = document.querySelector('header')
    header.style.fontFamily = 'Montserrat'
    header.style.backgroundColor = 'rgb(232,232,232)'
    header.style.textAlign = 'center'
    header.style.paddingTop = '0.25%'
    header.style.paddingBottom = '1%'

    const title = document.querySelector('#title')
    title.style.color = 'orange'
    title.style.marginBottom = '5px'

    const subtitle = document.querySelector('#subtitle')
    subtitle.textContent = `Currently, we have ${countries_data.length} countries`
}
modifyHeader()

function modifyInputContainer() {
    const input_container = document.querySelector('.input-container')
    input_container.style.textAlign = 'center'
    input_container.style.marginTop = '1%'

    const input = document.querySelector('input')
    input.style.color = 'orange'
    input.style.marginBottom = '1.5%'
    input.style.width = '60%'
    input.style.padding = '7.5px 12.5px'
    input.style.borderRadius = '20px'
    input.style.minWidth = '700px'
    input.style.fontSize = '17.5px'

    function modifyButton(button, button_icon) {
        button.style.backgroundColor = 'orange'
        button.style.borderStyle = 'none'
        button.style.width = '150px'
        button.style.padding = '12.5px 5px'
        button.style.borderRadius = '20px'
        button.style.marginRight = '5px'
        button.style.marginLeft = '5px'
        button.style.textAlign = 'end'

        button_icon.style.textAlign = 'center'
        button_icon.style.color = 'orange'
    }
    
    const button_wrapper = document.querySelector('.button-wrapper')
    button_wrapper.style.minWidth = '700px'
    button_wrapper.style.marginBottom = '1.5%'

    const name = document.querySelector('#name')
    const name_icon = document.createElement('div')
    name.appendChild(name_icon)
    modifyButton(name, name_icon)
    name_icon.className = 'fa fa-long-arrow-down'
    name_icon.style.width = '50px'
    name_icon.id = 'name-icon'

    const capital = document.querySelector('#capital')
    const capital_icon = document.createElement('div')
    capital.appendChild(capital_icon)
    modifyButton(capital, capital_icon)
    capital_icon.className = 'fa fa-long-arrow-up'
    capital_icon.style.width = '40px'
    capital_icon.id = 'capital-icon'

    const population = document.querySelector('#population')
    const population_icon = document.createElement('div')
    population.appendChild(population_icon)
    modifyButton(population, population_icon)
    population_icon.className = 'fa fa-long-arrow-up'
    population_icon.style.width = '30px'
    population_icon.id = 'population-icon'

    const graphs = document.querySelector('#graphs')
    graphs.className = 'fa fa-bar-chart'
    graphs.style.fontSize = '40px'
    graphs.style.marginRight = '5px'
    graphs.style.marginLeft = '5px'
    graphs.style.color = 'orange'
}
modifyInputContainer()

function modifyGraphButtonWrapper() {
    const graph_button_wrapper = document.querySelector('.graph-button-wrapper')
    graph_button_wrapper.style.textAlign = 'center'
    graph_button_wrapper.style.marginTop = '2.5%'
    graph_button_wrapper.style.fontFamily = 'Montserrat'
    graph_button_wrapper.style.marginBottom = '1%'

    function modifyGraphButton(graph_button) {
        graph_button.style.backgroundColor = 'orange'
        graph_button.style.borderStyle = 'none'
        graph_button.style.padding = '5px 10px'
        graph_button.style.marginLeft = '2.5px'
        graph_button.style.marginRight = '2.5px'
    
    }
    const population_graph = document.querySelector('#population-graph')
    modifyGraphButton(population_graph)

    const languages_graph = document.querySelector('#languages-graph')
    modifyGraphButton(languages_graph)
}
modifyGraphButtonWrapper()

function modifyFooter() {
    const footer = document.querySelector('footer')
    footer.style.backgroundColor = 'rgb(232,232,232)'
    footer.style.marginTop = '10px'
    footer.style.fontFamily = 'Montserrat'
    footer.style.display = 'grid'
    footer.style.gridTemplateColumns = '800px 800px'
    footer.style.paddingTop = '5px'
    footer.style.paddingBottom = '5px'

    const footer_1 = document.createElement('div')
    footer.appendChild(footer_1)
    footer_1.textContent = 'Developed By Me'
    footer_1.style.color = 'orange'
    footer_1.style.display = 'flex'
    footer_1.style.alignItems = 'center'
    footer_1.style.justifyContent = 'center'

    const footer_2 = document.createElement('a')
    footer.appendChild(footer_2)
    footer_2.className = 'fa fa-arrow-up fa-2x'
    footer_2.style.textAlign = 'right'
    footer_2.style.color = 'orange'
    footer_2.href = '#title'
    footer_2.style.textDecoration = 'none'
    footer_2.style.marginRight = '15px'
}
modifyFooter()

function mostPopulatedCountries() {
    const population = []
    for (const country of countries_data)
    {
        population.push({name: country.name, population: country.population})
    }

    const mostPopulatedCountries = population.sort((a, b) => {
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    }).slice(0, 10)

    let world = 0
    population.forEach(country => world += country.population)

    mostPopulatedCountries.unshift({name: 'World', population: world})

    return mostPopulatedCountries
}

function mostSpokenLanguages() {
    const languagesSource = []
    for (const country of countries_data)
    {
        for (const language of country.languages)
        {
            languagesSource.push(language)
        }
    }

    const occurence = languagesSource.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    } , {})

    const mostSpokenLanguages = Object.keys(occurence).map(language => ({language, count: occurence[language]}))
    .sort((a, b) => {
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
        return 0
    }).slice(0, 10)
    return mostSpokenLanguages
}

function pageFunction() {
    const name = document.querySelector('#name')
    const name_icon = document.querySelector('#name-icon')

    const capital = document.querySelector('#capital')
    const capital_icon = document.querySelector('#capital-icon')
    
    const population = document.querySelector('#population')
    const population_icon = document.querySelector('#population-icon')


    name.addEventListener('click', () => {
        name_icon.style.color = 'black'
        capital_icon.style.color = 'orange'
        population_icon.style.color = 'orange'
        if (capital_icon.className == 'fa fa-long-arrow-up')
        {
            name_icon.className = 'fa fa-long-arrow-down'
            capital_icon.className = 'fa fa-long-arrow-down'
        } else
        {
            name_icon.className = 'fa fa-long-arrow-up'
            capital_icon.className = 'fa fa-long-arrow-up'
        }
    })

    capital.addEventListener('click', () => {
        capital_icon.style.color = 'black'
        name_icon.style.color = 'orange'
        population_icon.style.color = 'orange'
        if (name_icon.className == 'fa fa-long-arrow-up')
        {
            capital_icon.className = 'fa fa-long-arrow-down'
            name_icon.className = 'fa fa-long-arrow-down'
        } else
        {
            capital_icon.className = 'fa fa-long-arrow-up'
            name_icon.className = 'fa fa-long-arrow-up'
        }
    })

    population.addEventListener('click', () => {
        population_icon.style.color = 'black'
        name_icon.style.color = 'orange'
        capital_icon.style.color = 'orange'
        if (capital_icon.className == 'fa fa-long-arrow-up')
        {
            population_icon.className = 'fa fa-long-arrow-up'
            capital_icon.className == 'fa fa-long-arrow-down'
        } else
        {
            population_icon.className = 'fa fa-long-arrow-down'
            capital_icon.className == 'fa fa-long-arrow-up'
        }
    })


    const grid_container = document.querySelector('.grid-container')
    grid_container.style.backgroundColor = 'rgb(232,232,232)'
    grid_container.style.display = 'flex'
    grid_container.style.justifyContent = 'center'
    grid_container.style.minWidth = '1500px'

    const grid_wrapper = document.createElement('div')
    grid_container.appendChild(grid_wrapper)
    grid_wrapper.style.display = 'grid'
    grid_wrapper.style.gridTemplateColumns = 'repeat(7, 200px)'
    grid_wrapper.style.columnGap = '15px'
    grid_wrapper.style.rowGap = '10px'
    grid_wrapper.style.marginTop = '10px'
    grid_wrapper.style.fontFamily = 'Montserrat'
    grid_wrapper.style.marginBottom = '10px'

    //Use to modify the layout of the grid when the feedback_data.length < 14
    const grid_wrapper_2 = document.createElement('div')
    grid_wrapper_2.className = 'grid-wrapper-2'
    grid_container.appendChild(grid_wrapper_2)

    function printTheGrid(array) {
        grid_wrapper_2.innerHTML = ''

        grid_wrapper.innerHTML = ''

        for (let i = 0; i < array.length; i++)
        {
            let country_wrapper = document.createElement('div')
            grid_wrapper.appendChild(country_wrapper)
            country_wrapper.style.backgroundColor = 'white'
    
            //Use the tag img to print the image on the screen but don't need to have a textContent
            const flag = document.createElement('img')
            country_wrapper.appendChild(flag)
            flag.src = `${array[i].flag}`
            flag.style.width = '150px'
            flag.style.height = '75px'
            flag.style.marginLeft = '25px'
            flag.style.marginTop = '30px'
    
    
            const country_name = document.createElement('div')
            country_wrapper.appendChild(country_name)
            country_name.textContent = `${array[i].name.toUpperCase()}`
            country_name.style.marginTop = '20px'
            country_name.style.marginBottom = '20px'
            country_name.style.textAlign = 'center'
            country_name.style.color = 'orange'
    
            const capital = document.createElement('div')
            country_wrapper.appendChild(capital)
            capital.textContent = `Capital: ${array[i].capital}`
            capital.style.marginLeft = '10px'
            capital.style.marginRight = '15px'
    
            const languagesArray = array[i].languages
            const languages = document.createElement('div')
            country_wrapper.appendChild(languages)
            if (languagesArray.length == 1)
            {
                languages.textContent = `Language: ${languagesArray.toString()}`
            } else
            {
                languages.textContent = `Languages: ${languagesArray.join(', ')}`
            }
            languages.style.marginLeft = '10px'
            languages.style.marginRight = '15px'
    
    
            const population = document.createElement('div')
            country_wrapper.appendChild(population)
            population.textContent = `Population: ${array[i].population.toLocaleString('EN-en')}`
            population.style.marginLeft = '10px'
            population.style.marginRight = '15px'
            population.style.marginBottom = '25px'
        }
    }

    printTheGrid(countries_data)



    printTheInitialCharts()

    const input = document.querySelector('input')
    input.addEventListener('input', e => {
        const feedback = document.querySelector('#feedback')

        if (e.target.value == '')
        {
            feedback.textContent = ''
            printTheGrid(countries_data)
            sorting(countries_data)

            printTheInitialCharts()
        } else {
        const feedback_data = countries_data.filter(country => {
            let check_data = e.target.value
            let pattern = new RegExp(check_data, 'gi')

            if (pattern.test(country.name) == true)
            {
                return country
            } else if (pattern.test(country.capital) ==  true && country.capital !== undefined)
            {
                return country
            }

            for (const language of country.languages)
            {
                if (pattern.test(language) == true)
                {
                    return country
                }
            }
        })
            feedback.textContent = `${feedback_data.length} countries satisfied the search criteria`
            feedback.style.color = 'orange'
            feedback.style.fontStyle = 'italic'
            feedback.style.marginTop = '0.5%'

            if (feedback_data.length < 14)
            {
                if (feedback_data.length <= 7)
                {
                    printTheGrid(feedback_data)

                    grid_wrapper.style.gridTemplateColumns = `repeat(${feedback_data.length}, 200px)`
                    grid_wrapper.style.columnGap = `${(1600 - (feedback_data.length * 200)) / (feedback_data.length - 1)}px`
                
                    sorting(feedback_data)
                } else
                {
                    const feedback_data_1 = feedback_data.slice(0, 7)
                    printTheGrid(feedback_data_1)

                    const feedback_data_2 = feedback_data.slice(7, feedback_data.length)

                    grid_container.style.display = 'grid'
                    
                    grid_wrapper_2.style.gridTemplateColumns = `repeat(${feedback_data_2.length}, 200px)`
                    grid_wrapper_2.style.columnGap = `${(1300 - (feedback_data_2.length * 200)) / (feedback_data_2.length - 1)}px`

                    printTheGridWrapper2(feedback_data_2)

                    function printTheGridWrapper2(array) {
                        grid_wrapper_2.innerHTML = ''
                
                        grid_wrapper_2.style.display = 'grid'
                        grid_wrapper_2.style.rowGap = '10px'
                        grid_wrapper_2.style.marginBottom = '0px'
                        grid_wrapper_2.style.fontFamily = 'Montserrat'
                        grid_wrapper_2.style.marginBottom = '10px'
                        grid_wrapper_2.style.marginLeft = '100px'                  

                        for (let i = 0; i < array.length; i++)
                        {
                            let country_wrapper = document.createElement('div')
                            grid_wrapper_2.appendChild(country_wrapper)
                            country_wrapper.style.backgroundColor = 'white'
                    
                            //Use the tag img to print the image on the screen but don't need to have a textContent
                            const flag = document.createElement('img')
                            country_wrapper.appendChild(flag)
                            flag.src = `${array[i].flag}`
                            flag.style.width = '150px'
                            flag.style.height = '75px'
                            flag.style.marginLeft = '25px'
                            flag.style.marginTop = '30px'
                    
                    
                            const country_name = document.createElement('div')
                            country_wrapper.appendChild(country_name)
                            country_name.textContent = `${array[i].name.toUpperCase()}`
                            country_name.style.marginTop = '20px'
                            country_name.style.marginBottom = '20px'
                            country_name.style.textAlign = 'center'
                            country_name.style.color = 'orange'
                    
                            const capital = document.createElement('div')
                            country_wrapper.appendChild(capital)
                            capital.textContent = `Capital: ${array[i].capital}`
                            capital.style.marginLeft = '10px'
                            capital.style.marginRight = '15px'
                    
                            const languagesArray = array[i].languages
                            const languages = document.createElement('div')
                            country_wrapper.appendChild(languages)
                            if (languagesArray.length == 1)
                            {
                                languages.textContent = `Language: ${languagesArray.toString()}`
                            } else
                            {
                                languages.textContent = `Languages: ${languagesArray.join(', ')}`
                            }
                            languages.style.marginLeft = '10px'
                            languages.style.marginRight = '15px'
                    
                    
                            const population = document.createElement('div')
                            country_wrapper.appendChild(population)
                            population.textContent = `Population: ${array[i].population.toLocaleString('EN-en')}`
                            population.style.marginLeft = '10px'
                            population.style.marginRight = '15px'
                            population.style.marginBottom = '25px'
                        }
                    }

                    //Still sorting with feedback_data instead of feeback_data_1 and feedback_data_2
                    sorting(feedback_data)
                }
            } else
            {
                grid_wrapper.style.gridTemplateColumns = 'repeat(7, 200px)'
                grid_wrapper.style.columnGap = '15px'
                printTheGrid(feedback_data)
                sorting(feedback_data)
            }

            console.log(feedback_data)


            let wordPopulation = 0
            countries_data.forEach(country => wordPopulation += country.population)
            const copiedFeedback_data = [...feedback_data]
            copiedFeedback_data.unshift({name: 'World', population: wordPopulation})

            printTheSearchedPopulationChart(copiedFeedback_data)
            const population_graph = document.querySelector('#population-graph')
            population_graph.addEventListener('click', () => { 
                printTheSearchedPopulationChart(copiedFeedback_data)
            })
            const languages_graph = document.querySelector('#languages-graph')
            languages_graph.addEventListener('click',() =>{
                printTheMostSpokenLanguagesChart()
            })
        }
    })

    function sorting(array) {
        name.addEventListener('click', () => {
            if (name_icon.className == 'fa fa-long-arrow-down')
            {
                countries_data.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })

                printTheGrid(array)
            } else
            {
                countries_data.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return 0
                })
                console.log(array)


                printTheGrid(array)
            }
        })

        capital.addEventListener('click', () => {
            if (capital_icon.className == 'fa fa-long-arrow-down')
            {
                countries_data.sort((a, b) => {
                    if (a.capital > b.capital) return 1
                    if (a.capital < b.capital) return -1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.capital > b.capital) return 1
                    if (a.capital < b.capital) return -1
                    return 0
                })

                printTheGrid(array)
            } else
            {
                countries_data.sort((a, b) => {
                    if (a.capital > b.capital) return -1
                    if (a.capital < b.capital) return 1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.capital > b.capital) return -1
                    if (a.capital < b.capital) return 1
                    return 0
                })

                printTheGrid(array)
            }
        })

        population.addEventListener('click', () => {
            if (population_icon.className == 'fa fa-long-arrow-down')
            {
                countries_data.sort((a, b) => {
                    if (a.population > b.population) return 1
                    if (a.population < b.population) return -1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.population > b.population) return 1
                    if (a.population < b.population) return -1
                    return 0
                })

                printTheGrid(array)
            } else
            {
                countries_data.sort((a, b) => {
                    if (a.population > b.population) return -1
                    if (a.population < b.population) return 1
                    return 0
                })

                array.sort((a, b) => {
                    if (a.population > b.population) return -1
                    if (a.population < b.population) return 1
                    return 0
                })

                printTheGrid(array)
            }
        })
    }

    function printTheInitialPopulationChart() {
        const graph_title = document.querySelector('#graph-title')
        graph_title.textContent = '10 Most populated countries in the world'
        graph_title.style.marginTop = '10px'
    
        const graphs = document.querySelector('.graphs')
        graphs.style.backgroundColor = 'rgb(232,232,232)'
        graphs.style.paddingTop = '20px'
        graphs.style.paddingBottom = '20px'
    
        const graph_wrapper = document.querySelector('.graph-wrapper')
        graph_wrapper.style.fontFamily = 'Montserrat'
        graph_wrapper.style.marginLeft = '15%'
        graph_wrapper.innerHTML = ''
    
        const mostPopulated = mostPopulatedCountries()

        const table_1 = document.createElement('table')
        graph_wrapper.appendChild(table_1)

        const tr_FirstLine = document.createElement('tr')
        table_1.appendChild(tr_FirstLine)

        const td1 = document.createElement('td')
        tr_FirstLine.appendChild(td1)
        td1.textContent = mostPopulated[0].name
        td1.style.width = '400px'
        td1.style.minWidth = '400px'
        td1.style.paddingTop = '0.5%'
        td1.style.paddingBottom = '0.5%'

        const td2 = document.createElement('td')
        tr_FirstLine.appendChild(td2)
        td2.style.width = '800px'
        td2.style.backgroundColor = 'orange'

        const td3 = document.createElement('td')
        tr_FirstLine.appendChild(td3)
        td3.textContent = mostPopulated[0].population.toLocaleString('EN-en')
        td3.style.textAlign = 'left'
        td3.style.paddingLeft = '0.5%'
        for (let i = 1; i < mostPopulated.length; i++)
        {
            const table = document.createElement('table')
            graph_wrapper.appendChild(table)
            
            const tr = document.createElement('tr')
            table.appendChild(tr)

            const td_1 = document.createElement('td')
            tr.appendChild(td_1)
            td_1.textContent = mostPopulated[i].name
            td_1.style.width = '400px'
            td_1.style.minWidth = '400px'
            td_1.style.paddingTop = '0.5%'
            td_1.style.paddingBottom = '0.5%'

            const td_2 = document.createElement('td')
            tr.appendChild(td_2)
            td_2.style.width = `${(mostPopulated[i].population / mostPopulated[0].population) * 800}px`
            td_2.style.backgroundColor = 'orange'

            const td_3 = document.createElement('td')
            tr.appendChild(td_3)
            td_3.style.width = `${(1 - (mostPopulated[i].population / mostPopulated[0].population)) * 800}px`

            const td_4 = document.createElement('td')
            tr.appendChild(td_4)
            td_4.textContent = mostPopulated[i].population.toLocaleString('EN-en')
            td_4.style.textAlign = 'left'
            td_4.style.paddingLeft = '0.5%'
        }
    }

    function printTheMostSpokenLanguagesChart() {
        const graph_title = document.querySelector('#graph-title')
        graph_title.textContent = '10 Most populated countries in the world'
        graph_title.style.marginTop = '10px'
    
        const graphs = document.querySelector('.graphs')
        graphs.style.backgroundColor = 'rgb(232,232,232)'
        graphs.style.paddingTop = '20px'
        graphs.style.paddingBottom = '63.5px'
    
        const graph_wrapper = document.querySelector('.graph-wrapper')
        graph_wrapper.style.fontFamily = 'Montserrat'
        graph_wrapper.style.marginLeft = '15%'
        graph_wrapper.innerHTML = ''
    
        const mostSpoken = mostSpokenLanguages()

        const table_1 = document.createElement('table')
        graph_wrapper.appendChild(table_1)

        const tr_FirstLine = document.createElement('tr')
        table_1.appendChild(tr_FirstLine)

        const td1 = document.createElement('td')
        tr_FirstLine.appendChild(td1)
        td1.textContent = mostSpoken[0].language
        td1.style.width = '400px'
        td1.style.minWidth = '400px'
        td1.style.paddingTop = '0.5%'
        td1.style.paddingBottom = '0.5%'

        const td2 = document.createElement('td')
        tr_FirstLine.appendChild(td2)
        td2.style.width = '800px'
        td2.style.backgroundColor = 'orange'

        const td3 = document.createElement('td')
        tr_FirstLine.appendChild(td3)
        td3.textContent = mostSpoken[0].count
        td3.style.textAlign = 'left'
        td3.style.paddingLeft = '0.5%'

        for (let i = 1; i < mostSpoken.length; i++)
        {
            const table = document.createElement('table')
            graph_wrapper.appendChild(table)

            const tr = document.createElement('tr')
            table.appendChild(tr)

            const td_1 = document.createElement('td')
            tr.appendChild(td_1)
            td_1.textContent = mostSpoken[i].language
            td_1.style.width = '400px'
            td_1.style.minWidth = '400px'
            td_1.style.paddingTop = '0.5%'
            td_1.style.paddingBottom = '0.5%'

            const td_2 = document.createElement('td')
            tr.appendChild(td_2)
            td_2.style.width = `${(mostSpoken[i].count / mostSpoken[0].count * 800)}px`
            td_2.style.backgroundColor = 'orange'

            const td_3 = document.createElement('td')
            tr.appendChild(td_3)
            td_3.style.width = `${(1 - (mostSpoken[i].count / mostSpoken[0].count)) * 800}px`

            const td_4 = document.createElement('td')
            tr.appendChild(td_4)
            td_4.textContent = mostSpoken[i].count
            td_4.style.textAlign = 'left'
            td_4.style.paddingLeft = '0,5%'
        }
    }

    function printTheInitialCharts() {
        printTheInitialPopulationChart()
        const population_graph = document.querySelector('#population-graph')
        population_graph.addEventListener('click', () => { 
            printTheInitialPopulationChart()
        })
        const languages_graph = document.querySelector('#languages-graph')
        languages_graph.addEventListener('click',() =>{
            printTheMostSpokenLanguagesChart()
        })
    }

    function printTheSearchedPopulationChart(copiedFeedback_data) {
        const graph_title = document.querySelector('#graph-title')
        graph_title.textContent = 'World Population'
        graph_title.style.marginTop = '10px'
    
        const graphs = document.querySelector('.graphs')
        graphs.style.backgroundColor = 'rgb(232,232,232)'
        graphs.style.paddingTop = '20px'
        graphs.style.paddingBottom = '20px'
    
        const graph_wrapper = document.querySelector('.graph-wrapper')
        graph_wrapper.style.fontFamily = 'Montserrat'
        graph_wrapper.style.marginLeft = '15%'
        graph_wrapper.innerHTML = ''
    
        const table_1 = document.createElement('table')
        graph_wrapper.appendChild(table_1)

        const tr_FirstLine = document.createElement('tr')
        table_1.appendChild(tr_FirstLine)

        const td1 = document.createElement('td')
        tr_FirstLine.appendChild(td1)
        td1.textContent = copiedFeedback_data[0].name
        td1.style.width = '400px'
        td1.style.minWidth = '400px'
        td1.style.paddingTop = '0.5%'
        td1.style.paddingBottom = '0.5%'

        const td2 = document.createElement('td')
        tr_FirstLine.appendChild(td2)
        td2.style.width = '800px'
        td2.style.backgroundColor = 'orange'

        const td3 = document.createElement('td')
        tr_FirstLine.appendChild(td3)
        td3.textContent = copiedFeedback_data[0].population.toLocaleString('EN-en')
        td3.style.textAlign = 'left'
        td3.style.paddingLeft = '0.5%'
        for (let i = 1; i < copiedFeedback_data.length; i++)
        {
            const table = document.createElement('table')
            graph_wrapper.appendChild(table)
            
            const tr = document.createElement('tr')
            table.appendChild(tr)

            const td_1 = document.createElement('td')
            tr.appendChild(td_1)
            td_1.textContent = copiedFeedback_data[i].name
            td_1.style.width = '400px'
            td_1.style.minWidth = '400px'
            td_1.style.paddingTop = '0.5%'
            td_1.style.paddingBottom = '0.5%'

            const td_2 = document.createElement('td')
            tr.appendChild(td_2)
            td_2.style.width = `${(copiedFeedback_data[i].population / copiedFeedback_data[0].population) * 800}px`
            td_2.style.backgroundColor = 'orange'

            const td_3 = document.createElement('td')
            tr.appendChild(td_3)
            td_3.style.width = `${(1 - (copiedFeedback_data[i].population / copiedFeedback_data[0].population)) * 800}px`

            const td_4 = document.createElement('td')
            tr.appendChild(td_4)
            td_4.textContent = copiedFeedback_data[i].population.toLocaleString('EN-en')
            td_4.style.textAlign = 'left'
            td_4.style.paddingLeft = '0.5%'
        }
    }
}
pageFunction()

