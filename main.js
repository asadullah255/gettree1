        let mybtn = document.getElementById("last-btn2")
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300){
                mybtn.style.display = "block"
            }
            else{
        mybtn.style.display = "none"
    }
})
