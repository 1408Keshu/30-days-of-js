const requestUrl='https://api.github.com/users/1408keshu'
const xhr=new XMLHttpRequest();
xhr.open('GET',requestUrl);
// console.log("here");
xhr.onreadystatechange =function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        console.log(this.responseText) // print response of api
        const data=JSON.parse(this.responseText); 
        console.log(typeof data)
        console.log(data.following) //give undefined
    }
} // for continue tracking and on Every change
xhr.send()
