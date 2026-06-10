const body = document.body;

const footer = document.createElement('footer');

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = "Victor Salazar © " + thisYear;

footer.appendChild(copyright);


const skills = ['JavaScript', 'HTML', 'CSS', 'Python', 'SQL'];

const skillsSection = document.getElementById("skills")

const skillsList = skillsSection.querySelector("ul")


for (let i =0 ; i<skills.length;i++){
    let skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

let messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    let nameField = event.target.usersName.value
    let emailField = event.target.usersEmail.value
    let commentField = event.target.usersMessage.value
    console.log(nameField,emailField,commentField)
    let messageSection = document.getElementById("messages")
    let messageList =messageSection.querySelector("ul")
    let newMessage = document.createElement('li')
    newMessage.innerHTML = "<div class='message-header'><a href='mailto:" + emailField + "'>" + nameField + "</a><em>" + emailField + "</em></div><span>" + commentField + "</span>"
    let removeButton = document.createElement("button")
    removeButton.innerText="remove"
    removeButton.type = "button"
    removeButton.addEventListener("click",function(event){
        let entry = event.target.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    messageForm.reset();
});

fetch("https://api.github.com/users/victor0302/repos").then(function(response){
    return response.json()
}).then(function(data){
    let repositories = data
    console.log(repositories)
}).catch(function(error){
    console.log("Something went wrong: " + error.message)
})