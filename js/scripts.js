const btnElement =document.querySelector('#primaryNav > button')
const navElement =document.querySelector('#primaryNav > ul')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})
// inject right year
const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear()