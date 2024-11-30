// Objeto com as traduções
const translations = {
    'pt': {
        'inicio': {
            'titulo': 'Desenvolvedor Web',
            'destaque': 'Criando experiências únicas',
            'descricao': 'Sua presença digital reflete realmente seu potencial? Sou o desenvolvedor que transforma visões em experiências digitais que cativam e convertem. Combino design estratégico e código excepcional para criar sites que não apenas impressionam, mas geram resultados. Cada projeto transforma visões em experiências memoráveis.',
            'botao': 'Contato',
            'quote': 'Os grandes projetos são construídos juntos. Ninguém enfrenta a vida sozinho.'
        },
        'sobre': {
            'titulo': 'SOBRE',
            'saudacao': 'Olá, sou Ricardo Laurito',
            'descricao': 'Adoraria ajudar você a criar seu site. Se tiver alguma dúvida, não hesite em me contatar.'
        },
        // Adicione mais seções conforme necessário
    },
    'es': {
        'inicio': {
            'titulo': 'Desarrollador Web',
            'destaque': 'Creando experiencias unicas',
            'descricao': '¿Tu presencia digital refleja realmente tu potencial? Soy el desarrollador que transforma visiones en experiencias digitales que cautivan y convierten. Fusiono diseño estratégico y código excepcional para crear sitios web que no solo impresionan, sino que generan resultados. Cada proyecto, transforma visiones en experiencias memorables.',
            'botao': 'Contactarme',
            'quote': 'Los grandes proyectos se construyen juntos. Nadie enfrenta la vida solo.'
        },
        'sobre': {
            'titulo': 'SOBRE',
            'saudacao': 'Hola, soy Ricardo Laurito',
            'descricao': 'Me encantaría ayudarte a crear tu sitio web. Si tienes alguna pregunta, no dudes en contactarme.'
        },
        // Adicione mais seções conforme necessário
    }
};

// Função para atualizar o texto na página
function updatePageText(language) {
    // Início
    document.querySelector('.titulo-inicio h1').textContent = translations[language].inicio.titulo;
    document.querySelector('.destaque-inicio').textContent = translations[language].inicio.destaque;
    document.querySelector('.paragrafo-inicio p').textContent = translations[language].inicio.descricao;
    document.querySelector('.cta span').textContent = translations[language].inicio.botao;
    document.querySelector('.quote p').textContent = translations[language].inicio.quote;

    // Sobre
    const sobreElements = document.querySelectorAll('.headline-scroll span');
    sobreElements.forEach(element => {
        if (!element.classList.contains('divisor')) {
            element.textContent = translations[language].sobre.titulo;
        }
    });
    document.querySelector('.textos-sobre h1').textContent = translations[language].sobre.saudacao;
    document.querySelector('.textos-sobre p').textContent = translations[language].sobre.descricao;

    // Atualize mais elementos conforme necessário
}

// Função para detectar o país do usuário e definir o idioma
async function detectUserLanguage() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Define o idioma com base no país
        let language = 'es'; // Padrão espanhol
        if (data.country_code === 'BR') {
            language = 'pt';
        }
        
        // Atualiza os textos da página
        updatePageText(language);
        
        // Salva a preferência do usuário
        localStorage.setItem('preferredLanguage', language);
    } catch (error) {
        console.error('Erro ao detectar idioma:', error);
        // Em caso de erro, usa o idioma padrão (espanhol)
        updatePageText('es');
    }
}

// Verifica se já existe uma preferência de idioma salva
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
    updatePageText(savedLanguage);
} else {
    // Se não houver preferência salva, detecta o idioma
    detectUserLanguage();
}
