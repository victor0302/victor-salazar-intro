
const fixturesBtn = document.getElementById("fixturesBtn")
const standingsBtn = document.getElementById("standingsBtn")
const results =  document.getElementById("results")

fixturesBtn.addEventListener("click",function(){

fetch("https://v3.football.api-sports.io/fixtures?league=1&season=2022",{
    headers:{
        "x-apisports-key": API_KEY
    }
    }).then(function(response){
        return response.json()
    }).then(function(data){
        let html = "<ul>"
        data.response.forEach(function(fixture){
            html += `<li> ${fixture.teams.home.name} vs ${fixture.teams.away.name} - Score: ${fixture.goals.home} - ${fixture.goals.away} </li>`
        })
        html += "</ul>"
        results.innerHTML = html
    }).catch(function(error){
        console.log("Something went wrong: " + error.message)
    })

    })

standingsBtn.addEventListener("click",function(){

fetch(" https://v3.football.api-sports.io/standings?league=1&season=2022",{
    headers:{
        "x-apisports-key": API_KEY
    }
    }).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        results.innerHTML =""
        let html = ""
        const standings = data.response[0].league.standings

        standings.forEach(function(group){
            html += `<h2>${group[0].team.name}</h2>`
            html += "<ul>"

        })
        
    }).catch(function(error){
        console.log("Something went wrong: " + error.message)
    })

    })