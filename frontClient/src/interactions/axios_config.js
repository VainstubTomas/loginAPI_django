import axios from "axios";

const url = 'http://127.0.0.1:8000/users/'

axios.get(url)
    .then(response => {
        if (response.status == 200) {
            console.log('200 StCode')
        }
    })
    .catch(error => {
        console.error('Error', error)
    })