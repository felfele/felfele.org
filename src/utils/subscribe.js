export const subscribeEmail = (id) => {
    const elem = document.getElementById(id)
    const email = elem.value
    alert(`Hello ${email}!\n\n` + 'You are successfully subscribed.\n' + 'We will never spam or share your email with anyone else.')
}

