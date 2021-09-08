const start = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeLeft = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = [
  '#EAC435',
  '#FB4D3D',
  '#662C91',
  '#17A398',
  '#F71735',
  '#FF0022',
]
let time = 0
let score = 0

start.addEventListener('click', (e) => {
  e.preventDefault()
  screens[0].classList.add('up')
})

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = +e.target.getAttribute('data-time')
    screens[1].classList.add('up')
    startGame()
  }
})

function setTime(time) {
  timeLeft.innerHTML = `00:${time}`
}

function decreeseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (time < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function startGame() {
  setTime(time)
  createRandomCircle()
  setInterval(decreeseTime, 1000)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor(colors) {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const { width, height } = board.getBoundingClientRect()
  const size = getRandomNumber(10, 60)
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.backgroundColor = getRandomColor(colors)

  board.append(circle)
}

function finishGame() {
  timeLeft.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span> </h1>`
}
