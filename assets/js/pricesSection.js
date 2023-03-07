const basic = document.getElementById('basic')
const standard = document.getElementById('standard')
const proCare = document.getElementById('proCare')
const itemBasic = document.querySelector('.basic_item')
const itemStandard = document.querySelector('.standard_item')
const itemPro = document.querySelector('.pro_care_item')
const btnBackgrounds = document.querySelectorAll('.prices_btn')

// prices_btn_after_close

basic.addEventListener('click', () => {
    if (btnBackgrounds[1].classList.contains('prices_btn_active')) {
        itemBasic.classList.toggle('open')
        btnBackgrounds[0].classList.toggle('prices_btn_active')
        btnBackgrounds[0].classList.toggle('prices_btn_after_close')
        itemStandard.classList.toggle('open')
        btnBackgrounds[1].classList.toggle('prices_btn_active')
        btnBackgrounds[1].classList.toggle('prices_btn_after_close')
    }else if (btnBackgrounds[2].classList.contains('prices_btn_active')){
        itemBasic.classList.toggle('open')
        btnBackgrounds[0].classList.toggle('prices_btn_active')
        btnBackgrounds[0].classList.toggle('prices_btn_after_close')
        itemPro.classList.toggle('open')
        btnBackgrounds[2].classList.toggle('prices_btn_active')
        btnBackgrounds[2].classList.toggle('prices_btn_after_close')
    } else {
        itemBasic.classList.toggle('open')
        btnBackgrounds[0].classList.toggle('prices_btn_active')
        btnBackgrounds[0].classList.toggle('prices_btn_after_close')
    }
})

proCare.addEventListener('click', () => {
    if (btnBackgrounds[1].classList.contains('prices_btn_active')) {
        itemPro.classList.toggle('open')
        btnBackgrounds[2].classList.toggle('prices_btn_active')
        btnBackgrounds[2].classList.toggle('prices_btn_after_close')
        itemStandard.classList.toggle('open')
        btnBackgrounds[1].classList.toggle('prices_btn_active')
        btnBackgrounds[1].classList.toggle('prices_btn_after_close')
    }else if (btnBackgrounds[0].classList.contains('prices_btn_active')){
        itemBasic.classList.toggle('open')
        btnBackgrounds[0].classList.toggle('prices_btn_active')
        btnBackgrounds[0].classList.toggle('prices_btn_after_close')
        itemPro.classList.toggle('open')
        btnBackgrounds[2].classList.toggle('prices_btn_active')
        btnBackgrounds[2].classList.toggle('prices_btn_after_close')
    } else {
        itemPro.classList.toggle('open')
        btnBackgrounds[2].classList.toggle('prices_btn_active')
        btnBackgrounds[2].classList.toggle('prices_btn_after_close')
    }
})

standard.addEventListener('click', () => {
    if (btnBackgrounds[0].classList.contains('prices_btn_active')) {
        itemBasic.classList.toggle('open')
        btnBackgrounds[0].classList.toggle('prices_btn_active')
        btnBackgrounds[0].classList.toggle('prices_btn_after_close')
        itemStandard.classList.toggle('open')
        btnBackgrounds[1].classList.toggle('prices_btn_active')
        btnBackgrounds[1].classList.toggle('prices_btn_after_close')
    }else if (btnBackgrounds[2].classList.contains('prices_btn_active')){
        itemStandard.classList.toggle('open')
        btnBackgrounds[1].classList.toggle('prices_btn_active')
        btnBackgrounds[1].classList.toggle('prices_btn_after_close')
        itemPro.classList.toggle('open')
        btnBackgrounds[2].classList.toggle('prices_btn_active')
        btnBackgrounds[2].classList.toggle('prices_btn_after_close')
    } else {
        itemStandard.classList.toggle('open')
        btnBackgrounds[1].classList.toggle('prices_btn_active')
        btnBackgrounds[1].classList.toggle('prices_btn_after_close')
    }
})
