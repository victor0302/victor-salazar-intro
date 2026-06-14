
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
        console.log(data)
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
    }).catch(function(error){
        console.log("Something went wrong: " + error.message)
    })

    })