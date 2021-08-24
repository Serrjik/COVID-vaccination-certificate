// Константы.
const CHINA_VACCINE_RU = `Вакцина против SARS-CoV-2 (клетки Веро)
инактивированная, Sinopharm/BIBP,  КНР, `
const CHINA_VACCINE_EN = `SARS-CoV-2 Vaccine (Vero Cell)
Inactivated (InCoV), Sinopharm/BIBP, China, `
const RUSSIN_VACCINE_RU = `Гам-КОВИД-Вак, Россия, `
const RUSSIN_VACCINE_EN = `Gam-COVID-Vac, Russia, `

// Блоки.
const printDataInner = document.querySelector('.print-data-inner')
const printDataFront = document.querySelector('.print-data-front')

/* Инпуты. */
// Паспортные данные.
const surnameInput = document.querySelector('[name="surname"]')
const forenameInput = document.querySelector('[name="forename"]')
const patronymicInput = document.querySelector('[name="patronymic"]')
const lastNameInput = document.querySelector('[name="last-name"]')
const firstNameInput = document.querySelector('[name="first-name"]')
const dateInput = document.querySelector('[name="date"]')
const passportInput = document.querySelector('[name="passport"]')
const personalNumberInput = document.querySelector('[name="personal-number"]')
// Наименование вакцины.
const vaccineInput = document.querySelector('[name="vaccine"]')
// 1-ая вакцина
const firstDateInput = document.querySelector('[name="first-date"]')
const firstVaccineInput = document.querySelector('[name="first-vaccine"]')
const firstDoctorInput = document.querySelector('[name="first-doctor"]')
// 2-ая вакцина
const secondDateInput = document.querySelector('[name="second-date"]')
const secondVaccineInput = document.querySelector('[name="second-vaccine"]')
const secondDoctorInput = document.querySelector('[name="second-doctor"]')

/* Надписи на внутренней стороне. */
// Паспортные данные.
const familyName = document.querySelector('#family-name')
const firstName = document.querySelector('#first-name')
const middleName = document.querySelector('#middle-name')
const birth = document.querySelector('#birth')
const passport = document.querySelector('#passport')
const personalNumber = document.querySelector('#personal-number')
// 1-ая вакцина
const dateFirstVaccination = document.querySelector('#date-first-vaccination')
const firstVaccine = document.querySelector('#first-vaccine')
const firstDoctor = document.querySelector('#first-doctor')
// 2-ая вакцина
const dateSecondVaccination = document.querySelector('#date-second-vaccination')
const secondVaccine = document.querySelector('#second-vaccine')
const secondDoctor = document.querySelector('#second-doctor')

// Кнопки.
// mockingButton = document.querySelector('#mocking')
qrCodeButton = document.querySelector('#qr-code')
emptyPageButton = document.querySelector('#empty-page')
innerSideButton = document.querySelector('#inner-side')
frontSideButton = document.querySelector('#front-side')

const getFullVaccineName = vaccineName => {
	switch (vaccineName) {
		case 'Russia':
			firstVaccine.textContent = RUSSIN_VACCINE_RU
			firstVaccine.textContent +=
				firstVaccineInput.value.trim().toUpperCase() + ' / '
			firstVaccine.textContent += RUSSIN_VACCINE_EN
			firstVaccine.textContent += firstVaccineInput.value
				.trim()
				.toUpperCase()

			if (secondDateInput.valueAsNumber) {
				secondVaccine.textContent = RUSSIN_VACCINE_RU
				secondVaccine.textContent +=
					secondVaccineInput.value.trim().toUpperCase() + ' / '
				secondVaccine.textContent += RUSSIN_VACCINE_EN
				secondVaccine.textContent += secondVaccineInput.value
					.trim()
					.toUpperCase()
			} else {
				secondVaccine.textContent = ''
			}

			break

		case 'China':
			firstVaccine.textContent = CHINA_VACCINE_RU
			firstVaccine.textContent +=
				firstVaccineInput.value.trim().toUpperCase() + ' / '
			firstVaccine.textContent += CHINA_VACCINE_EN
			firstVaccine.textContent += firstVaccineInput.value
				.trim()
				.toUpperCase()

			if (secondDateInput.valueAsNumber) {
				console.log(
					'secondDateInput.valueAsNumber: ',
					secondDateInput.valueAsNumber
				)
				secondVaccine.textContent = CHINA_VACCINE_RU
				secondVaccine.textContent +=
					secondVaccineInput.value.trim().toUpperCase() + ' / '
				secondVaccine.textContent += CHINA_VACCINE_EN
				secondVaccine.textContent += secondVaccineInput.value
					.trim()
					.toUpperCase()
			} else {
				secondVaccine.textContent = ''
			}

			break

		default:
			firstVaccine.textContent = ''
			break
	}
}

const getDoctors = () => {
	firstDoctor.textContent = firstDoctorInput.value
	if (secondDateInput.valueAsNumber) {
		secondDoctor.textContent = secondDoctorInput.value
	} else {
		secondDoctor.textContent = ''
	}
}

