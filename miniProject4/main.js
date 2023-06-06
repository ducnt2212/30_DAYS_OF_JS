import { asabenehChallenges2020 } from './data.js'
function changeColor() {
    let color = '#'
    for (let i = 0; i < 3; i++)
    {
        let factor = Math.floor(Math.random() * 256).toString(16)
        color += factor
    }
    return color
}
function modifyH1() {
    let titlePart1 = document.createElement('h1')
    titlePart1.textContent = asabenehChallenges2020.challengeTitle + ' in '
    titlePart1.style.textAlign = 'center'
    titlePart1.style.fontFamily = 'Arial, sans-serif'
    titlePart1.style.fontWeight = 'normal'
    document.body.appendChild(titlePart1)
    
    let titlePart2 = document.createElement('span')
    titlePart2.textContent = asabenehChallenges2020.challengeYear
    titlePart2.style.fontSize = '250%'
    titlePart1.appendChild(titlePart2)

    setInterval(() => {
        titlePart2.style.color = changeColor()
    }, 1000)
}
modifyH1()

function modifyH2() {
    let subTitle = document.createElement('h2')
    subTitle.textContent = asabenehChallenges2020.challengeSubtitle
    subTitle.style.fontFamily = 'Helvetica'
    subTitle.style.fontWeight = 'lighter'
    subTitle.style.textDecorationLine = 'underline'
    subTitle.style.textAlign = 'center'
    document.body.appendChild(subTitle)
}
modifyH2()

