const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})+$/;
const mobileregex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const form =document.querySelector('#login')
const inputEm = document.querySelector('#inputEm')
const err = document.querySelector('#err')
err.style.color = 'red'

form.addEventListener('submit',(event)=>{
    event.preventDefault()

    const resEmail = emailRegex.test(inputEm.value)
    const resMobile = mobileregex.test(inputEm.value)
    // console.log(resEmail || resMobile)
    if(!(resEmail || resMobile)){
        err.innerHTML = 'لطفا مقدار صحیح رو وارد نمایید'
        inputEm.style.border = 'red 1px solid'
    }else{
        err.innerHTML = ''
        inputEm.style.border = 'green 1px solid'
    }
})