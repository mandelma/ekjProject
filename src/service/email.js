const axios = require('axios');
const baseUrl = "/api/email";

const sendEmail = async (content) => {
    const send = await axios.post(`${baseUrl}`, content);
    return send.data;
}

export default { sendEmail };