let skills = []


function renderSkills()
{
    document.getElementById("skillsshowcase").innerHTML = ""
    skills.forEach( (item,index) => {
        let li = document.createElement("li")
        li.innerText = item.name;
        document.getElementById("skillsshowcase").append(li)
    }) 
}

function addSkillsInput()
{
    let input = document.createElement("input")
    input.type = "text"
    input.setAttribute("data-index", skills.length)


    input.addEventListener("input", (event) => {
        let text  = event.currentTarget.value;
        let index = event.currentTarget.dataset.index
        skills[index]["name"] = text

        renderSkills();

    } )

    skills.push({"name":""})
    document.getElementById("skillsinput").append(input)
}

document.getElementById("addskills").addEventListener("click",addSkillsInput)