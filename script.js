
let gallery = document.querySelectorAll('.doodle-art-main > div')
console.log(gallery)
 // divtext = document.querySelectorAll('p#doodle-art-text')
// select.addEventListener('mouseover', () => {
//   console.log('over the image')
// })

let text = document.querySelectorAll('.doodle-art-main > div > p')
console.log(text)
// document.getElementsByClassName('box')




  for (let div of gallery){
    div.addEventListener('mouseover', () =>{
          console.log('over here')
          div.classList.add('transform')
          div.classList.add('shadow')  
  })}




for (let div of gallery){
  div.addEventListener('mouseout', () =>{
          div.classList.remove('transform')
          div.classList.remove('shadow')
  })
}