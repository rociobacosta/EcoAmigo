document.querySelectorAll('a[href^="#videos"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Desplaza suavemente hacia el objetivo
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a[href^="#cuentos"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Desplaza suavemente hacia el objetivo
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



    document.querySelectorAll('a[href^="#juegos"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Desplaza suavemente hacia el objetivo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



   // https://formspree.io/f/mzbnbnyy   

 const form = document.getElementById("form")

 async function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)
    const response = await fetch('https://formspree.io/f/mzbnbnyy',{
        method:'POST',
        body:fd,
        headers:{
            Accept: 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert("Muchas gracias por comunicarte con nosotras!!") 
    }else{
        alert("error al enviar el mensaje")
    }
}

form.addEventListener("submit",handleSendEmail)

