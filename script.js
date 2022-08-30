function validate() {
    let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let mobileInput = document.getElementById('mobile-number').value
	let batchInput = document.getElementById('form-select').value
	let moduleInput = document.getElementById('module-select').value
	let tnCInput = document.getElementById('dot-1').checked
    var phoneno = /^\d{10}$/;

    let error = false;

    if(firstNameInput.length >= 3){
		document.getElementById('fn-out').style.opacity = '1'
        document.getElementById('fn-out').style.color = 'green'
		document.getElementById('fn-out').innerText = "Look's good."
	} else {
		document.getElementById('fn-out').style.opacity = '1'
        document.getElementById('fn-out').style.color = 'red'
		document.getElementById('fn-out').innerText = "Please enter valid first name."
		error = true
	}

    if(lastNameInput.length >= 3){
		document.getElementById('ln-out').style.opacity = '1'
        document.getElementById('ln-out').style.color = 'green'
		document.getElementById('ln-out').innerText = "Look's good."
	} else {
		document.getElementById('ln-out').style.opacity = '1'
        document.getElementById('ln-out').style.color = 'red'
		document.getElementById('ln-out').innerText = "Please enter a valid last name."
		error = true
	}
    if (
        emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
            emailInput.indexOf('@') !== 0
      ) {
        document.getElementById('email-out').style.opacity = '1'
        document.getElementById('email-out').style.color = 'green'
		document.getElementById('email-out').innerText = "Look's good."
      } else {
        document.getElementById('email-out').style.opacity = '1'
        document.getElementById('email-out').style.color = 'red'
		document.getElementById('email-out').innerText = "Please enter a valid email."
		error = true
      }
      if(mobileInput.match(phoneno)){
		document.getElementById('mob-out').style.opacity = '1'
        document.getElementById('mob-out').style.color = 'green'
		document.getElementById('mob-out').innerText = "Look's good."
	} else {
		document.getElementById('mob-out').style.opacity = '1'
        document.getElementById('mob-out').style.color = 'red'
		document.getElementById('mob-out').innerText = "Please enter a valid phone number."
		error = true
	}

      if(batchInput !== 'None'){
		document.getElementById('batch-out').style.opacity = '1'
        document.getElementById('batch-out').style.color = 'green'
		document.getElementById('batch-out').innerText = "Look's good."
	} else {
		document.getElementById('batch-out').style.opacity = '1'
        document.getElementById('batch-out').style.color = 'red'
		document.getElementById('batch-out').innerText = "Please enter a valid Batch No."
		error = true
	}
    if(moduleInput !== 'None'){
		document.getElementById('module-out').style.opacity = '1'
        document.getElementById('module-out').style.color = 'green'
		document.getElementById('module-out').innerText = "Look's good."
	} else {
		document.getElementById('module-out').style.opacity = '1'
        document.getElementById('module-out').style.color = 'red'
		document.getElementById('module-out').innerText = "Please enter a valid Module."
		error = true
	}
    if(tnCInput) {
		document.getElementById('check-out').style.opacity = '1'
        document.getElementById('check-out').style.color = 'green'
		document.getElementById('check-out').innerText = "Look's good."
	} else {
		document.getElementById('check-out').style.opacity = '1'
        document.getElementById('check-out').style.color = 'red'
		document.getElementById('check-out').innerText = "You must agree before submitting."
		error = true
	}

    if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('mobile-number').value = ''
		document.getElementById('form-select').value = 'None'
		document.getElementById('batch-select').value = 'None'
		document.getElementById('dot-1').checked = false

		document.getElementById('fn-out').innerText = ''
        document.getElementById('ln-out').innerText = ''
        document.getElementById('email-out').innerText = ''
        document.getElementById('mob-out').innerText = ''
        document.getElementById('batch-out').innerText = ''
        document.getElementById('module-out').innerText = ''
        document.getElementById('check-out').innerText = ''

	}

	
}