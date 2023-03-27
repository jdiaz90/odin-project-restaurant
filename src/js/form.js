import inputText from "./inputText"

export default function form() {

    let form = document.createElement('form')
    let name = inputText('name', 'Your name', true)
    let email = inputText('email', 'Your email', true)
    let phone = inputText('email', 'Your phone')
    let text = document.createElement('textarea')
    let submit = document.createElement('input')

    form.className = 'contact'
    text.setAttribute('name', 'text')
    text.setAttribute('rows', '10')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Send message')

    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(phone)
    form.appendChild(text)
    form.appendChild(submit)

    return form

}