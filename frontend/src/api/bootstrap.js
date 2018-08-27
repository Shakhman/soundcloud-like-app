import axios from 'axios';

const cors = `${window.location.protocol}//${window.location.hostname}/api`;

function getInitData() {
    return new Promise((resolve, reject) => {
        return axios.get(`${cors}/test`, {
            crossDomain: true,
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export { getInitData }