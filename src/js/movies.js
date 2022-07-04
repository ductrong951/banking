
var bannersAPI = 'http://localhost:3000/banners'


//* Gọi callback

document.addEventListener('load', (event) => {
    function start(){
        getNews(renderNews)
    }
    
    start()
    
    //* Function get movies
    function getNews(callback){
        fetch(bannersAPI)
            .then(function(response){
                return response.json()
            })
            .then(callback)
    }
    
    
    function renderNews(banners){
    
        //* Lấy ra danh sách phim đang hot
        var newsBlock = document.querySelector('.container .slider-index')
        var newsHtmls = banners.map(function(banner){
            return `
            <div class="slide">
                <img class="image-banner" src="${banner.image}" alt="">
            </div>
                `;
            })
            newsBlock.innerHTML = newsHtmls.join('')
    }
    
});
  


// function start(){
// 	getNews(renderNews)
// }

// start()

// //* Function get movies
// function getNews(callback){
// 	fetch(bannersAPI)
// 		.then(function(response){
// 			return response.json()
// 		})
// 		.then(callback)
// }


// function renderNews(banners){

// 	//* Lấy ra danh sách phim đang hot
// 	var newsBlock = document.querySelector('.container .slider-index')
// 	var newsHtmls = banners.map(function(banner){
// 		return `
//         <div class="slide">
//             <img class="image-banner" src="${banner.image}" alt="">
//         </div>
// 			`;
// 		})
// 		newsBlock.innerHTML = newsHtmls.join('')
// }
