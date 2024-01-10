/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tabcontent =>{
            tabcontent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0 ; i < skillsContent.length ; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 

/*==================== EMAIL JS ======================*/
const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactMessage = document.getElementById('contact-name')
        

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
    }
    else{
        //serviceID-templateID-#form-publickey
        emailjs.sendForm('service_m7wnx4u','template_ah5s70x','#contact-form','o4iMllnMJGAW7Gm8u')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent ✅'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            })
    }
}
contactEmail.addEventListener('submit', sendEmail)
