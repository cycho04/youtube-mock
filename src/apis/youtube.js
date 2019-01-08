import axios from 'axios';


const KEY = 'AIzaSyCkdOj2fimiY_xMhJxBdAljbxhLiiuvmnE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
