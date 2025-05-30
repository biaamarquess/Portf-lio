// Script para animações e interatividade da página de habilidades futurista
document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    const skillCards = document.querySelectorAll('.skill-card');
    const detailsPanel = document.querySelector('.skill-details-panel');
    const panelContent = document.querySelector('.panel-content');
    
    // Dados detalhados de cada habilidade
    const skillDetails = {
        html: {
            title: 'HTML',
            description: 'HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web.',
            features: [
                'Estruturação semântica de conteúdo',
                'Acessibilidade e SEO otimizado',
                'Integração com diversas tecnologias web',
                'Formulários e validação de dados'
            ],
            experience: 'Experiência com HTML5, tags semânticas, e boas práticas de estruturação.'
        },
        css: {
            title: 'CSS',
            description: 'CSS (Cascading Style Sheets) é usado para estilizar e formatar conteúdo HTML.',
            features: [
                'Layouts responsivos com Flexbox e Grid',
                'Animações e transições avançadas',
                'Pré-processadores como SASS/SCSS',
                'CSS Modules e metodologias como BEM'
            ],
            experience: 'Domínio de técnicas modernas de estilização e animação para interfaces dinâmicas.'
        },
        javascript: {
            title: 'JavaScript',
            description: 'JavaScript é a linguagem de programação que permite criar conteúdo dinâmico na web.',
            features: [
                'ES6+ e recursos modernos da linguagem',
                'Manipulação avançada do DOM',
                'Promises, async/await e APIs',
                'Frameworks como React, Vue e Angular'
            ],
            experience: 'Desenvolvimento de aplicações web interativas e dinâmicas com JavaScript moderno.'
        },
        python: {
            title: 'Python',
            description: 'Python é uma linguagem versátil usada em desenvolvimento web, ciência de dados e automação.',
            features: [
                'Frameworks web como Django e Flask',
                'Análise de dados com Pandas e NumPy',
                'Automação de tarefas e scripts',
                'Integração com APIs e serviços'
            ],
            experience: 'Criação de aplicações backend, scripts de automação e análise de dados.'
        },
        github: {
            title: 'GitHub',
            description: 'GitHub é uma plataforma de hospedagem de código e colaboração para desenvolvimento de software.',
            features: [
                'Hospedagem e compartilhamento de repositórios',
                'Colaboração em projetos open source',
                'GitHub Pages para deploy de sites',
                'GitHub Actions para CI/CD'
            ],
            experience: 'Gerenciamento de projetos, colaboração em equipe e integração contínua.'
        },
        git: {
            title: 'Git',
            description: 'Git é um sistema de controle de versão distribuído para rastrear mudanças no código fonte.',
            features: [
                'Controle de versão e histórico de alterações',
                'Branching e merging para fluxos de trabalho',
                'Resolução de conflitos',
                'Git hooks e automação'
            ],
            experience: 'Fluxos de trabalho eficientes com Git para projetos individuais e em equipe.'
        },
        figma: {
            title: 'Figma',
            description: 'Figma é uma ferramenta de design de interface baseada na web para colaboração em tempo real.',
            features: [
                'Design de interfaces e prototipagem',
                'Componentes e sistemas de design',
                'Colaboração em tempo real',
                'Handoff para desenvolvedores'
            ],
            experience: 'Criação de interfaces modernas, protótipos interativos e sistemas de design.'
        },
        canva: {
            title: 'Canva',
            description: 'Canva é uma plataforma de design gráfico para criar conteúdo visual para mídias sociais, apresentações e mais.',
            features: [
                'Design gráfico para redes sociais',
                'Criação de apresentações e infográficos',
                'Templates e recursos prontos',
                'Colaboração e compartilhamento'
            ],
            experience: 'Produção de conteúdo visual atraente para marketing digital e comunicação.'
        }
    };

    // Inicializar barras de progresso com animação
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.level-fill');
        progressBars.forEach(bar => {
            const percent = bar.style.getPropertyValue('--percent');
            bar.style.width = percent;
        });
    }, 500);

    // Adicionar efeito de cursor futurista
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Adicionar efeito de partículas nos cards
    function createParticles(element) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posição aleatória
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            particle.style.cssText = `
                position: absolute;
                width: 5px;
                height: 5px;
                background: #fff;
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                opacity: 0;
                box-shadow: 0 0 10px 2px var(--primary-color);
                animation: particle-animation 1.5s ease-out forwards;
            `;
            
            element.appendChild(particle);
            
            // Remover partícula após a animação
            setTimeout(() => {
                if (particle.parentNode === element) {
                    element.removeChild(particle);
                }
            }, 1500);
        }
    }

    // Adicionar estilos para animação de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particle-animation {
            0% { transform: translate(0, 0); opacity: 1; }
            100% { transform: translate(var(--x, 50px), var(--y, 50px)); opacity: 0; }
        }
        
        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: transparent;
            border: 2px solid var(--primary-color);
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            transition: width 0.3s, height 0.3s, border-color 0.3s;
            box-shadow: 0 0 10px var(--primary-color);
        }
        
        .skill-card:hover ~ .cursor {
            width: 40px;
            height: 40px;
            border-color: var(--secondary-color);
        }
    `;
    document.head.appendChild(style);

    // Interatividade dos cards
    skillCards.forEach(card => {
        // Efeito ao passar o mouse
        card.addEventListener('mouseenter', function() {
            createParticles(this);
            
            // Adicionar classe de destaque
            skillCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
        
        // Efeito ao clicar
        card.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            const details = skillDetails[skill];
            
            if (details) {
                // Atualizar painel de detalhes
                updateDetailsPanel(details);
                
                // Efeito de pulso no card
                this.style.animation = 'pulse 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
                
                // Scroll suave até o painel
                detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Função para atualizar o painel de detalhes
    function updateDetailsPanel(details) {
        // Efeito de fade out
        panelContent.style.opacity = '0';
        
        setTimeout(() => {
            // Atualizar conteúdo
            let featuresHTML = '';
            details.features.forEach(feature => {
                featuresHTML += `<li>${feature}</li>`;
            });
            
            panelContent.innerHTML = `
                <h3>${details.title}</h3>
                <div class="panel-description">
                    <p>${details.description}</p>
                    <h4>Recursos e Competências:</h4>
                    <ul>${featuresHTML}</ul>
                    <p class="experience"><strong>Experiência:</strong> ${details.experience}</p>
                </div>
            `;
            
            // Efeito de fade in
            panelContent.style.opacity = '1';
            
            // Adicionar estilos específicos
            const panelStyle = document.createElement('style');
            panelStyle.textContent = `
                .panel-description h4 {
                    margin: 15px 0 10px;
                    font-family: 'Orbitron', sans-serif;
                    color: var(--primary-color);
                }
                
                .panel-description ul {
                    list-style-type: none;
                    padding-left: 0;
                    margin-bottom: 15px;
                }
                
                .panel-description li {
                    padding: 5px 0 5px 25px;
                    position: relative;
                }
                
                .panel-description li:before {
                    content: '>';
                    position: absolute;
                    left: 0;
                    color: var(--secondary-color);
                    font-weight: bold;
                }
                
                .experience {
                    margin-top: 15px;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.9);
                }
            `;
            document.head.appendChild(panelStyle);
        }, 300);
    }

    // Adicionar animação de digitação para o subtítulo
    const subtitle = document.querySelector('.subtitle');
    const subtitleText = subtitle.textContent;
    subtitle.textContent = '';
    
    let charIndex = 0;
    function typeSubtitle() {
        if (charIndex < subtitleText.length) {
            subtitle.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeSubtitle, 50);
        }
    }
    
    setTimeout(typeSubtitle, 1000);

    // Adicionar efeito de pulso ao título
    const glitchTitle = document.querySelector('.glitch');
    setInterval(() => {
        glitchTitle.style.textShadow = '0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color)';
        setTimeout(() => {
            glitchTitle.style.textShadow = '0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 20px var(--primary-color)';
        }, 200);
    }, 3000);

    // Adicionar efeito de scanner
    const scanner = document.createElement('div');
    scanner.classList.add('scanner');
    document.body.appendChild(scanner);
    
    const scannerStyle = document.createElement('style');
    scannerStyle.textContent = `
        .scanner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary-color), var(--secondary-color), transparent);
            z-index: 9998;
            opacity: 0.7;
            animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
            0% {
                top: 0%;
            }
            100% {
                top: 100%;
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(scannerStyle);
});



