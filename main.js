class User {
  constructor(email, password) {
  this.email = email
  this.password = password
  this.inbox = []
}
sendMessage(recipient) {
  let msg = new Message()
  console.log('Message sent: ' + msg.content)
  recipient.inbox.push(msg)
}
}

class Message {
  constructor(content) {
  this.content = prompt('Enter a message')
}
}

user1 = new User('morganfox61297@gmail.com', '11111111')
user2 = new User('fox@gmail.com', '11111111')
