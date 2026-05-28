// get my elements
const newBtn = document.getElementById("new-btn")
const saveBtn = document.getElementById("save-btn")
const clearBtn = document.getElementById("clear-btn")
const textarea = document.getElementById("textarea")
const displayNotes = document.getElementById("display-notes")
// save btn
saveBtn.addEventListener("click", (event)=>{
    // stoped browser default
    event.preventDefault()
    // created new elements to hold the textareas value
    const div = document.createElement("div")
    const p = document.createElement("p")
    // kept the note in a p tag 
    p.textContent = textarea.value
    // appended the p tag to the div so it can have a lovely background color 😘
    div.append(p)
    // gave the div a class so it can look beautiful 💞
    div.classList.add("div")
    //  gave the p a class so it can look beautiful 😍
    p.classList.add("saved-text")
    // working on delete btn ⏱️
    const delete_btn = document.createElement("button")
    // made the note visible on the body👁️   
    displayNotes.appendChild(div)
    // after saving the textarea will be empty🫥 
    textarea.value = ""
    // stopped displayind empty notes🛑
    if(p.textContent === ""){
       displayNotes.removeChild(div) 
    }

})
// event listener for clear btn
clearBtn.addEventListener("click", () => {
    displayNotes.innerHTML = ""
})
// event listener for new btn
newBtn.addEventListener("click", ()=>{
     textarea.value = ""
})