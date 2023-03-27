export default function inputText(name, description, required = false) {

    let inputText = document.createElement('input')

    inputText.setAttribute('name', name)
    inputText.setAttribute('type', 'text')
    inputText.setAttribute('placeholder', description)
    inputText.required = required


    return inputText

}