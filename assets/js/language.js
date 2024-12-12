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
        'portfolio': {
            'titulo': 'PORTFÓLIO',
            'h1': 'Meu Portfólio',
            'span': 'Veja alguns dos meus projetos mais recentes.',
            'descricao': 'Veja alguns dos projetos que desenvolvi.'
        },
        'contato': {
            'titulo': 'CONTATO',
            'h1': 'Entre em Contato',
            'conteudo_contato': {
                'h2': 'Fale Comigo',
                'descricao': 'Entre em contato comigo através do formulário abaixo.'
            }
        },
        'skills': {
            'titulo': 'Habilidades',
            'h2': 'Minhas Habilidades',
            'h3': 'Tecnologias que utilizo',
            'descricao': 'Aqui estão algumas das habilidades que possuo e as tecnologias que utilizo para desenvolver projetos de alta qualidade.',
            'conteudo_skills': {
                'skill1': {
                    'titulo': 'HTML',
                    'descricao': 'Experiência em criar estruturas de páginas web semânticas e acessíveis.'
                },
                'skill2': {
                    'titulo': 'CSS',
                    'descricao': 'Domínio em estilização de páginas com CSS e pré-processadores como SASS.'
                },
                'skill3': {
                    'titulo': 'JavaScript',
                    'descricao': 'Habilidade em desenvolver interatividade e funcionalidades dinâmicas.'
                },
                'skill4': {
                    'titulo': 'React',
                    'descricao': 'Experiência em construir interfaces de usuário com React e gerenciamento de estado.'
                },
                'skill5': {
                    'titulo': 'Node.js',
                    'descricao': 'Capacidade de desenvolver aplicações backend utilizando Node.js e Express.'
                },
                'skill6': {
                    'titulo': 'Git',
                    'descricao': 'Familiaridade com controle de versão e colaboração em projetos utilizando Git.'
                }
            }
        },
        'servicos': {
            'titulo': 'Serviços',
            'descricao': 'Ofereço uma variedade de serviços para atender às suas necessidades digitais.',
            'servicos_cards': {
                'card1': {
                    'titulo': 'Desenvolvimento Web',
                    'descricao': 'Criação de sites responsivos e otimizados para SEO.'
                },
                'card2': {
                    'titulo': 'Design UI/UX',
                    'descricao': 'Desenvolvimento de interfaces intuitivas e experiências de usuário agradáveis.'
                },
                'card3': {
                    'titulo': 'Consultoria Digital',
                    'descricao': 'Orientação sobre estratégias digitais e marketing online.'
                }
            }
        },
        'free-your-mind': {
            'span': 'Liberte sua mente e explore novas possibilidades.'
        },
        'footer': {
            'a': 'Voltar ao topo',
            'p': '© 2024 Ricardo Laurito. Todos os direitos reservados.'
        },
        'toast': {
            'span': 'Mensagem enviada com sucesso!'
        }
    },
    'es': {
        'inicio': {
            'titulo': 'Desarrollador Web',
            'destaque': 'Creando experiencias únicas',
            'descricao': '¿Tu presencia digital refleja realmente tu potencial? Soy el desarrollador que transforma visiones en experiencias digitales que cautivan y convierten. Combino diseño estratégico y código excepcional para crear sitios web que no solo impresionan, sino que generan resultados. Cada proyecto transforma visiones en experiencias memorables.',
            'botao': 'Contacto',
            'quote': 'Los grandes proyectos se construyen juntos. Nadie enfrenta la vida solo.'
        },
        'sobre': {
            'titulo': 'SOBRE MÍ',
            'saudacao': 'Hola, soy Ricardo Laurito',
            'descricao': 'Me encantaría ayudarte a crear tu sitio web. Si tienes alguna duda, no dudes en contactarme.'
        },
        'portfolio': {
            'titulo': 'PORTAFOLIO',
            'h1': 'Mi Portafolio',
            'span': 'Mira algunos de mis proyectos más recientes.',
            'descricao': 'Mira algunos de los proyectos que he desarrollado.'
        },
        'contato': {
            'titulo': 'CONTACTO',
            'h1': 'Ponte en Contacto',
            'conteudo_contato': {
                'h2': 'Hable Conmigo',
                'descricao': 'Ponte en contacto conmigo a través del formulario a continuación.'
            }
        },
        'skills': {
            'titulo': 'Habilidades',
            'h2': 'Mis Habilidades',
            'h3': 'Tecnologías que utilizo',
            'descricao': 'Aquí hay algunas de las habilidades que poseo y las tecnologías que utilizo para desarrollar proyectos de alta calidad.',
            'conteudo_skills': {
                'skill1': {
                    'titulo': 'HTML',
                    'descricao': 'Experiencia en crear estructuras de páginas web semánticas y accesibles.'
                },
                'skill2': {
                    'titulo': 'CSS',
                    'descricao': 'Dominio en estilización de páginas con CSS y preprocesadores como SASS.'
                },
                'skill3': {
                    'titulo': 'JavaScript',
                    'descricao': 'Habilidad en desarrollar interactividad y funcionalidades dinámicas.'
                },
                'skill4': {
                    'titulo': 'React',
                    'descricao': 'Experiencia en construir interfaces de usuario con React y gestión de estado.'
                },
                'skill5': {
                    'titulo': 'Node.js',
                    'descricao': 'Capacidad de desarrollar aplicaciones backend utilizando Node.js y Express.'
                },
                'skill6': {
                    'titulo': 'Git',
                    'descricao': 'Familiaridad con control de versiones y colaboración en proyectos utilizando Git.'
                }
            }
        },
        'servicos': {
            'titulo': 'Servicios',
            'descricao': 'Ofrezco una variedad de servicios para satisfacer sus necesidades digitales.',
            'servicos_cards': {
                'card1': {
                    'titulo': 'Desarrollo Web',
                    'descricao': 'Creación de sitios web responsivos y optimizados para SEO.'
                },
                'card2': {
                    'titulo': 'Diseño UI/UX',
                    'descricao': 'Desarrollo de interfaces intuitivas y experiencias de usuario agradables.'
                },
                'card3': {
                    'titulo': 'Consultoría Digital',
                    'descricao': 'Orientación sobre estrategias digitales y marketing en línea.'
                }
            }
        },
        'free-your-mind': {
            'span': 'Libera tu mente y explora nuevas posibilidades.'
        },
        'footer': {
            'a': 'Volver al inicio',
            'p': '© 2024 Ricardo Laurito. Todos los derechos reservados.'
        },
        'toast': {
            'span': '¡Mensaje enviado con éxito!'
        }
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
