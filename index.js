//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key
//trending=https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trendinginindia&key=AIzaSyBwkuulJfyYNL3Cx4SPc2gEv42czXRgh1U
const api_key=" AIzaSyBwkuulJfyYNL3Cx4SPc2gEv42czXRgh1U";

let searchv=async()=>{
try{
    let query=document.getElementById("query").value
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let res=await fetch(url)
    let data=await res.json();
    append(data.items)
   // console.log(data)
}
catch(err){
    console.log(err)
}
};

let append=(data)=>{
let x=document.getElementById("result")
console.log(data)

mainbox.innerHTML=null

data.forEach(({id:{videoId},snippet:{title,thumbnails}})=>{
    console.log(videoId,title)
    let div=document.createElement("div")
    // let img=document.createElement("img")
    // img.src=thumbnails.default.url
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    iframe.allow="fullscreen"
    let h3=document.createElement("h3");
    h3.innerText=title
    div.append(iframe,h3);

    let video={
        title,
        videoId,
    };
    div.onclick=()=>{
        playvideo();
    }

    x.append(div)
});
};

let playvideo=(video)=>{
    
    window.localStorage.setItem("video",JSON.stringify(video));
    window.location.href="video.html";
}
/*
<iframe width="560" height="315" 
 src="https://www.youtube.com/embed/8oJAat7l6G4" 
 title="YouTube video player" 
 frameborder="0" allow="accelerometer;
  autoplay; clipboard-write;
   encrypted-media; gyroscope; 
   
   picture-in-picture" allowfullscreen></iframe>
*/


let url2="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trendinginindia&key=AIzaSyBwkuulJfyYNL3Cx4SPc2gEv42czXRgh1U"

fetch(url2).then((res)=>{
    return res.json()
})
.then((res)=>{
  console.log(res.items)
  display(res.items)
})
.catch((err)=>{
    console.log(err)
})


//append
let mainbox=document.getElementById("displayMovie")
 display=(displaydata)=>{
        console.log(displaydata)
    displaydata.forEach(({id:{videoId},snippet:{title,thumbnails}})=>{
        console.log(videoId,title)

        let box=document.createElement("div")

        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.allow="fullscreen"
        let h2=document.createElement("h3")
        h2.innerText=title;

        box.append(iframe,h2)
        mainbox.append(box)
    })
}
// try{
//     let url2="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trendinginindia&key=AIzaSyBwkuulJfyYNL3Cx4SPc2gEv42czXRgh1U"
//     let res=await fetch(url2)
//     let displaydata=await res.json()
//     console.log(displaydata)
// }
// catch(err){
//     console.log(err)
// }