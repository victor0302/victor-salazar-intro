const fixturesBtn = document.getElementById("fixturesBtn")
const standingsBtn = document.getElementById("standingsBtn")
const results = document.getElementById("results")

function showLoading() {
    results.innerHTML = `<p class="loading">Loading...</p>`
}

function showError(error) {
    results.innerHTML = `<p class="error">Something went wrong: ${error.message}</p>`
}

fixturesBtn.addEventListener("click", function () {
    showLoading()

    fetch("https://v3.football.api-sports.io/fixtures?league=1&season=2022", {
        headers: {
            "x-apisports-key": API_KEY
        }
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        let html = "<h2>Fixtures</h2><ul>"
        data.response.forEach(function (fixture) {
            const date = new Date(fixture.fixture.date).toLocaleDateString()
            html += `<li>${date} — ${fixture.teams.home.name} ${fixture.goals.home} - ${fixture.goals.away} ${fixture.teams.away.name}</li>`
        })
        html += "</ul>"
        results.innerHTML = html
    }).catch(showError)
})

standingsBtn.addEventListener("click", function () {
    showLoading()

    fetch("https://v3.football.api-sports.io/standings?league=1&season=2022", {
        headers: {
            "x-apisports-key": API_KEY
        }
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        let html = ""
        const standings = data.response[0].league.standings

        standings.forEach(function (group) {
            html += `<h2>${group[0].group}</h2>`
            html += "<ul>"
            group.forEach(function (team) {
                html += `<li>${team.rank}. ${team.team.name} — ${team.points} pts (${team.all.win}W ${team.all.draw}D ${team.all.lose}L)</li>`
            })
            html += "</ul>"
        })
        results.innerHTML = html
    }).catch(showError)
})