getFullVaccineName(vaccineInput.value)

getDoctors()

surnameInput.addEventListener('keyup', e => {
	familyName.textContent =
		e.target.value.trim() + ' / ' + lastNameInput.value.trim()
})

forenameInput.addEventListener('keyup', e => {
	firstName.textContent =
		e.target.value.trim() + ' / ' + firstNameInput.value.trim()
})

patronymicInput.addEventListener('keyup', e => {
	middleName.textContent = e.target.value.trim() + ' / '
})

lastNameInput.addEventListener('keyup', e => {
	familyName.textContent =
		surnameInput.value.trim() + ' / ' + e.target.value.trim()
})

firstNameInput.addEventListener('keyup', e => {
	firstName.textContent =
		forenameInput.value.trim() + ' / ' + e.target.value.trim()
})

dateInput.addEventListener('change', e => {
	birth.textContent = new Date(e.target.valueAsNumber).toLocaleDateString(
		'ru'
	)
})

passportInput.addEventListener('keyup', e => {
	passport.textContent = e.target.value.trim()
})

personalNumberInput.addEventListener('keyup', e => {
	personalNumber.textContent = e.target.value.trim()
})

vaccineInput.addEventListener('change', e => {
	getFullVaccineName(e.target.value)
})

firstDateInput.addEventListener('change', e => {
	// console.log(e.target.valueAsNumber)
	dateFirstVaccination.textContent = new Date(
		e.target.valueAsNumber
	).toLocaleDateString('ru')
})

// Изменение номера партии 1-ой вакцины.
firstVaccineInput.addEventListener('keyup', e => {
	getFullVaccineName(vaccineInput.value)
})

firstDoctorInput.addEventListener('change', e => {
	firstDoctor.textContent = e.target.value
})

secondDateInput.addEventListener('change', e => {
	if (secondDateInput.valueAsNumber) {
		dateSecondVaccination.textContent = new Date(
			e.target.valueAsNumber
		).toLocaleDateString('ru')
	} else {
		dateSecondVaccination.textContent = ''
	}

	getFullVaccineName(vaccineInput.value)
	getDoctors()
})

// Изменение номера партии 2-ой вакцины.
secondVaccineInput.addEventListener('keyup', e => {
	getFullVaccineName(vaccineInput.value)

	getDoctors()
})

secondDoctorInput.addEventListener('change', e => {
	getDoctors()
})

// mockingButton.addEventListener('click', () => {
// 	surnameInput.value = 'кольцов'
// 	forenameInput.value = 'юрий'
// 	patronymicInput.value = 'александрович'
// 	lastNameInput.value = 'kolcov'
// 	firstNameInput.value = 'yuriy'
// 	dateInput.valueAsNumber = 503452800000
// 	passportInput.value = 'mp1234567'
// 	personalNumberInput.value = '1234567m123pb0'
// 	firstDateInput.valueAsNumber = 1618812800000
// 	firstVaccineInput.value = 'i-1234500'
// 	secondDateInput.valueAsNumber = 1628812800000
// 	secondVaccineInput.value = 'ii-8765431'
// })

qrCodeButton.addEventListener('click', () => {
	let vaccine = ''

	switch (vaccineInput.value) {
		case 'Russia':
			vaccine = RUSSIN_VACCINE_EN
			break

		case 'China':
			vaccine = CHINA_VACCINE_EN
			break

		default:
			break
	}

	let text = `Учреждение здравоохранения
«Березинская центральная районная больница»
HEALTH CARE INSTITUTION
«BEREZINSKAYA CENTRAL DISTRICT HOSPITAL»\n`
	text += lastNameInput.value.trim().toUpperCase() + ' '
	text += firstNameInput.value.trim().toUpperCase() + ', '
	text += birth.textContent + '\n'
	text += passport.textContent.toUpperCase() + ', '
	text += personalNumber.textContent.toUpperCase() + '\n'
	text += vaccine + '\n'
	text += dateFirstVaccination.textContent + ', '
	text += firstVaccineInput.value.trim().toUpperCase() + '\n'
	if (secondDateInput.valueAsNumber) {
		text += dateSecondVaccination.textContent + ', '
		text += secondVaccineInput.value.trim().toUpperCase() + '\n'
	}

	// console.log('text: ', text)

	const container = document.querySelector('.qr-container')
	container.textContent = ''

	QRCode.toCanvas(
		text,
		{ errorCorrectionLevel: 'H' },
		function (err, canvas) {
			if (err) throw err

			container.appendChild(canvas)
		}
	)
})

emptyPageButton.addEventListener('click', () => {
	printDataInner.classList.add('no-print')
	printDataFront.classList.add('no-print')
	window.print()
})

innerSideButton.addEventListener('click', () => {
	printDataInner.classList.remove('no-print')
	printDataFront.classList.add('no-print')
	window.print()
})

frontSideButton.addEventListener('click', () => {
	printDataInner.classList.add('no-print')
	printDataFront.classList.remove('no-print')
	window.print()
})
