// Write your code here!
const mainRemove = document.getElementsByTagName('main')
mainRemove[0].remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory' 
newHeader.textContent = 'ray is the champion'
document.body.append(newHeader)


console.log(newHeader)

