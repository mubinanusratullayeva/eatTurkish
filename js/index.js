// let star = document.querySelectorAll('.star')

// star.forEach((item) => {

//     let liked = localStorage.getItem('_like')

//     if (liked !== true) {
//         item.classList.remove('fillColor')
//     }else{
//         item.classList.add('fillColor')
//     }

//     item.addEventListener('click', (e) => {
//        let changedStar = e.target;
        
//        let liking = localStorage.getItem('_like')

//        if(liking == true){
//         changedStar.classList.remove('fillColor')
//         localStorage.setItem('_like', JSON.stringify(false))
//        }else{
//         changedStar.classList.toggle('fillColor')
//         localStorage.setItem('_like', JSON.stringify(true))
//        }

//     })
    
// })