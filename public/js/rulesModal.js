const rulesModal = document.querySelector('.rules-modal')
const buttonRules = document.querySelector('#rules')
const buttonClose =  document.querySelector('#close')


buttonClose.addEventListener('click', () => {
  rulesModal.classList.remove('active')
})

buttonRules.addEventListener('click', () => {
  rulesModal.classList.add('active')
})