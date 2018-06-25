const myAPIKeyHere = "8338ac00f3fe8771eadc5eb64e67021842617a363f82ae304f7719c9264e4ac5";
//This is my API KEY.

const title = {
    headers: {
        Authorization: `Client-ID ${myAPIKeyHere}`
    }
} //Passing my application’s access key though the header of Authorization .

const outputImages = (pictures) => {
    const photoElement = document.querySelector("#images");

    for (const picture of pictures) {
        const img = document.createElement("IMG");
        img.setAttribute("src", picture.urls.small);
        photoElement.appendChild(img);
    }
} //Fetching the photos.

fetch(`https://api.unsplash.com/search/collections?query=thearchitecturecatwalk`, title).then(response => response.json())
    .then(json => console.log(json)); //This is the method of collection(How to get the ID).
fetch(`https://api.unsplash.com/collections/2148809/photos?query=thearchitecturecatwalk`, title).then(response => response.json())
    .then(outputImages) //Using the collection and then search the website called "https://unsplash.com/" to find the theme photos.




fetch(`https://jsonplaceholder.typicode.com/photos`).then(response => response.json()) //Fetching the photo ID.
    .then(json => {
        const photoElement2 = document.querySelector("#images");
        for (const pictureID of json) {
            if (pictureID.albumId === 3) {
                const img2 = document.createElement("IMG");
                img2.setAttribute("src", pictureID.url);
                photoElement2.appendChild(img2);
            }
        } //Searching for the ID3's all of the albums.
    })


fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'DELETE'
})
//The method of deleting all the users.
