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
