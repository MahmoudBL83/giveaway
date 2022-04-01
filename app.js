console.log('hello')
 
document.querySelector('#generate').addEventListener('click',async()=>{
    let res=await fetch(`https://instagram-data1.p.rapidapi.com/comments?post=https://www.instagram.com/p/CbzeZiKoTfx`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com',
		'X-RapidAPI-Key': '28614c91d5msh4620892be3705bbp16a7b6jsn036ee88955d1'
        }
    })
	try {
        let res2= await res.json();
        let res3=res2.collector;
        const randomIndex = Math.floor(Math.random() * res3.length);
        document.querySelector('img').classList.add('remove');
        document.querySelector('h4').classList.add('remove');
        document.querySelector('h3').classList.add('remove');
        document.querySelectorAll('h1')[0].classList.add('remove');
        document.querySelectorAll('h1')[1].classList.add('remove');
        document.querySelector('input').classList.add('remove');
        document.querySelector('#rules').classList.add('remove');
        document.querySelector('#generate').classList.add('remove');
        document.querySelector('#timerPage').style.display='flex';
        document.querySelector('#timer').innerHTML=(document.querySelector('#time').value);
        let c=setInterval(()=>{
            document.querySelector('#timer').innerHTML=(document.querySelector('#time').value - 1);
            if(document.querySelector('#time').value>0){
                document.querySelector('#time').value--;
            }
            if(document.querySelector('#time').value==0){
              document.querySelector('#timerPage').style.display='none';
              document.querySelector('#timer').innerHTML='';
              clearInterval(c);
            }
         },1000)
        //wait until time finished
        setTimeout(()=>{
        document.querySelector('#result').innerHTML=res3[randomIndex].owner.username;
        document.querySelector('#result3').innerHTML=res3[randomIndex].text;
        document.querySelector('#result1').style.display='flex';
        document.querySelector('#result2').style.display='flex';
        document.querySelector('img').classList.add('remove');
        document.querySelector('h4').classList.add('remove');
        document.querySelector('h3').classList.add('remove');
        document.querySelectorAll('h1')[0].classList.add('remove');
        document.querySelectorAll('h1')[1].classList.add('remove');
        document.querySelector('input').classList.add('remove');
        document.querySelector('#rules').classList.add('remove');
        document.querySelector('#generate').classList.add('remove');
        },(document.querySelector('#time').value)*1000)
    } catch (error) {
        console.log(error)
    }
})

//rules
document.querySelector('.click').addEventListener('click',()=>{
    if(document.querySelector('#rules').style.display=='flex'){
    document.querySelector('#rules').style.display='none';}
    else if(document.querySelector('#rules').style.display=='none'){
    document.querySelector('#rules').style.display='flex';
    }
})


//decrement&increment

document.querySelector('.right1').addEventListener('click',()=>{
    let u=document.querySelector('#num').value;
    u++;
    if(u<0){
        u=0
    }
    document.querySelector('#num').value=u;
})

document.querySelector('.right2').addEventListener('click',()=>{
    let u=document.querySelector('#tag').value;
    u++;
    if(u<0){
        u=0
    }
    document.querySelector('#tag').value=u;
})

document.querySelector('.left1').addEventListener('click',()=>{
    let u=document.querySelector('#num').value;
    u--;
    if(u<0){
        u=0
    }
    document.querySelector('#num').value=u;
})

document.querySelector('.left2').addEventListener('click',()=>{
    let u=document.querySelector('#tag').value;
    u--;
    if(u<0){
        u=0
    }
    document.querySelector('#tag').value=u;
})

//////////////////////////////////////

