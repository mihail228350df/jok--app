const buttonYes = document.querySelector('.button_yes')
const button_No = document.querySelector('.button_no')
const title = document.querySelector('.title')

buttonYes.addEventListener('click', () => {
    title.textContent = 'Я так и знал!'
})

button_No.addEventListener('clic', () => {
    button_No.style.display = 'none'
    title.textContent = 'Отвеn не верный!'
    setTimeout(() => {
      title.textContent = 'Ты дурак?'
    }, 2000)
})