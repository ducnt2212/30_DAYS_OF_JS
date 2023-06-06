const leaderboardData = [
    {
        firstName: 'Martha',
        lastName: 'Yohanes',
        country: 'Finland',
        playerScore: '85',
        establishedDate: 'JAN 30, 2020 01:09'
    },
    {
        firstName: 'David',
        lastName: 'Smith',
        country: 'United Kingdom',
        playerScore: '80',
        establishedDate: 'JAN 30, 2020 01:09'

    },
    {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        playerScore: '75',
        establishedDate: 'JAN 30, 2020 01:09'

    },
    {
        firstName: 'Mathias',
        lastName: 'Elias',
        country: 'Sweden',
        playerScore: '70',
        establishedDate: 'JAN 30, 2020 01:09'
    },
]

function modifyHeader() {
    const header = document.querySelector('header')
    header.style.fontFamily = 'Arial'
    header.style.textAlign = 'center'
    header.style.minWidth = '900px'

    const h1 = document.querySelector('h1')
    h1.style.fontWeight = '100'
    h1.style.fontSize = '0.75cm'

    const firstName = document.querySelector('#first-name')
    firstName.style.border = 'thin solid rgb(235, 188, 188)'
    firstName.style.padding = '10px'
    firstName.style.fontSize = '15px'
    firstName.style.width = '7.9%'

    const lastName = document.querySelector('#last-name')
    lastName.style.border = 'thin solid rgb(235, 188, 188)'
    lastName.style.padding = '10px'
    lastName.style.fontSize = '15px'
    lastName.style.width = '7.9%'

    const country = document.querySelector('#country')
    country.style.border = 'thin solid rgb(235, 188, 188)'
    country.style.padding = '10px'
    country.style.fontSize = '15px'
    country.style.width = '7.9%'

    const playerScore = document.querySelector('#player-score')
    playerScore.style.border = 'thin solid rgb(235, 188, 188)'
    playerScore.style.padding = '10px'
    playerScore.style.fontSize = '15px'
    playerScore.style.width = '7.9%'

    const addPlayer = document.querySelector('#add-player')
    addPlayer.style.backgroundColor = 'rgb(235, 188, 188)'
    addPlayer.style.borderStyle = 'none'
    addPlayer.style.color = 'white'
    addPlayer.style.padding = '10px 20px'
    addPlayer.style.fontSize = '15px'
    addPlayer.style.width = '6%'
    addPlayer.style.minWidth = '114px'
}
modifyHeader()

function getDate() {
    let now = new Date()
    let month = now.getMonth() + 1
    switch (month) {
        case 1:
            month = 'JAN'
            break;
        case 2:
            month = 'FEB'
            break;
        case 3:
            month = 'MAR'
            break;
        case 4:
            month = 'APR'
            break;
        case 5:
            month = 'MAY'
            break;
        case 6:
            month = 'JUN'
            break;
        case 7:
            month = 'JUL'
            break;
        case 8:
            month = 'AUG'
            break;
        case 9:
            month = 'SEP'
            break;
        case 10:
            month = 'OCT'
            break;
        case 11:
            month = 'NOV'
            break;
        default:
            month = 'DEC'
            break;
    }
    let date = now.getDate()
    let year = now.getFullYear()
    let hours = now.getHours()
    hours < 10 ? hours = '0' + hours : hours
    let minutes = now.getMinutes()
    minutes < 10 ? minutes = '0' + minutes : minutes
    return `${month} ${date}, ${year} ${hours}:${minutes}`
}

