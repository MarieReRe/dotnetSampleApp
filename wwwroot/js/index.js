let message = []
const messageInput = document.getElementById("text-input")
const submitButton = document.getElementById("submit-button")
const messageOutput = document.getElementById("text-output")

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    message.push(messageInput.value)
    messageInput.value = ""
    console.log(message)

let messagelist = ""
for(let i = 0; i < message.length; i++){
    messagelist += "<li>" + message[i] + "</li>"
}
messageOutput.innerHTML = messagelist
})