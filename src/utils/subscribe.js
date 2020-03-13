import axios from "axios"

const SERVER_URL = 'https://api.felfele.org'

export const subscribeEmail = async (id) => {
    const elem = document.getElementById(id)
    const email = elem.value
    try {
        const resp = await axios({
            method: 'post',
            url: SERVER_URL + '/api/v1/subscribe',
            data: email,
            headers: {
                'Content-Type': 'text/plain'
            },
            responseType: 'text',
        })
        console.log(resp);
        alert(`Hello ${email}!\n\n` + 'You are successfully subscribed.\n' + 'We will never spam or share your email with anyone else.')
    } catch (e) {
        console.error(e);
        alert(`Hmm, there was an error!\n\n` + 'Please try again later or send an email to hello@felfele.org')
    }
}