function pageFunction() {
    const addPlayer = document.querySelector('#add-player')
    
    const firstName = document.querySelector('#first-name')
    
    const lastName = document.querySelector('#last-name')
    
    const country = document.querySelector('#country')
    
    const playerScore = document.querySelector('#player-score')
    
    const feedback = document.querySelector('#feedback')
    feedback.style.color = 'red'
    feedback.style.marginTop = '20px'
    feedback.style.marginBottom = '20px'
    feedback.style.fontWeight = '900'

    addPlayer.addEventListener('click', () => {
        if (firstName.value == '' || lastName.value == '' || country.value == '' || playerScore.value == '')
        {
            feedback.textContent = 'All fields are required'
        } else
        {
            feedback.textContent = ''
            leaderboardData.push({firstName: firstName.value, lastName: lastName.value, country: country.value, playerScore: playerScore.value, establishedDate: getDate()})
            leaderboardData.sort((a, b) => {
                if (+a.playerScore > +b.playerScore) return -1
                if (+a.playerScore < +b.playerScore) return 1
                return 0
            })
        printTheGrid()
        }
    })

    function printTheGrid() {
        const leaderboardGridContainer = document.querySelector('#leaderboard-grid-container')
        leaderboardGridContainer.style.display = 'flex'
        leaderboardGridContainer.style.justifyContent = 'center'
        leaderboardGridContainer.style.minWidth = '920px'
        leaderboardGridContainer.style.fontFamily = 'Arial'
        leaderboardGridContainer.innerHTML = ''

        const leaderboardGridWrapper = document.createElement('div')
        leaderboardGridContainer.appendChild(leaderboardGridWrapper)
        leaderboardGridWrapper.style.display = 'grid'
        leaderboardGridWrapper.style.gridTemplateColumns = '225px 225px 175px 195px'
        leaderboardGridWrapper.style.rowGap = '5px'

        for (let i = 0; i < leaderboardData.length; i++)
        {
            const fullName = document.createElement('div')
            leaderboardGridWrapper.appendChild(fullName)
            fullName.textContent = `${leaderboardData[i].firstName.toUpperCase()} ${leaderboardData[i].lastName.toUpperCase()}`
            fullName.style.backgroundColor = 'rgb(235, 188, 188)'
            fullName.style.paddingTop = '10px'
            fullName.style.paddingBottom = '10px'
            fullName.style.paddingLeft = '7.5px'
            const establishedDate = document.createElement('span')
            fullName.appendChild(establishedDate)
            establishedDate.textContent = leaderboardData[i].establishedDate
            establishedDate.style.color = 'gray'
            establishedDate.style.fontSize = '12.5px'
            establishedDate.style.marginTop = '7.5px'
            establishedDate.style.display = 'flex'
    
    
            const country = document.createElement('div')
            leaderboardGridWrapper.appendChild(country)
            country.textContent = `${leaderboardData[i].country.toUpperCase()}`
            country.style.backgroundColor = 'rgb(235, 188, 188)'
            country.style.paddingTop = '5px'
            country.style.paddingBottom = '5px'
            country.style.paddingLeft = '5px'
            country.style.display = 'flex'
            country.style.alignItems = 'center'
    
    
            const playerScore = document.createElement('div')
            leaderboardGridWrapper.appendChild(playerScore)
            playerScore.textContent = leaderboardData[i].playerScore
            playerScore.style.backgroundColor = 'rgb(235, 188, 188)'
            playerScore.style.paddingTop = '5px'
            playerScore.style.paddingBottom = '5px'
            playerScore.style.paddingLeft = '5px'
            playerScore.style.display = 'flex'
            playerScore.style.alignItems = 'center'

    
            const button = document.createElement('div')
            leaderboardGridWrapper.appendChild(button)
            button.style.backgroundColor = 'rgb(235, 188, 188)'
            button.style.paddingTop = '5px'
            button.style.paddingBottom = '5px'
            button.style.paddingLeft = '5px'
            button.style.display = 'flex'
            button.style.alignItems = 'center'

    
            const delete_button = document.createElement('div')
            button.appendChild(delete_button)
            delete_button.style.display = 'inline-block'
            delete_button.style.marginRight = '5px'
            const delete_icon = document.createElement('div')
            delete_button.appendChild(delete_icon)
            delete_icon.className = 'fa fa-trash-o'
            delete_icon.style.backgroundColor = 'white'
            delete_icon.style.height = '25px'
            delete_icon.style.width = '25px'
            delete_icon.style.borderRadius = '50%'
            delete_icon.style.color = 'red'
            delete_icon.style.display = 'flex'
            delete_icon.style.justifyContent = 'center'
            delete_icon.style.alignItems = 'center'
            delete_icon.style.padding = '10px'
            delete_button.addEventListener('click', () => {
                leaderboardData.splice(i, 1)
                printTheGrid()
            })
            delete_button.addEventListener('mouseover', () => {
                delete_icon.style.backgroundColor = 'palegreen'
                delete_button.addEventListener('mouseleave', () => {
                    delete_icon.style.backgroundColor = 'white'
                })
            })
    
            const plusScore_button = document.createElement('div')
            button.appendChild(plusScore_button)
            plusScore_button.style.display = 'inline-block'
            plusScore_button.style.marginRight = '5px'
            const plusScore_icon = document.createElement('div')
            plusScore_button.appendChild(plusScore_icon)
            plusScore_icon.textContent = '+5'
            plusScore_icon.style.backgroundColor = 'white'
            plusScore_icon.style.height = '25px'
            plusScore_icon.style.width = '25px'
            plusScore_icon.style.borderRadius = '50%'
            plusScore_icon.style.display = 'flex'
            plusScore_icon.style.justifyContent = 'center'
            plusScore_icon.style.alignItems = 'center'
            plusScore_icon.style.padding = '10px'
            plusScore_icon.style.fontSize = '15px'
            plusScore_button.addEventListener('click', () => {
                leaderboardData[i].playerScore = (parseInt(leaderboardData[i].playerScore) + 5).toString()
                leaderboardData.sort((a, b) => {
                    if (+a.playerScore > +b.playerScore) return -1
                    if (+a.playerScore < +b.playerScore) return 1
                    return 0
                })
                printTheGrid()
            })
            plusScore_button.addEventListener('mouseover', () => {
                plusScore_icon.style.backgroundColor = 'palegreen'
                plusScore_button.addEventListener('mouseleave', () => {
                    plusScore_icon.style.backgroundColor = 'white'
                })
            })
    
            const minusScore_button = document.createElement('div')
            button.appendChild(minusScore_button)
            minusScore_button.style.display = 'inline-block'
            const minusScore_icon = document.createElement('div')
            minusScore_button.appendChild(minusScore_icon)
            minusScore_icon.textContent = '-5'
            minusScore_icon.style.backgroundColor = 'white'
            minusScore_icon.style.height = '25px'
            minusScore_icon.style.width = '25px'
            minusScore_icon.style.borderRadius = '50%'
            minusScore_icon.style.display = 'flex'
            minusScore_icon.style.justifyContent = 'center'
            minusScore_icon.style.alignItems = 'center'
            minusScore_icon.style.padding = '10px'
            minusScore_icon.style.fontSize = '15px'
            minusScore_button.addEventListener('click', () => {
                leaderboardData[i].playerScore = (parseInt(leaderboardData[i].playerScore) - 5).toString()
                leaderboardData.sort((a, b) => {
                    if (+a.playerScore > +b.playerScore) return -1
                    if (+a.playerScore < +b.playerScore) return 1
                    return 0
                })
                printTheGrid()
            })
            minusScore_button.addEventListener('mouseover', () => {
                minusScore_icon.style.backgroundColor = 'palegreen'
                minusScore_button.addEventListener('mouseleave', () => {
                    minusScore_icon.style.backgroundColor = 'white'
                })
            })
        }    
    }
    printTheGrid()
}
pageFunction()