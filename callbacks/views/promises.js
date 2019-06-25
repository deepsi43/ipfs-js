const posts = [
{title:'Post one',body:'This is Post One'},
{title:'Post Two',body:'This is Post two'}
];

function getposts(){
    setTimeout(()=>{
      let output = '';
      posts.forEach((post,index)=>{
          output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
    },1000)
}

//getposts();

function createpost(post){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    
     posts.push(post);
     const error = false;
     if(!error){
       resolve();
     }else{
        reject('Error:Something went wrong');
     }
    // callback();
  },2000);
});
}

createpost({title:'Post three',body:'This is post three'})
  .then(getposts)
  .catch(err => console.log(err));
//getposts();