function modifyH3() {
    function dayAndTime() {
    let time = new Date()
    let month = time.getMonth() + 1
    switch (month) {
        case 1:
            month = 'January'
            break
        case 2:
            month ='February'
            break
        case 3:
            month = 'March'
            break
        case 4:
            month = 'April'
            break
        case 5:
            month = 'May'
            break
        case 6:
            month = 'June'
            break
        case 7:
            month = 'July'
            break
        case 8:
            month = 'August'
            break
        case 9:
            month = 'September'
            break
        case 10:
            month = 'October'
            break
        case 11:
            month = 'November'
            break
        default:
            month = 'December'
            break
    }
    let day = time.getDay()
    if (day < 10)
    {
        day = '0' + day
    }
    let year = time.getFullYear()
    let hours = time.getHours()
    if (hours < 10)
    {
        hours = '0' + hours
    }
    let minutes = time.getMinutes()
    if (minutes < 10)
    {
        minutes = '0' + minutes
    }
    let seconds = time.getSeconds()
    if (seconds < 10)
    {
        seconds = '0' + seconds
    }
    return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`
}
    let timer = document.createElement('h3')
    setInterval(() => {
        timer.textContent = dayAndTime()
    }, 1000)
    setInterval(() => {
        timer.style.backgroundColor = changeColor()
    }, 1000)
    timer.style.fontFamily = 'Helvetica'
    timer.style.fontWeight = 'lighter'
    timer.style.textAlign = 'center'
    timer.style.margin = 'auto 44% auto 44%'
    timer.style.padding = '0.5% 0.25%'
    document.body.appendChild(timer)

}
modifyH3()

function modifyH4()
{
    const dataSources = asabenehChallenges2020.challenges
    const list_container = document.createElement('ul')
    list_container.style.display = 'grid'
    list_container.style.gridTemplateColumns = 'auto auto auto'
    list_container.style.margin = '1% 20% 3% 20%'
    for (let i = 0; i < dataSources.length; i++)
    {
        //First Column
        let listPart1 = document.createElement('li')
        listPart1.textContent = dataSources[i].name
        listPart1.style.listStyleType = 'none'
        list_container.appendChild(listPart1)
        
        //Second Column
        let details = document.createElement('details')
        let summary = document.createElement('summary')
        summary.textContent = dataSources[i].name.slice(dataSources[i].name.indexOf('Of ') + 3)
        details.appendChild(summary)

        for (const topic of dataSources[i].topics)
        {
            let topicList = document.createElement('p')
            topicList.textContent = topic
            details.appendChild(topicList)
        }
        list_container.appendChild(details)
        
        //Third Column
        let status = document.createElement('div')
        status.textContent = dataSources[i].status
        status.style.textAlign = 'right'
        if (status.textContent == 'Done')
        {
            status.style.backgroundColor = 'green'
            details.style.backgroundColor = 'green'
            listPart1.style.backgroundColor = 'green'
            listPart1.style.textDecorationLine = 'underline'
        } else if(status.textContent == 'Ongoing')
        {
            status.style.backgroundColor = 'yellow'
            details.style.backgroundColor = 'yellow'
            listPart1.style.backgroundColor = 'yellow'
            listPart1.style.textDecorationLine = 'underline'
        } else
        {
            status.style.backgroundColor = 'red'
            details.style.backgroundColor = 'red'
            listPart1.style.backgroundColor = 'red'

        }
        list_container.appendChild(status)
        status.style.padding = '5%'
        details.style.padding = '5%'
        listPart1.style.padding = '5%'
        list_container.style.rowGap = '1%'
        list_container.style.fontFamily = 'Helvetica'
        list_container.style.fontWeight = 'lighter'
    }
    document.body.append(list_container)
}
modifyH4()

function modifyH5() {
    const dataSources = asabenehChallenges2020.author
    const author = document.createElement('h1')
    author.textContent = `${dataSources.firstName} ${dataSources.lastName}`
    author.style.textAlign = 'center'
    author.style.margin = '0.5% auto 0.5% auto'
    author.style.fontFamily = 'Helvetica'
    author.style.fontWeight = 'normal'
    document.body.appendChild(author)

    let container = document.createElement('div')
    author.appendChild(container)
    container.style.alignmentBaseline = 'center'
    for (let i = 0; i < dataSources.socialLinks.length; i++)
    {
        let icon = document.createElement('i')
        icon.className = dataSources.socialLinks[i].fontawesomeIcon.slice(dataSources.socialLinks[0].fontawesomeIcon.indexOf('f'), dataSources.socialLinks[i].fontawesomeIcon.lastIndexOf("\""))
        container.appendChild(icon)
        icon.style.margin = '0.5% 0.5% auto 0.1%'
    }

    const bio = document.createElement('div')
    bio.textContent = dataSources.bio
    bio.style.textAlign = 'center'
    bio.style.fontFamily = 'Helvetica'
    bio.style.fontWeight = 'lighter'
    bio.style.textIndent = '2%'
    bio.style.margin = '2% 30% auto 30%'
    document.body.appendChild(bio)
}
modifyH5()

function modifyH6() {
    const dataSources = asabenehChallenges2020.author
    const grid_container = document.createElement('div')
    grid_container.style.display = 'grid'
    grid_container.style.gridTemplateColumns = 'auto auto auto'
    document.body.appendChild(grid_container)
    let titles = document.createElement('ul')
    titles.textContent = 'Titles'
    titles.style.fontFamily = 'Helvetica'
    titles.style.display = 'inline-block'
    titles.style.fontSize = '120%'
    grid_container.appendChild(titles)
    for (let i = 0; i < dataSources.titles.length; i++)
    {
        let factor = document.createElement('li')
        factor.style.listStyleType = 'none'
        factor.textContent = dataSources.titles[i][0]
        titles.appendChild(factor)
        let factor1 = document.createElement('span')
        factor1.textContent = ' ' + dataSources.titles[i][1]
        factor.appendChild(factor1)
        factor1.style.fontWeight = 'lighter'
        factor.style.fontSize = '100%'
    }

    let skills = document.createElement('ul')
    skills.textContent = 'Skills'
    skills.style.display = 'inline-block'
    skills.style.fontFamily = 'Helvetica'
    skills.style.fontSize = '120%'
    grid_container.appendChild(skills)
    for (let i = 0; i < dataSources.skills.length; i++)
    {
        let factor = document.createElement('li')
        factor.style.listStyleType = 'none'
        factor.className = 'fa fa-check-square'
        skills.appendChild(factor)
        let factor1 = document.createElement('span')
        factor1.textContent = ' ' + dataSources.skills[i]
        factor.appendChild(factor1)
        factor.style.display = 'block'
        factor.style.color = 'green'
        factor1.style.color = 'black'
        factor.style.margin = '3% 3% 3% 0'
        factor1.style.fontFamily = 'Helvetica'
        factor1.style.fontWeight = 'lighter'
        factor.style.fontSize = '100%'
    }


    let qualifications = document.createElement('ul')
    qualifications.textContent = 'Qualifications'
    qualifications.style.display = 'inline-block'
    qualifications.style.fontFamily = 'Helvetica'
    qualifications.style.fontSize = '120%'
    grid_container.appendChild(qualifications)
    for (let i = 0; i < dataSources.qualifications.length; i++)
    {
        let factor = document.createElement('li')
        factor.style.listStyleType = 'none'
        if (dataSources.qualifications[i].includes('Ongoing'))
        {
            factor.className = 'fa fa-book'
            factor.style.color = 'blue'
    } else
        {
            factor.className = 'fa fa-graduation-cap'
            factor.style.color = 'brown'
        }
        qualifications.appendChild(factor)
        let factor1 = document.createElement('span')
        factor1.textContent = ' ' + dataSources.qualifications[i]
        factor.appendChild(factor1)
        factor.style.display = 'block'
        factor1.style.color = 'black'
        factor.style.margin = '3% 3% 3% 0'
        factor1.style.fontFamily = 'Helvetica'
        factor1.style.fontWeight = 'lighter'
        factor.style.fontSize = '100%'
    }

    grid_container.style.margin = '2% 20% auto 22.5%'
}
modifyH6()

function modifyH7() {
    const dataSources = asabenehChallenges2020.keywords
    const keywords = document.createElement('div')
    keywords.textContent = 'Keywords'
    keywords.style.fontFamily = 'Helvetica'
    keywords.style.margin = 'auto 22% auto 25%'
    keywords.style.fontSize = '120%'
    document.body.appendChild(keywords)
    
    function changeColor() {
        let color = '#'
        for (let i = 0; i < 3; i++)
        {
            let factor = Math.floor(Math.random() * 256).toString(16)
            color += factor
        }
        return color
    }
    const grid_container1 = document.createElement('div')
    grid_container1.style.gridTemplateColumns = 'repeat(8, minmax(240px, auto))'
    grid_container1.style.margin = '1% auto 1% auto'
    keywords.appendChild(grid_container1)

    for (let i = 0; i < 8; i++)
    {
        let keyword = document.createElement('div')
        keyword.textContent = '# ' + dataSources[i]
        keyword.style.minWidth = 'fit-content'
        keyword.style.maxWidth = 'fit-content'
        keyword.style.textAlign = 'center'
        keyword.style.backgroundColor = changeColor()
        keyword.style.margin = 'auto 0% auto 2%'
        keyword.style.display = 'inline'
        keyword.style.padding = '0.1% 1.8% 0.1% 0.1%'
        keyword.style.borderRadius = '25%'
        keyword.style.fontSize = '90%'
        grid_container1.appendChild(keyword)
    }
    const grid_container2 = document.createElement('div')
    grid_container2.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, auto))'
    grid_container2.style.margin = '1% auto 1% -3%'

    grid_container1.appendChild(grid_container2)

    for (let i = 8; i < 13; i++)
    {
        let keyword = document.createElement('div')
        keyword.textContent = '# ' + dataSources[i]
        keyword.style.minWidth = 'fit-content'
        keyword.style.maxWidth = 'fit-content'
        keyword.style.textAlign = 'center'
        keyword.style.backgroundColor = changeColor()
        keyword.style.margin = 'auto 0% auto 4.5%'
        keyword.style.display = 'inline'
        keyword.style.padding = '0.1% 2% 0.1% 0.1%'
        keyword.style.borderRadius = '25%'
        keyword.style.fontSize = '90%'
        grid_container2.appendChild(keyword)
    }
    const grid_container3 = document.createElement('div')
    grid_container3.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, auto))'
    grid_container3.style.margin = '1% auto 1% 4%'

    grid_container2.appendChild(grid_container3)

    for (let i = 13; i < 20; i++)
    {
        let keyword = document.createElement('div')
        keyword.textContent = '# ' + dataSources[i]
        keyword.style.minWidth = 'fit-content'
        keyword.style.maxWidth = 'fit-content'
        keyword.style.textAlign = 'center'
        keyword.style.backgroundColor = changeColor()
        keyword.style.margin = 'auto 2% auto 1%'
        keyword.style.display = 'inline'
        keyword.style.padding = '0.1% 2% 0.1% 0.1%'
        keyword.style.borderRadius = '25%'
        keyword.style.fontSize = '90%'
        grid_container3.appendChild(keyword)
    }

    const grid_container4 = document.createElement('div')
    grid_container4.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, auto))'
    grid_container4.style.margin = '1% 2% 1% 0%'
    grid_container3.appendChild(grid_container4)

    for (let i = 20; i < 26; i++)
    {
        let keyword = document.createElement('div')
        keyword.textContent = '# ' + dataSources[i]
        keyword.style.minWidth = 'fit-content'
        keyword.style.maxWidth = 'fit-content'
        keyword.style.textAlign = 'center'
        keyword.style.backgroundColor = changeColor()
        keyword.style.margin = 'auto 2% auto 1%'
        keyword.style.display = 'inline'
        keyword.style.padding = '0.1% 2.5% 0.2% 0.1%'
        keyword.style.borderRadius = '25%'
        keyword.style.fontSize = '90%'
        grid_container4.appendChild(keyword)
    }
    const grid_container5 = document.createElement('div')
    grid_container5.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, auto))'
    grid_container5.style.margin = '1% 2% 1% 0%'
    grid_container4.appendChild(grid_container5)

    for (let i = 26; i < 32; i++)
    {
        let keyword = document.createElement('div')
        keyword.textContent = '# ' + dataSources[i]
        keyword.style.minWidth = 'fit-content'
        keyword.style.maxWidth = 'fit-content'
        keyword.style.textAlign = 'center'
        keyword.style.backgroundColor = changeColor()
        keyword.style.margin = 'auto 2% auto 1%'
        keyword.style.display = 'inline'
        keyword.style.padding = '0.1% 2.5% 0.1% 0.1%'
        keyword.style.borderRadius = '25%'
        keyword.style.fontSize = '90%'
        grid_container5.appendChild(keyword)
    }

}
/*Cannot use loop, we should print each line and its single item
The length of keywords has been changed from 32 to 35*/
modifyH7()