class User {
  constructor(email, password) {
  this.email = email
  this.password = password
  this.inbox = []
  this.blockedlist = []
}
sendMessage(recipient) {
  let msg = new Message()

 if (!recipient.blockedlist.includes(this.email)){

  recipient.inbox.push(msg)
}
}

blocked(user) {
  this.blockedlist.push(user.email)
}

class Message {
  constructor(content) {
  this.content = prompt('Enter a message')
}
}

user1 = new User('morganfox61297@gmail.com', '11111111')
user2 = new User('fox@gmail.com', '11111111')
user3 = new User('blank@gmail.com', '11111111')

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event){
  if (event.which  == 13) {
    sendMessage()
  }
    })

function blockUser() {
let blocked = document.getElementById('block-btn')
blocked.addEventListener('block', function(event) {
  alert('You have blocked this user')
})
}

function sendMessage() {
  let text = document.getElementById('msg-content')
  let p =document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value =''
  text.focus()
}

user1form.addEventListener('submit', function(event) {
  event.preventDefault()
  sendMessage()
})
