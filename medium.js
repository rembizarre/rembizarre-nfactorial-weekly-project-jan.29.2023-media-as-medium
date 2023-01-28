// const articlesfromAPI = [
//     {
//         id: 0,
//         title: "7 Practical CSS Tips",
//         body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
//         button: "CSS",
//         readingTime: "12 min read",
//         src: "./images/Img-laptop.png",
//     },

//     {
//         id: 1,
//         title: "8 Extremely Useful HTML Trick",
//         body: "HTML has plenty of practical secrets that might come in handy.But I do want to make sure that the site is working on Internet Explorer and other browsers.You can use use Endtest to create automated tests and execute them on the cross-browser cloud.Below are 8 extremely useful HTML tricks.",
//         button: "HTML",
//         readingTime: "15 min read",
//         src: "./images/Img-paint.png",
//     },
    
//     {
//         id: 2,
//         title: "5 Practical JavaScript Tips",
//         body: "An array is one of the most common concepts of Javascript, which gives us a lot of possibilities to work with data stored inside. Taking into consideration that array is one of the most basic topics in Javascript which you learn about at the beginning of your programming path, in this article, I would like to show you a few tricks which you may not know about and which may be very helpful in coding! Let’s get started.",
//         button: "JavaScript",
//         readingTime: "20 min read",
//         src: "./images/Img-man.png",
//     }
// ];

let article = 
`<div class=subarticles>
<div class="articles_info">
<div class="articles_info_header">
<img src="./images/avatar.png" />
<p>Authors name <span>in</span> Topics Name · <span>7 July</span></p>
</div>

<div class="articles_info_body">
  <p id="title"></p>
  <p id="body"></p>
</div>

<div class="articles_info_footer">
    <div class="articles_info_footer_left">
        <button id="button"> </button>
        <p id="readingTime">12 min read</p>
        <p> · Selected for you</p>
    </div>
    <div class="articles_info_footer_right">
        <img src="./images/fblogo2.png"/>
        <img src="./images/Instagram.png"/>
        <img src="./images/Twitter.png"/>  
    </div>
</div>
</div>
<img class="imgserver" src=""/>
</div>`;

// const articles = document.getElementById("articles");

// articlesfromAPI.forEach((item)=> {
//     let newArticle = article.replace('id="title">', `id="title">${item.title}`);
//     console.log(newArticle)
//     newArticle = newArticle.replace('id="body">', `id="body">${item.body}`);
//     newArticle = newArticle.replace('id="button">', `id="button">${item.button}`);
//     newArticle = newArticle.replace('id="readingTime">', `id="readingTime">${item.readingTime}`);
//     newArticle = newArticle.replace('src=""', `src="${item.src}"`);

//     articles.innerHTML += newArticle;     
// });

const articles = document.getElementById("articles");

const nyt_url = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=70jS2BdMPBM9JhmKShfkQ90GOkjFoKnW';

async function topStories () {
    const response = await fetch(nyt_url);
    const articlesfromAPI = await response.json()
    if(response.ok){
        console.log(articlesfromAPI);
        articlesfromAPI.results.splice(0, 4).forEach((item)=>{
            let newArticle = article.replace('id="title">', `id="title">${item.title}`);
            newArticle = newArticle.replace('id="body">', `id="body">${item.abstract}`);
            newArticle = newArticle.replace('id="button">', `id="button">${item.subsection}`);
            newArticle = newArticle.replace('src=""', `src="${item.multimedia[2].url}"`);
            
            articles.innerHTML += newArticle; 
        })
    } else {
    console.log('404')
}
}
topStories();
