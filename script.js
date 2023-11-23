const loadVideo = async (id) => {

    console.log(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()

    const videos = data.data
    console.log(videos)
    // console.log(typeof(parseInt(videos[0].others.views)))
    

    displayVideos(videos)
}

const displayVideos = videos => {

    const videoContainer = document.getElementById('video-container')
    videoContainer.textContent = ''

    const noVideoContainer = document.getElementById('no-video-container')
    noVideoContainer.textContent = ''

    if (videos.length == 0) {

        const noVideoCard = document.createElement('div')
        noVideoCard.innerHTML = `<img src="Images/Icon.png" alt="">
        <h3>Oops!! Sorry, There is no content here</h3>`

        noVideoCard.classList = `col-span-4 justify-items-center`

        videoContainer.appendChild(noVideoCard)
        // console.log(videoContainer)


    }

    else {

        videos.forEach(video => {
            console.log(video)

            const videoCard = document.createElement('div')
            videoCard.classList = `card  bg-base-100  my-3 mx-2 lg:mx-6`
            videoCard.innerHTML = `  <figure><img src="${video.thumbnail} " class="w-[312px] h-[200px] rounded-xl" alt="" /></figure>
            <div class=" flex py-5">
            <div class="px-3">
            
            <img src="${video.authors[0].profile_picture}" class="w-10 h-10 rounded-full" alt="" />
            </div>
            <div>
            <h2 class="card-title text-base font-bold text-black ">${video.title}</h2>
            <p class="text-sm font-normal text-[#171717b3]">${video.authors[0].profile_name} <span>${video.authors[0].verified}
            <h6 class="text-sm font-normal text-[#171717b3]">${video.others.views} views</h6>
            </div>
              
            
          </div>`

         



            videoContainer.appendChild(videoCard)

        });

    }

    // console.log(videos)


}

// loadVideo()

const loadCategory = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()

    const categories = data.data
    // console.log(categories)
    displayCategories(categories)
}
const displayCategories = categories => {

    const categoryButtonContainer = document.getElementById('category-button-container')

    categories.forEach(category => {
        console.log(category)

        const categoryButton = document.createElement('button')
        categoryButton.classList = `btn btn-active mx-6`
        categoryButton.innerText = ` ${category.category} `
        const id = `${category.category_id}`

        categoryButtonContainer.appendChild(categoryButton)

        categoryButton.addEventListener('click', function () {

            loadVideo(id)

        })

    });

}
loadCategory()






