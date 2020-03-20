import axios from "axios"

const SERVER_URL = 'https://api.felfele.org'

export const isEmail = (email) => /.+\@.+\..+/.test(email)

export const subscribeEmail = async (id) => {
    try {
        const elem = document.getElementById(id)
        const email = elem.value
        const resp = await axios({
            method: 'post',
            url: SERVER_URL + '/api/v1/subscribe',
            data: email,
            headers: {
                'Content-Type': 'text/plain'
            },
            responseType: 'text',
            timeout: 10000,
        })
        return 'success'
    } catch (e) {
        console.error(e);
        return 'error'
    }
}

