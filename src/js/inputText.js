export default function inputText(name, description, type = 'text', required = false) {

    let inputText = document.createElement('input')

    inputText.setAttribute('name', name)
    inputText.setAttribute('type', type)
    inputText.setAttribute('placeholder', description)
    inputText.required = required


    return inputText

}