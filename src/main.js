// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery, perPage } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector('.form');
const btnLoadMore = document.querySelector('.btn-load-more');
let currentTargetValue;

let page;

form.addEventListener('submit', handleForm);

async function handleForm(event) {
    event.preventDefault()

    page = 1;
    
    btnLoadMore.addEventListener('click', handleClick)

    currentTargetValue = event.target.elements[0].value;
        
    if (currentTargetValue === "") {
        iziToast.show({
            message: "Please, fill out the form",
            position: 'topRight',
            backgroundColor: '#EF4040',
            titleColor: '#fff',
            messageColor: '#fff',
            close: true,
        })
        return
    }

    hideLoadMoreButton();
    clearGallery()
    showLoader()


    try {
        await getImagesByQuery(event.target.elements[0].value)
            .then(response => {
                if (response.hits.length >= 1) {

                    createGallery(response.hits)

                    showLoadMoreButton();
                
                } else {
                    iziToast.show({
                        message: "Sorry, there are no images matching your search query. Please try again!",
                        position: 'topRight',
                        backgroundColor: '#EF4040',
                        titleColor: '#fff',
                        messageColor: '#fff',
                        close: true,
                    })
                }
            }
            )
    } catch (error) {
        iziToast.show({
            message: error.message,
            position: 'topRight',
            backgroundColor: '#EF4040',
            titleColor: '#fff',
            messageColor: '#fff',
            close: true,
        })
    } finally {
        hideLoader()
    }

}


async function handleClick() {

    page += 1;

    showLoader();
    hideLoadMoreButton();
    
    try {
        
        const data = await getImagesByQuery(currentTargetValue, page);

        createGallery(data.hits)

        const totalPage = Math.ceil(data.totalHits / perPage);

        console.log(page >= totalPage)

        if (page >= totalPage) {
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
                backgroundColor: '#EF4040',
                titleColor: '#fff',
                messageColor: '#fff',
                close: true,
            })
            hideLoadMoreButton();
        } else {
            showLoadMoreButton()
        }
        
        const galleryItem = document.querySelector('.gallery-item');
        const item = galleryItem.getBoundingClientRect();

        window.scrollBy({
            top: item.height * 2,
            behavior: "smooth",
          });

    } catch (error) {
        iziToast.show({
            message: error.message,
            position: 'topRight',
            backgroundColor: '#EF4040',
            titleColor: '#fff',
            messageColor: '#fff',
            close: true,
        })
    } finally {
        hideLoader()
    }
}