// ============================================
// Footer - Build copyright with current year
// ============================================
const body = document.body;

const footer = document.createElement('footer');

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = "Victor Salazar © " + thisYear;

footer.appendChild(copyright);


// ============================================
// Skills - Insert array items as list of skills
// ============================================
const skills = ['JavaScript', 'HTML', 'CSS', 'Python', 'SQL'];

const skillsSection = document.getElementById("Skills")

const skillsList = skillsSection.querySelector("ul")


for (let i =0 ; i<skills.length;i++){
    let skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

// ============================================
// Leave a Message - Handle form submission and
// add the message to the messages list
// ============================================
let messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit",function(event){
    // Stop the page from reloading on submit
    event.preventDefault();
    let nameField = event.target.usersName.value
    let emailField = event.target.usersEmail.value
    let commentField = event.target.usersMessage.value
    console.log(nameField,emailField,commentField)
    let messageSection = document.getElementById("messages")
    let messageList =messageSection.querySelector("ul")
    // Build the message card: name as a mailto link, email, and message text
    let newMessage = document.createElement('li')
    newMessage.innerHTML = "<div class='message-header'><a href='mailto:" + emailField + "'>" + nameField + "</a><em>" + emailField + "</em></div><span>" + commentField + "</span>"
    // Remove button deletes the message from the list when clicked
    let removeButton = document.createElement("button")
    removeButton.innerText="remove"
    removeButton.type = "button"
    removeButton.addEventListener("click",function(event){
        let entry = event.target.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    // Clear the form fields after submitting
    messageForm.reset();
});

// ============================================
// Projects - Fetch GitHub repos and render them
// as list items in the projects section
// ============================================
let projectSection = document.getElementById("Projects")
let projectList = projectSection.querySelector("ul")

fetch("https://api.github.com/users/victor0302/repos").then(function(response){
    return response.json()
}).then(function(data){
    let repositories = data
    console.log(repositories)
    // Loop through each repo and add a clickable link to its GitHub page
    for (let i=0; i < repositories.length; i++){
    let project = document.createElement('li')
    let projectLink = document.createElement('a')
    projectLink.href = repositories[i].html_url
    projectLink.innerText = repositories[i].name
    projectLink.target = "_blank"
    project.appendChild(projectLink)
    projectList.appendChild(project)
}
}).catch(function(error){
    console.log("Something went wrong: " + error.message)
})
