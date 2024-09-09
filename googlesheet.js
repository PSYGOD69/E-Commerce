const scriptURL = 'https://script.google.com/macros/s/AKfycbxgAueHKetLpPC9j0UsIZAGftO7Q7JXdTv1kDORKbx5KO1YbS1NkwaPkhItIg5mSYG3Fg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})