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
    messageForm.reset();
    
});