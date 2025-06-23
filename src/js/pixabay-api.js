import axios from 'axios';

let APIKEY = '44929150-af2bf51de3b27508be12093c9';

export let perPage = 15;

export async function getImagesByQuery(query, page = 1) {
    const result = await axios.get("https://pixabay.com/api/", {
        params: {
            key: APIKEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: perPage,
            page
        }
    })

    return result.data
}