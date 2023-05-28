import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]')
};

refs.form.addEventListener('input', throttle(onInputText, 500));

function onInputText(evt) {
    
const email = refs.emailInput.value;
const textarea = refs.textarea.value;
const userForm = {
    email,
    textarea,
};
    
    localStorage.setItem('feedback-form-state', JSON.stringify(userForm));
    console.log(userForm);
}


refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    localStorage.removeItem('feedback-form-state');
}


function populateForm() {

    const savedFormInput = localStorage.getItem('feedback-form-state');
    
    if(savedFormInput) {
        const { email, textarea } = JSON.parse(savedFormInput);
        
        refs.emailInput.value = email;
        refs.textarea.value = textarea;
    }
}

populateForm();