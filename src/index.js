console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => dogImages(data))

function dogImages(data) {
    console.log("Dog Img", data)
    
    let img = document.querySelector('#dog-image-container')
    
    data.message.forEach(function(dogUrl){
        let imgElement = document.createElement("IMG")
        imgElement.atl = 'dogImg'
        imgElement.src = dogUrl

        img.appendChild(imgElement)
    })
    
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => dogBreeds(data))

function dogBreeds(breedData) {
    console.log("Breed data", breedData)
    
    let breed = document.querySelector("#dog-breeds")
        for(dogBreed in breedData.message){
            console.log('BREED', key);
            
            let li = document.createElement('LI')

            // li.value = breedData.message
            li.innerText = dogBreed
            // debugger
            breed.appendChild(li)
        }
}
