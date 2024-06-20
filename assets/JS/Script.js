var typed=new Typed(".basicHeader",{
    strings:["I'm glad to see you on my site.","this is Your Favorite Place for Free Bootstrap Themes"],
    typeSpeed:150,
    backSpeed:150,
    looped:true
})




var Close=document.getElementById('Close')
var boxContainer=document.getElementById('boxContainer')
var item=document.getElementsByClassName('item')
var boxItem=document.getElementById('boxItem')

Close.addEventListener('click',function(){
    boxContainer.classList.replace('d-flex','d-none')
})

for(var i=0; i<item.length; i++){
    item[i].addEventListener('click',function(){
        boxContainer.classList.replace('d-none','d-flex')
    })
}



var shad=document.getElementsByClassName('shad')
var imgs=Array.from(document.querySelectorAll('.item img'))
var boxImg = document.getElementById('boxImg').querySelector('img');
var next=document.getElementById('Next')
var bast=document.getElementById('Bast')

for(var i=0; i<shad.length ; i++){
    (function(index) {
        shad[index].addEventListener('click', function(){
            boxImg.src = imgs[index].src;
            next.addEventListener('click',function(){
                index+=1
                if(index==6)
                    index=0
                boxImg.src=imgs[index].src
            })
            bast.addEventListener('click',function(){
                if(index==0)
                    index=6
                index-=1
                boxImg.src=imgs[index].src
            })


            document.addEventListener('keyup',function(e){
                console.log(e.key)
                if(e.key=="ArrowRight"){
                    index+=1
                    if(index==6)
                        index=0
                    boxImg.src=imgs[index].src
                }else if(e.key=="ArrowLeft"){
                    if(index==0)
                        index=6
                    index-=1
                    boxImg.src=imgs[index].src
                }else if(e.key=="Escape"){
                    boxContainer.classList.replace('d-flex','d-none')
                }
            })
        });
    })(i);
 }
 function nextImg(){
    index+=1
    if(index==6)
        index=0
    boxImg.src=imgs[index].src
}



 boxContainer.addEventListener('click',function(){
    boxContainer.classList.replace('d-flex','d-none')
    boxItem.addEventListener('click',function(e){
        e.stopPropagation()
    })
    next.addEventListener('click',function(e){
        e.stopPropagation()
    })
    bast.addEventListener('click',function(e){
        e.stopPropagation()
    })
})
 


