const ballContainer = document.querySelector('#ball-container')
const question = document.querySelector('#question')
const shakeButton = document.querySelector('#shake-button')

let answer = null

const messages = [
    'It is certain',
    'Most likely',
    'Yes',
    'No',
    'Most unlikely',
    'Please ask again',
    'Try again'
]

const createAnswer = () => {
const answerElement = document.createElement('p')

answerElement.classList.add('fade', 'text-center', 'fs-3', 'fw-bold', 'display-4', 'bg-warning', 'px-2', 'py-3' , 'rounded', 'text-white', 'w-50', 'position-absolute', 'top-50', 'start-50', 'translate-middle')

const seed = Math.random() * messages.length - 1
const randomIndex = seed > 0 ? Math.floor(seed) : Math.ceil(seed)


answerElement.innerText = messages[randomIndex]

return answerElement
}

const shakeBall = () => {
    ballContainer.classList.add('shake')
if (answer) answer.remove()

answer = createAnswer()

setTimeout(()=>{
    ballContainer.classList.remove('shake')
    ballContainer.append(answer)
}, 1000)


}

const checkQuestion = () => {
    return question.value.length > 0
}

shakeButton.addEventListener('click', () => {
    if(checkQuestion()) shakeBall()
})


question.addEventListener('keyup', (e) => {
    shakeButton.disabled = !checkQuestion()

    if (e.key === 'Enter' && checkQuestion()) shakeBall() 
})




//answer.remove()