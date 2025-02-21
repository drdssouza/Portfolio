document.addEventListener('DOMContentLoaded', () => {
    //===== MENU SHOW =====
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId);

        if (toggle && nav) {
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
    sr.reveal('.home__subtitle', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.home__data', { interval: 200 });

    //===== SCROLL ABOUT =====
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 200 });
    sr.reveal('.about__text', { delay: 400 });
    sr.reveal('.about__data', { interval: 200 });
    sr.reveal('.about__cv-button', { delay: 600 });

    //===== SCROLL SKILLS =====
    sr.reveal('.skills__subtitle', {});
    sr.reveal('.skills__text', { delay: 200 });
    sr.reveal('.skills__data', { interval: 200 });

    //===== SCROLL PORTFOLIO =====
    sr.reveal('.portfolio__img', { interval: 200 });
    sr.reveal('.portfolio__subtitle', { delay: 200 });
    sr.reveal('.portfolio__text', { delay: 400 });

    //===== SCROLL CONTACT =====
    sr.reveal('.contact-form', { delay: 400 });
    sr.reveal('.contact__button', { delay: 600 });

    //===== LANGUAGE TOGGLE =====
    const langToggle = document.getElementById('lang-toggle');
    const cvDownloadLink = document.getElementById('cv-download-link'); // Referência ao link do CV
    const elements = {};
    const ids = [
        'home-title', 'home-subtitle', 'about-title', 'about-subtitle', 'about-profession',
        'about-text', 'about-text-2', 'skills-title', 'skills-subtitle', 'portfolio-title',
        'project-1-title', 'project-1-description', 'project-2-title', 'project-2-description',
        'project-3-title', 'project-3-description', 'contact-title',
        'nomeContato', 'emailContato', 'mensagemContato', 'enviarMensagem'
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
            "about-text": "I work as an AI Trainee at CompassUOL, applying my skills in artificial intelligence to innovative projects.",
            "about-text-2": "I’m in my penultimate year of Software Engineering, with graduation expected in July 2026",
            "skills-title": "Skills",
            "skills-subtitle": "Areas of Expertise",
            "portfolio-title": "Professional Experience",
            "project-1-title": "Verbal Aggression Detection (Team Project)",
            "project-1-description": "As part of a dynamic team at our consulting firm, we spearheaded the development of a cutting-edge system that processes video uploads via a front-end interface, storing them in AWS S3 buckets. Leveraged Amazon Transcribe for audio transcription and integrated Claude Sonnet 3.5 (LLM) to detect verbal aggression with 81% accuracy, delivering real-time insights back to the front-end and via automated email notifications. Impact: Cut response time.",
            "project-2-title": "Writing Tutor (Team Project)",
            "project-2-description": "Working closely with a skilled team at our consulting firm, we engineered an innovative solution that processes essay images uploaded via front-end, storing them in AWS S3 buckets. Used OCR to extract text and harnessed Claude Sonnet 3.5 to correct and evaluate essays with 83% accuracy, based on custom criteria in prompts, providing detailed feedback. Impact: We reduce the correction time.",
            "project-3-title": "Legal Document Summarization",
            "project-3-description": "Assigned by the company, I designed and implemented a robust system that handles PDF uploads of legal documents via front-end, stored in AWS S3. Integrated AWS Lambda with Claude Sonnet 3.5 to power an interactive chatbot, delivering precise summaries and deep insights into complex legal texts, optimizing legal productivity.",
            "contact-title": "Contact",
            "nomeContato": "Name",
            "emailContato": "Your E-mail",
            "mensagemContato": "Your Message",
            "enviarMensagem": "Send",
            "cv-text": "Download CV"
        },
        pt: {
            "home-title": "BEM VINDO, SOU",
            "home-subtitle": "Desenvolvedor IA | Estudante de Eng. de Soft.",
            "about-title": "Sobre mim",
            "about-subtitle": "Eu sou o Eduardo Schrotke",
            "about-profession": "Desenvolvedor IA | Estudante de Engenharia de Software",
            "about-text": "Atuo como desenvolvedor de IA Trainee na CompassUOL, onde aplico meus conhecimentos em inteligência artificial para projetos inovadores.",
            "about-text-2": "Estou no penúltimo ano de Engenharia de Software, com conclusão prevista para julho de 2026.",
            "skills-title": "Habilidades",
            "skills-subtitle": "Áreas de conhecimento",
            "portfolio-title": "Experiências Profissionais",
            "project-1-title": "Identificação de Agressão Verbal (Projeto em Equipe)",
            "project-1-description": "Solução Revolucionária de IA para Detecção de Agressão Verbal (Projeto em Equipe na Consultoria). Como parte de uma equipe dinâmica na nossa consultoria, lideramos o desenvolvimento de um sistema de ponta que processa vídeos via interface front-end, armazenando-os em buckets AWS S3. Utilizamos o Amazon Transcribe para transcrição de áudio e integramos o Claude Sonnet 3.5 (LLM) para identificar agressões verbais com precisão de 81%. Retornamos insights em tempo real no front-end e por e-mail, transformando a moderação de conteúdo em larga escala.Impacto: Reduzimos o tempo de análise.",
            "project-2-title": "Correção de Redação (Projeto em Equipe)",
            "project-2-description": "Em parceria com um time de desenvolvedores na nossa consultoria, criamos uma solução inovadora que processa imagens de redações via front-end, armazenando-as em buckets AWS S3. Aplicamos OCR para extrair texto e usamos o Claude Sonnet 3.5 para corrigir e avaliar redações com precisão de 83%, com base em critérios personalizados em prompts, entregando feedback detalhado. Impacto: Reduzimos o tempo de correção.",
            "project-3-title": "Resumo de Documentos Jurídicos (Tarefa Individual)",
            "project-3-description": "Atribuído pela empresa, desenvolvi um sistema que recebe PDFs de documentos jurídicos via front-end (Streamlit), armazenando-os em buckets AWS S3. Integrei à AWS Lambda com o Claude Sonnet 3.5 para criar um chatbot interativo, oferecendo resumos precisos e insights profundos sobre textos legais complexos, otimizando a produtividade jurídica.",
            "contact-title": "Contato",
            "nomeContato": "Seu Nome",
            "emailContato": "Seu E-mail",
            "mensagemContato": "Sua Mensagem",
            "enviarMensagem": "Enviar",
            "cv-text": "Baixar CV"
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
                    element.textContent = translations[currentLang][key];
                }
            }
        }
        // Atualiza o link do CV com base no idioma
        if (cvDownloadLink) {
            cvDownloadLink.href = currentLang === 'pt' ? 'assets/pdf/CV_PT.pdf' : 'assets/pdf/CV_EN.pdf';
            cvDownloadLink.download = currentLang === 'pt' ? 'CV_Eduardo_Schrotke_PT.pdf' : 'CV_Eduardo_Schrotke_EN.pdf';
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
            element.classList.add('finished');
        }
    }

    element.textContent = ''; // Limpa o texto inicial
    element.classList.remove('finished'); // Garante que a classe não esteja ativa antes de começar
    type();
}

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    typeWriterCharByChar('home-title', 'BEM VINDO, SOU', 80, false); // Sem cursor no título
    setTimeout(() => {
        typeWriterCharByChar('home-subtitle', 'Desenvolvedor IA | Est. Eng. Software', 80, true); // Com cursor no subtítulo
    }, 1000); // Delay de 1 segundo para o segundo título começar
});