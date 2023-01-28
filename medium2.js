const articlesfromAPI = [
    {
        id: 0,
        news_tips_css: "7 Practical CSS Tips",
        news_tips_description: "How product designers can break from the status quo and help our planet",
        src: "./images/news_Img.png", 
        subheader: "Subheader",
        body: "How long are you awake in the morning before you go online?' 
        'Perhaps it’s while you’re still lying in bed, using a news'",
    
        //  feed or social media' as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might stay you never signed off in the first place. And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker. But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.",
   
    }
];

let article = 
`<div class="frame23">
<div class="infoTop">
  <img class="avatarbig" src="./images/avatarbig.png" />
  <div class="info">
    <p class="infoTop_author">Authors Name</p>
    <p class="infoTop_info">7 July · 12 min read · Member-only</p>
  </div>
</div>
<img class="news_header_infoTop_logo" src="./images/infotop_Logo.png"/>
</div>

<div class="news_tips">
<p id="news_tips_css"> </p>
<p id="news_tips_description"> </p>
</div>

<img src=""/>

<div id="news_subheader">
<h3 id="subheader"></h3>
<pre id="body"> </pre>

</div> 
<div class="infoBottom">
<div class="news_action">
  <img class="news_action_frame2" src="./images/likescount.png"/>
  <img class="news_action_frame1" src="./images/news_Frame 1.png" />

</div>
<img class="news_action_bookmark" src="./images/news_Bookmark.png" />
</div>`;

const news = document.getElementById("news");

articlesfromAPI.forEach((item)=> {
    let newArticle = article.replace('id="news_tips_css">', `id="news_tips_css">${item.news_tips_css}`);
   
    newArticle = newArticle.replace('id="news_tips_description">', `id="news_tips_description">${item.news_tips_description}`);
    newArticle = newArticle.replace('src=""', `src="${item.src}"`);
    newArticle = newArticle.replace('id="subheader">', `id="subheader">${item.subheader}`);
    newArticle = newArticle.replace('id="body">', `id="body">${item.body}`);
    console.log(newArticle)

    
    

    news.innerHTML += newArticle;     
});

