// get my elements
const newBtn = document.getElementById("new-btn")
const saveBtn = document.getElementById("save-btn")
const clearBtn = document.getElementById("clear-btn")
const textarea = document.getElementById("textarea")
const displayNotes = document.getElementById("display-notes")
// save btn
saveBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.textContent = textarea.value
    div.append(p)
    div.classList.add("div")
    p.classList.add("saved-text")
    displayNotes.appendChild(div)
})
