import { countries_data } from './countries_data.js'


function modifyHeader() {    
    const header = document.querySelector('header')
    header.style.fontFamily = 'Montserrat'
    header.style.backgroundColor = 'rgb(232,232,232)'
    header.style.paddingTop = '0.5%'

    const title = document.querySelector('h2')
    title.style.color = 'orange'
    title.style.textAlign = 'center'
    title.style.fontSize = '1.2cm'
    title.style.marginBottom = '0%'
    title.style.marginTop ='1%'

    const subtitle = document.querySelector('.subtitle')
    subtitle.textContent = `Currently, we have ${countries_data.length} countries`
    subtitle.style.textAlign = 'center'
    subtitle.style.paddingBottom = '1%'
}
modifyHeader()

function modifyButton() {
    const graph_button = document.querySelector('.graph-button')
    graph_button.style.textAlign = 'center'
    graph_button.style.marginTop = '1.5%'

    const population = document.querySelector('.population')
    population.textContent = population.textContent.toUpperCase()
    population.style.fontFamily = 'Montserrat'
    population.style.backgroundColor = 'orange'
    population.style.padding = '0.35% 1%'
    population.style.borderStyle = 'none'
    population.style.borderRadius = '5%'
    population.style.marginRight = '0.1%'

    const languages = document.querySelector('.languages')
    languages.textContent = languages.textContent.toUpperCase()
    languages.style.fontFamily = 'Montserrat'
    languages.style.backgroundColor = 'orange'
    languages.style.padding = '0.35% 1%'
    languages.style.borderStyle = 'none'
    languages.style.borderRadius = '5%'
    languages.style.marginLeft = '0.1%'

    const graph_title = document.querySelector('.graph-title')
    graph_title.style.textAlign = 'center'
    graph_title.style.fontFamily = 'Montserrat'
    graph_title.style.marginTop = '1'

    graph_title.textContent = '10 Most populated countries in the world'

    population.addEventListener('click', () => {
        graph_title.textContent = '10 Most populated countries in the world'
    })
    languages.addEventListener('click', () => {
        graph_title.textContent = '10 Most Spoken languages in the world'
    })
}
modifyButton()

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
        let language = cur
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    const mostSpokenLanguages = Object.keys(occurence).map(language => ({language, count: occurence[language]}))
.sort((a, b) => {
    if (a.count > b. count) return -1
    if (a.count < b.count) return 1
    return 0
}).slice(0,10)
    return mostSpokenLanguages
}

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
    population.forEach((country) => world += country.population)
    
    mostPopulatedCountries.unshift({name: 'World', population: world})
    
    for (const country of mostPopulatedCountries)
    {
        if (country.name == 'United States of America')
        {
            country.name = 'USA'
        }
        if (country.name == 'Russian Federation')
        {
            country.name = 'Russia'
        }
    }

    return  mostPopulatedCountries
}

