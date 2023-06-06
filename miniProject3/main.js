function createH1() {
    const title = document.createElement('h1')
    title.textContent = 'word countries list'.toUpperCase()
    title.style.textAlign = 'center'
    title.style.fontFamily = 'Arial'
    title.style.fontSize = '1.5cm'
    title.style.fontWeight = '400'
    title.style.marginTop = '0px'
    title.style.marginBottom = '0px'
    document.body.appendChild(title)
}
createH1()

import { countries_data } from './countriesMiniProject3.js'
const countries_name = countries_data.map(country => country.name.toUpperCase())
let totalNumberOfCountries = countries_name.length
function createH2() {
    const statement = document.createElement('h2')
    statement.textContent = `Total Number of countries: ${totalNumberOfCountries}`
    statement.style.textAlign = 'center'
    statement.style.margin = '0px'
    statement.style.fontFamily = 'Arial'
    document.body.appendChild(statement)
}
createH2()

function createH3() {
    const subtitle1 = document.createElement('h3')
    subtitle1.textContent = '30DaysOfJavaSCript:DOM-Day-2'
    subtitle1.style.textAlign = 'center'
    subtitle1.style.margin = '0px'
    subtitle1.style.fontWeight = '100'
    document.body.appendChild(subtitle1)

    const subtitle2 = document.createElement('h3')
    subtitle2.textContent = 'Author: Asabeneh Yetayeh'
    subtitle2.style.textAlign = 'center'
    subtitle2.style.margin = '0px'    
    subtitle2.style.fontWeight = '100'
    document.body.appendChild(subtitle2)
}
createH3()

function createGirdOfCountries() {
    const grid_container = document.createElement('div')
    grid_container.style.display = 'grid'
    grid_container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'

    for (let i = 0; i < totalNumberOfCountries; i++)
    {
        let country = document.createElement('div')
        country.className = 'country'
        country.innerHTML = countries_name[i]
        country.style.border = 'thin solid gray'
        country.style.padding = '70px 1% 70px 1%'
        country.style.textAlign = 'center'
        country.style.borderRadius = '4px'
        grid_container.appendChild(country)
    }
    grid_container.style.width = '50%'
    grid_container.style.margin = 'auto auto auto 25%'
    grid_container.style.rowGap = '0.1%'
    grid_container.style.columnGap = '1%'
    grid_container.style.marginTop = '6%'
    grid_container.style.justifyContent = 'center'
    document.body.append(grid_container)
}
createGirdOfCountries()