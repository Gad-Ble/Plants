const gardenBtn = document.getElementById('gardens');
const lawnBtn = document.getElementById('lawn');
const plantingBtn = document.getElementById('planting');
const gardenCards = document.querySelectorAll('.garden_care');
const lawnCards = document.querySelectorAll('.lawn_care');
const plantingCards = document.querySelectorAll('.planting');

function gardens() {
    if (plantingBtn.classList.contains("service_btn_active") === true && lawnBtn.classList.contains("service_btn_active") === true) {

    } else if (plantingBtn.classList.contains("service_btn_active") === false && lawnBtn.classList.contains("service_btn_active") === false) {
        plantingCards.forEach(element => {
            element.classList.toggle('blur');
        });
        lawnCards.forEach(element => {
            element.classList.toggle('blur');
        });
        gardenBtn.classList.toggle('service_btn_active')
    } else if (lawnBtn.classList.contains("service_btn_active") === true) {
        gardenCards.forEach(element => {
            element.classList.toggle('blur');
        });
        gardenBtn.classList.toggle('service_btn_active')
    } else if (plantingBtn.classList.contains("service_btn_active") === true) {
        gardenCards.forEach(element => {
            element.classList.toggle('blur');
        });
        gardenBtn.classList.toggle('service_btn_active')
    }
}

function lawn() {
    if (plantingBtn.classList.contains("service_btn_active") === true && gardenBtn.classList.contains("service_btn_active") === true) {

    } else if (plantingBtn.classList.contains("service_btn_active") === false && gardenBtn.classList.contains("service_btn_active") === false) {
        plantingCards.forEach(element => {
            element.classList.toggle('blur');
        });
        gardenCards.forEach(element => {
            element.classList.toggle('blur');
        });
        lawnBtn.classList.toggle('service_btn_active')
    } else if (gardenBtn.classList.contains("service_btn_active") === true) {
        lawnCards.forEach(element => {
            element.classList.toggle('blur');
        });
        lawnBtn.classList.toggle('service_btn_active')
    } else if (plantingBtn.classList.contains("service_btn_active") === true) {
        lawnCards.forEach(element => {
            element.classList.toggle('blur');
        });
        lawnBtn.classList.toggle('service_btn_active')
    }
}

function planting() {
    if (gardenBtn.classList.contains("service_btn_active") === true && lawnBtn.classList.contains("service_btn_active") === true) {

    } else if (gardenBtn.classList.contains("service_btn_active") === false && lawnBtn.classList.contains("service_btn_active") === false) {
        gardenCards.forEach(element => {
            element.classList.toggle('blur');
        });
        lawnCards.forEach(element => {
            element.classList.toggle('blur');
        });
        plantingBtn.classList.toggle('service_btn_active')
    } else if (lawnBtn.classList.contains("service_btn_active") === true) {
        plantingCards.forEach(element => {
            element.classList.toggle('blur');
        });
        plantingBtn.classList.toggle('service_btn_active')
    } else if (gardenBtn.classList.contains("service_btn_active") === true) {
        plantingCards.forEach(element => {
            element.classList.toggle('blur');
        });

        plantingBtn.classList.toggle('service_btn_active')
    }
}


gardenBtn.addEventListener('click', () => {
    gardens()
})

lawnBtn.addEventListener('click', () => {
    lawn()
})

plantingBtn.addEventListener('click', () => {
    planting()
})
