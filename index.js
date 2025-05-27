// template_1gedmlt--template

// service_y8qwpfo--service

// gre1zD_S_UgKC6c_M--public key



function contact (event) {
    event.preventDefault();
    const loading = document.querySelector ('.modal__overlay--loading')
        const success = document.querySelector ('.modal__overlay--success')
        loading.classList += " modal__overlay--visible";

     emailjs
      .sendForm(
            'service_y8qwpfo',
            'template_1gedmlt', 
           event.target,
            '94xlOlahhEtLLMVlh'
        ).then(() => {
            loading.classList.remove ("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() =>{ 
            loading.classList.remove ("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on layolajeff@gmail.com"
            );
        })
}

function toggleModal () {

}