// Script para melhorar a experiência da fila de projetos

document.addEventListener('DOMContentLoaded', function() {
    const projectsTrack = document.querySelector('.projects-track');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Função para clonar cards e garantir animação contínua
    function setupInfiniteScroll() {
        // Verificar se já temos cards suficientes para a animação
        const trackWidth = projectsTrack.scrollWidth;
        const viewportWidth = document.querySelector('.projects-container').clientWidth;
        
        // Se precisarmos de mais cards para preencher a animação
        if (trackWidth < viewportWidth * 3) {
            // Clone os cards originais (não os duplicados)
            const originalCards = Array.from(projectCards).slice(0, 5);
            
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                projectsTrack.appendChild(clone);
            });
        }
    }
    
    // Adicionar interatividade aos cards
    projectCards.forEach(card => {
        // Efeito de foco ao passar o mouse
        card.addEventListener('mouseenter', function() {
            // Adicionar classe de destaque
            this.classList.add('active');
            
            // Reduzir a opacidade dos outros cards
            projectCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        // Remover efeito ao tirar o mouse
        card.addEventListener('mouseleave', function() {
            // Remover classe de destaque
            this.classList.remove('active');
            
            // Restaurar opacidade de todos os cards
            projectCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
        
        // Simular clique duplo para "melhor visualização"
        card.addEventListener('dblclick', function() {
            // Adicionar classe para expandir o card
            this.classList.toggle('expanded');
            
            // Se expandido, centralizar na tela
            if (this.classList.contains('expanded')) {
                const rect = this.getBoundingClientRect();
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Centralizar o card na janela
                window.scrollTo({
                    top: rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2),
                    left: rect.left + scrollLeft - (window.innerWidth / 2) + (rect.width / 2),
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Verificar se precisamos de mais cards para a animação contínua
    setupInfiniteScroll();
    
    // Recalcular em caso de redimensionamento da janela
    window.addEventListener('resize', setupInfiniteScroll);
});
