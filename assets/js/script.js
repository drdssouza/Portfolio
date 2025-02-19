document.addEventListener('DOMContentLoaded', () => {
    //===== MENU SHOW =====
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId);

        if(toggle && nav){
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    }
    showMenu('nav-toggle', 'nav-menu');

    //===== ACTIVE AND REMOVE MENU =====
    const navLinks = document.querySelectorAll('.nav__link');

    function linkAction() {
        navLinks.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show');
    }
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    //===== SCROLL REVEAL ANIMATION =====
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    //===== SCROLL HOME =====
    sr.reveal('.home__title', {});
    sr.reveal('.home__subtitle', {delay: 200});
    sr.reveal('.home__img', {delay: 400});
    sr.reveal('.home__data', {interval: 200});

    //===== SCROLL ABOUT =====
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', {delay: 200});
    sr.reveal('.about__text', {delay: 400});
    sr.reveal('.about__data', {interval: 200});
    sr.reveal('.about__cv-button', {delay: 600});

    //===== SCROLL SKILLS =====
    sr.reveal('.skills__subtitle', {});
    sr.reveal('.skills__text', {delay: 200});
    sr.reveal('.skills__data', {interval: 200});

    //===== SCROLL PORTFOLIO =====
    sr.reveal('.portfolio__img', {interval: 200});
    sr.reveal('.portfolio__subtitle', {delay: 200});
    sr.reveal('.portfolio__text', {delay: 400});

    //===== SCROLL CONTACT =====
    sr.reveal('.contact-form', {delay: 400});
    sr.reveal('.contact__button', {delay: 600});

    //===== LANGUAGE TOGGLE =====
    const langToggle = document.getElementById('lang-toggle');
    const elements = {};
    const ids = [
        'home-title', 'home-subtitle', 'about-title', 'about-subtitle', 'about-profession',
        'about-text', 'about-text-2', 'skills-title', 'skills-subtitle', 'portfolio-title',
        'project-1-title', 'project-1-description', 'project-2-title', 'project-2-description',
        'project-3-title', 'project-3-description', 'contact-title'
    ];
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            elements[id] = element;
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado no DOM.`);
        }
    });

    const translations = {
        en: {
            "home-title": "WELCOME, I'M",
            "home-subtitle": "AI Developer | Soft. Eng. Student",
            "about-title": "About Me",
            "about-subtitle": "I am Eduardo Schrotke",
            "about-profession": "AI Developer | Software Engineering Student",
            "about-text": "Currently working as an AI Trainee at CompassUOL.",
            "about-text-2": "I am in my penultimate year of Software Engineering, with an expected completion in July 2026.",
            "skills-title": "Skills",
            "skills-subtitle": "Areas of Expertise",
            "portfolio-title": "Professional Experience",
            "project-1-title": "Verbal Aggression Identification",
            "project-1-description": "Receive videos via the frontend, upload them to an AWS S3 bucket, and use Amazon Transcribe for transcription. A Large Language Model (Claude Sonnet 3.5) analyzes the content and returns results via email.",
            "project-2-title": "Writing Tutor",
            "project-2-description": "Receive essay images via the frontend, upload them to an AWS S3 bucket, and use Sonnet 3.5 for OCR and subsequent correction based on evaluation criteria provided in the prompt.",
            "project-3-title": "Legal Document Summarization",
            "project-3-description": "Receive PDF documents via the frontend, upload them to an AWS S3 bucket, and trigger a Lambda function that uses Sonnet 3.5 to create a chatbot for the document and generate a brief summary.",
            "contact-title": "Contact"
        },
        pt: {
            "home-title": "BEM VINDO, SOU",
            "home-subtitle": "Desenvolvedor IA | Estudante de Eng. de Soft.",
            "about-title": "Sobre mim",
            "about-subtitle": "Eu sou o Eduardo Schrotke",
            "about-profession": "Desenvolvedor IA | Estudante de Engenharia de Software",
            "about-text": "Atualmente trabalho como desenvolvedor de IA Trainee pela CompassUOL.",
            "about-text-2": "Estou no penúltimo ano de Engenharia de Software, com conclusão prevista para julho de 2026.",
            "skills-title": "Habilidades",
            "skills-subtitle": "Áreas de conhecimento",
            "portfolio-title": "Experiências Profissionais",
            "project-1-title": "Identificação de Agressão Verbal",
            "project-1-description": "Receber vídeos via front-end que seriam jogados para um bucket dentro do AWS S3, e utilizando o Amazon Transcribe, faz a transcrição do vídeo e é acionado uma LLM (no caso foi utilizado o modelo Claude Sonnet 3.5) onde fazia a análise e retornava no front-end e por e-mail quando se obtivesse uma resposta.",
            "project-2-title": "Correção de Redação",
            "project-2-description": "Receber imagem de redações via front-end que seriam jogadas para um bucket dentro do AWS S3, e utilizando o Sonnet 3.5 para fazer a OCR da redação e posteriormente a correção da mesma, conforme os critérios de avaliação jogados no prompt.",
            "project-3-title": "Resumo de Documentos Jurídicos",
            "project-3-description": "Receber o PDF'S dos documentos via front-end, posteriormente jogados dentro de um bucket no AWS S3, acionando uma lambda que usaria o modelo Sonnet 3.5 para fazer um chatbot sobre o documento e também um breve resumo do mesmo.",
            "contact-title": "Contato"
        }
    };

    let currentLang = 'pt';

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            langToggle.textContent = currentLang === 'pt' ? 'EN | PT' : 'PT | EN';
            updateTranslations();
        });
    } else {
        console.error('Elemento com ID "lang-toggle" não encontrado no DOM.');
    }

    function updateTranslations() {
        for (const [key, element] of Object.entries(elements)) {
            if (element) {
                if (translations[currentLang][key]) {
                    if (key === 'download-cv-button') {
                        const span = element.querySelector('span');
                        if (span) {
                            span.textContent = translations[currentLang]['cv-text'];
                        }
                    } else {
                        element.textContent = translations[currentLang][key];
                    }
                }
            }
        }
        document.documentElement.lang = currentLang;
    }

    //===== FORM SUBMISSION AND VALIDATION =====
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('.contact__input');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff0000';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });

        const emailInput = form.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = '#ff0000';
        }

        if (!isValid) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMessage.textContent = 'Mensagem enviada com sucesso!';
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
                form.reset();
                inputs.forEach(input => input.style.borderColor = '#e0e0e0');
            } else {
                alert('Erro ao enviar a mensagem. Tente novamente.');
            }
        } catch (error) {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    });

    // Validação em tempo real para email
    const emailInput = form.querySelector('input[type="email"]');
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#ff0000';
        } else {
            emailInput.style.borderColor = '#e0e0e0';
        }
    });
});

// Função para animação caractere por caractere com controle melhor
function typeWriterCharByChar(elementId, text, speed, addCursor = false) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed); // Delay entre cada caractere
        } else if (addCursor) {
            // Adiciona a classe finished apenas se especificado
            element.classList.add('finished');
        }
    }

    element.textContent = ''; // Limpa o texto inicial
    element.classList.remove('finished'); // Garante que a classe não esteja ativa antes de começar
    type();
}

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // (Seu código existente permanece o mesmo até aqui)

    // Adicionando o typewriting caractere por caractere para os títulos da Home
    typeWriterCharByChar('home-title', 'BEM VINDO, SOU', 80, false); // Sem cursor no título
    setTimeout(() => {
        typeWriterCharByChar('home-subtitle', 'Desenvolvedor IA | Est. Eng. Software', 80, true); // Com cursor no subtítulo
    }, 1000); // Delay de 1 segundo para o segundo título começar
});
