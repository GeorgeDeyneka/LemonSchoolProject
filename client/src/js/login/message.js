export function createMessageNode(type) {
    let span = document.createElement('span')
    span.className = `message ${type}`
    span.textContent = (type === 'error') ? 'Заполните все поля' : 'Неправильный email'
    return span
}

export function deleteMessage() {
    document.querySelector('.message').remove()
}
