const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic'+i+ '.jpg')
    thumbBar.appendChild(newImage);
    newImage.onclick = function(src_value){
        displayedImage.src = src_value.target.src;    
  }
}
/* 
Image Sources:
pic1 - www.brittanytourism.com
pic2 - https://www.worldwildlife.org/species/giant-panda
pic3 - https://www.worldwildlife.org/species/tiger
pic4 - https://www.mypetwarehouse.com.au/my-pet-blog/expert-pet-advice/can-dogs-eat-raw-eggs
pic5 - https://en.wikipedia.org/wiki/File:Fernando_noronha.jpg

*/


/* Wiring up the Darken/Lighten button */