function modifyGraph() {
    const graphs = document.querySelector('.graphs')
    graphs.style.backgroundColor = 'rgb(232,232,232)'
    graphs.style.paddingTop = '2%'


    const graph_wrapper = document.querySelector('.graph-wrapper')
    graph_wrapper.style.fontFamily = 'Montserrat'
    graph_wrapper.style.marginLeft = '20%'
    graph_wrapper.style.marginRight = '15%'
    graph_wrapper.style.fontSize = '0.5cm'


    function printThePopulationChart() {
        graphs.style.paddingBottom = '3%'
        const mostPopulated = mostPopulatedCountries()
        const table = document.createElement('table')
        graph_wrapper.appendChild(table)
        
        const tr_FirstLine = document.createElement('tr')
        table.appendChild(tr_FirstLine)
        
        const td1 = document.createElement('td')
        tr_FirstLine.appendChild(td1)
        td1.textContent = mostPopulated[0].name
        td1.style.width = '200px'
        td1.style.minWidth = '200px' //Make the chart not be distorted when minimize or maximize the broswer's screen          
        td1.style.paddingTop = '1.2%'
        td1.style.paddingBottom = '1.2%'
        
        const td2 = document.createElement('td')
        tr_FirstLine.appendChild(td2)
        td2.style.width = '800px'
        td2.style.backgroundColor = 'orange'

        const td3 = document.createElement('td')
        tr_FirstLine.appendChild(td3)
        td3.textContent = mostPopulated[0].population.toLocaleString('EN-en')
        td3.style.textAlign = 'left'
        td3.style.paddingLeft = '5%'

        for (let i = 1; i < mostPopulated.length; i++)
        {
            const table = document.createElement('table')
            graph_wrapper.appendChild(table)

            const tr = document.createElement('tr')
            table.appendChild(tr)

            const td_1 = document.createElement('td')
            tr.appendChild(td_1)
            td_1.textContent = mostPopulated[i].name
            td_1.style.width = '200px'
            td_1.style.minWidth = '200px' //Make the chart not be distorted when minimize or maximize the broswer's screen
            td_1.style.paddingTop = '1.2%'
            td_1.style.paddingBottom = '1.2%'


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
            td_4.style.paddingLeft = '5%'
        }

    }
    printThePopulationChart()

    function printTheSpokenLanguagesChart() {
        graphs.style.paddingBottom = '5.3%'
        const mostSpoken = mostSpokenLanguages()
        const table = document.createElement('table')
        graph_wrapper.appendChild(table)

        const tr_FirstLine = document.createElement('tr')
        table.appendChild(tr_FirstLine)
        
        const td1 = document.createElement('td')
        tr_FirstLine.appendChild(td1)
        td1.textContent = mostSpoken[0].language
        td1.style.width = '200px'
        td1.style.minWidth = '200px' //Make the chart not be distorted when minimize or maximize the broswer's screen           
        td1.style.paddingTop = '1.5%'
        td1.style.paddingBottom = '1.5%'
        
        const td2 = document.createElement('td')
        tr_FirstLine.appendChild(td2)
        td2.style.width = '700px'
        td2.style.backgroundColor = 'orange'

        const td3 = document.createElement('td')
        tr_FirstLine.appendChild(td3)
        td3.textContent = mostSpoken[0].count
        td3.style.textAlign = 'left'
        td3.style.paddingLeft = '5%'

        for (let i = 1; i < mostSpoken.length; i++)
        {
            const table = document.createElement('table')
            graph_wrapper.appendChild(table)

            const tr = document.createElement('tr')
            table.appendChild(tr)

            const td_1 = document.createElement('td')
            tr.appendChild(td_1)
            td_1.textContent = mostSpoken[i].language
            td_1.style.width = '200px'
            td_1.style.minWidth = '200px' //Make the chart not be distorted when minimize or maximize the broswer's screen
            td_1.style.paddingTop = '1.5%'
            td_1.style.paddingBottom = '1.5%'


            const td_2 = document.createElement('td')
            tr.appendChild(td_2)
            td_2.style.width = `${(mostSpoken[i].count / mostSpoken[0].count) * 700}px`
            td_2.style.backgroundColor = 'orange'


            const td_3 = document.createElement('td')
            tr.appendChild(td_3)
            td_3.style.width = `${(1 - (mostSpoken[i].count / mostSpoken[0].count)) * 700}px`


            const td_4 = document.createElement('td')
            tr.appendChild(td_4)
            td_4.textContent = mostSpoken[i].count
            td_4.style.textAlign = 'left'
            td_4.style.paddingLeft = '5%'
        }
    }

    const population_button = document.querySelector('.population')
    population_button.addEventListener('click', () => {
        if (graph_wrapper.innerHTML != '')
        {
            graph_wrapper.innerHTML = ''
            printThePopulationChart()
        }
    })

    const languages_button = document.querySelector('.languages')
    languages_button.addEventListener('click', () => {
        if (graph_wrapper.innerHTML != '')
        {
            graph_wrapper.innerHTML = ''
            printTheSpokenLanguagesChart()
        }
    })
}
modifyGraph()