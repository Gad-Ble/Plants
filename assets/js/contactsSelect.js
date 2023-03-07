const body = document.querySelector('.body')
const citySelect = document.getElementById('citySelect')
const disabledText = document.querySelector('.city_disabled')
const canandaigua = document.getElementById('canandaigua')
const newYork = document.getElementById('newYork')
const youkers = document.getElementById('youkers')
const sherill = document.getElementById('sherill')
const selectMenu = document.querySelector('.city_span')
const infoCard = document.querySelector('.contact_card')
const linkBtn = document.querySelector('.linkBtn')
const info = document.querySelector('.info_info')



citySelect.addEventListener('click', () => {
    citySelect.classList.toggle('city_opened')
    selectMenu.classList.toggle('hidden')
    selectMenu.classList.toggle('city_span_open')
    disabledText.classList.toggle('open_background')
})

canandaigua.addEventListener('click', () => {
    disabledText.innerText = 'Canandaigua, NY'
    citySelect.classList.add('city_selected')
    selectMenu.classList.toggle('hidden')
    selectMenu.classList.toggle('city_span_open')
    disabledText.classList.toggle('open_background')
    if(infoCard.classList.contains('hidden') === true) {
        infoCard.classList.remove('hidden')
        info.innerHTML = '<p>Canandaigua, NY</p> <p>+1 585 393 0001</p> <p>151 Charlotte Street</p>'
        linkBtn.innerHTML = '<a href="tel:+1 585 393 0001" class="button_call_us">Call us</a>'
    } else if (infoCard.classList.contains('hidden') === false) {
        infoCard.classList.remove('hidden')
        info.innerHTML = ""
        linkBtn.innerHTML = ""
        info.innerHTML = '<p>Canandaigua, NY</p> <p>+1 585 393 0001</p> <p>151 Charlotte Street</p>'
        linkBtn.innerHTML = '<a href="tel:+1 585 393 0001" class="button_call_us">Call us</a>'
    }
})
newYork.addEventListener('click', () => {
    disabledText.innerText = 'New York City'
    citySelect.classList.add('city_selected')
    selectMenu.classList.toggle('hidden')
    selectMenu.classList.toggle('city_span_open')
    disabledText.classList.toggle('open_background')
    if(infoCard.classList.contains('hidden') === true) {
        infoCard.classList.remove('hidden')
        info.innerHTML = '<p>New York City</p> <p>+1 212 456 0002</p> <p>9 East 91st Street</p>'
        linkBtn.innerHTML += '<a href="tel:+1 212 456 0002" class="button_call_us">Call us</a>'
    } else if (infoCard.classList.contains('hidden') === false) {
        infoCard.classList.remove('hidden')
        info.innerHTML = ""
        linkBtn.innerHTML = ""
        info.innerHTML = '<p>New York City</p> <p>+1 212 456 0002</p> <p>9 East 91st Street</p>'
        linkBtn.innerHTML = '<a href="tel:+1 212 456 0002" class="button_call_us">Call us</a>'
    }
})
youkers.addEventListener('click', () => {
    disabledText.innerText = 'Yonkers, NY'
    citySelect.classList.add('city_selected')
    selectMenu.classList.toggle('hidden')
    selectMenu.classList.toggle('city_span_open')
    disabledText.classList.toggle('open_background')
    if(infoCard.classList.contains('hidden') === true) {
        infoCard.classList.remove('hidden')
        info.innerHTML = '<p>Yonkers, NY</p> <p>+1 914 678 0003</p> <p>511 Warburton Ave</p>'
        linkBtn.innerHTML = '<a href="tel:+1 914 678 0003" class="button_call_us">Call us</a>'
    } else if (infoCard.classList.contains('hidden') === false) {
        infoCard.classList.remove('hidden')
        info.innerHTML = ""
        linkBtn.innerHTML = ""
        info.innerHTML = '<p>Yonkers, NY</p> <p>+1 914 678 0003</p> <p>511 Warburton Ave</p>'
        linkBtn.innerHTML = '<a href="tel:+1 914 678 0003" class="button_call_us">Call us</a>'
    }
})
sherill.addEventListener('click', () => {
    disabledText.innerText = 'Sherrill, NY'
    citySelect.classList.add('city_selected')
    selectMenu.classList.toggle('hidden')
    selectMenu.classList.toggle('city_span_open')
    disabledText.classList.toggle('open_background')
    if(infoCard.classList.contains('hidden') === true) {
        infoCard.classList.remove('hidden')
        info.innerHTML = '<p>Sherrill, NY</p> <p>+1 315 908 0004</p> <p>14 WEST Noyes BLVD</p>'
        linkBtn.innerHTML = '<a href="tel:+1 315 908 0004" class="button_call_us">Call us</a>'
    } else if (infoCard.classList.contains('hidden') === false) {
        infoCard.classList.remove('hidden')
        info.innerHTML = ""
        linkBtn.innerHTML = ""
        info.innerHTML = '<p>Sherrill, NY</p> <p>+1 315 908 0004</p> <p>14 WEST Noyes BLVD</p>'
        linkBtn.innerHTML = '<a href="tel:+1 315 908 0004" class="button_call_us">Call us</a>'
    }
})