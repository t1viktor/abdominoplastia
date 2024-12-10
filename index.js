// Dados do conteúdo dos modais
let secs = document.querySelectorAll(".sec");
secs.forEach(sec => {
    sec.classList.add('shadow-inner', 'border-b-2', 'border-black', 'shadow-black', 'bg-slate-800','items-center', 'p-6', 'flex', 'flex-col', 'gap-4');
});

let imgSec = document.querySelectorAll(".imgSec");
imgSec.forEach(imgSec => {
    imgSec.classList.add('m-4', 'border-2', 'border-slate-900', 'shadow-md', 'shadow-black');
});

let h2Sec = document.querySelectorAll(".h2Sec");
h2Sec.forEach(h2Sec => {
    h2Sec.classList.add('text-orange-200 text-4xl text-center py-3 border-b-2');
});

let pSec = document.querySelectorAll(".pSec");
pSec.forEach(pSec => {
    pSec.classList.add('text-gray-200', 'py-10', 'px-6', 'text-lg', 'items-center', 'flex', 'gap-6', 'flex-col');
});

const modalData = {
    procedure: {
        title: "Sobre a Abdominoplastia",
        content: `
            <div class="modal-section">
                <h3>O que é a Abdominoplastia?</h3>
                <p>A abdominoplastia é uma cirurgia que visa remodelar o abdômen, removendo o excesso de pele e gordura, além de corrigir a musculatura abdominal quando necessário.</p>
                <div class="info-alert">
                    <strong>Importante:</strong> O sucesso da cirurgia depende tanto do procedimento quanto dos cuidados pós-operatórios.
                </div>
            </div>
        `
    },
    cuidados: {
        title: "Cuidados Imediatos e Gerais",
        content: `
        <img class="" src="img/pacienteDeitado.jpg" alt="">
        
            <div class="modal-section">
                <li>Após a abdominoplastia, o corpo precisa de um período de recuperação para se ajustar e cicatrizar. Siga as orientações abaixo para proteger a área operada e reduzir o risco de complicações:</li>

                <ul class="info-list">

                    <li> Evite esforços físicos: Nos primeiros 15 dias, evite qualquer tipo de esforço ou movimento brusco. Isso inclui carregar peso, subir escadas em excesso ou fazer exercícios físicos.</li>

                    <li> Repouse adequadamente: O repouso é essencial nos primeiros dias. Prefira descansar em uma posição levemente inclinada, com o tronco elevado e os joelhos flexionados para aliviar a tensão na área abdominal.</li>

                    <li> Movimente-se com cuidado: Movimente-se devagar e, sempre que possível, com o auxílio de outra pessoa, principalmente nas primeiras 48 horas. Pequenas caminhadas ajudam a ativar a circulação e prevenir trombose.
</li>

                    <li> Atenção aos sinais de alerta: Caso observe sangramentos, febre, dor intensa e persistente, vermelhidão ou inchaço anormal, entre em contato com sua equipe médica imediatamente.</li>

                </ul>
            </div>
            <div class="modal-section">
                <h3>Sinais de Alerta</h3>
                <div class="info-alert">
                    <p>Contate seu médico imediatamente se observar:</p>
                    <ul class="info-list">
                        <li>Sangramentos</li>
                        <li>Febre</li>
                        <li>Dor intensa e persistente</li>
                        <li>Vermelhidão ou inchaço anormal</li>
                    </ul>
                </div>
            </div>
        `
    },
    alimentacao: {
        title: "2. Cuidados com a Alimentação",
        content: `

         <img class="imgSec" src="img/comidaSaudavel.jpg" alt="">
            <div class="modal-section">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-icon">🥩</span>
                        <h3>Proteínas</h3>
                        <ul class="info-list">
                            <li>Carnes magras</li>
                            <li>Peixes</li>
                            <li>Ovos</li>
                            <li>Leguminosas</li>
                        </ul>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🥗</span>
                        <h3>Vegetais e Frutas</h3>
                        <ul class="info-list">
                            <li>Vegetais folhosos</li>
                            <li>Frutas ricas em vitamina C</li>
                            <li>Legumes variados</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>Alimentos a Evitar</h3>
                <div class="info-alert">
                    <ul class="info-list">
                        <li>Alimentos processados e ricos em sódio</li>
                        <li>Açúcar e frituras</li>
                        <li>Álcool e cafeína</li>
                    </ul>
                </div>
            </div>
        `
    },
    // Adicione este objeto ao modalData existente
higiene: {
    title: "3. Higiene e Cuidados com a Ferida Operatória",
    content: `
        <div class="modal-section">
            <div class="info-grid">
                <div class="info-item">
                    <h4>Manter a área operada limpa e protegida é fundamental para evitar infecções e garantir uma cicatrização adequada.</h4>
                    <img class="imgSec" src="img/pessoaLavandoMaos.jpg" alt="">
                    <ul class="info-list">

                        <li>Banhos: Somente banhos rápidos, e com autorização médica, geralmente após o segundo dia. Evite molhar a área da incisão nas primeiras semanas.</li>

                        <li>Curativos: Siga as orientações médicas para troca dos curativos, e nunca mexa na área operada sem higienizar bem as mãos antes.o</li>

                        <img class="imgSec" src="img/materiaisHigiene.jpg" alt=""> <br>

                        <li>Uso de Antissépticos: Em geral, a limpeza da ferida deve ser feita com solução antisséptica recomendada pela equipe médica. Não utilize produtos caseiros, como álcool, sem recomendação.</li>

                        <li>Secagem: Após a higiene, seque cuidadosamente com uma toalha limpa, sem friccionar.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    `
},
    fisioterapia: {
        title: "4. Fisioterapia Pós-operatória",
        content: `
            <div class="modal-section">
                <div class="info-grid">

                <img class="imgSec" src="img/CA1A2644.JPEG" alt="">

                    <div class="info-item">
                        <h3>Drenagem Linfática Manual:</h3>
                        <p>A drenagem linfática é uma técnica suave que ajuda a reduzir o inchaço e eliminar líquidos retidos, o que melhora o conforto e acelera a recuperação. Realizada por fisioterapeutas especializados, a drenagem previne a formação de fibroses e otimiza a circulação linfática.</p>
                    </div>

                    <img src="/img/fotoExplicando.JPEG" alt="" class="imgSec">
                    <div class="info-item">
                        <h3>Carboxiterapia:</h3>
                        <p>Esse tratamento utiliza pequenas injeções de gás carbônico no tecido subcutâneo, o que melhora a oxigenação local e contribui para uma cicatrização mais uniforme e saudável. A carboxiterapia também ajuda a reduzir a formação de fibroses, mantendo a pele mais lisa e flexível.</p>
                    </div>

                    <img src="/img/fotoConsulta.JPEG" alt="" class="imgSec">
                    <div class="info-item">
                        <h3>Terapias com Laser:</h3>
                        <p>O uso de lasers específicos no pós-operatório ajuda a estimular a regeneração celular, melhorando a qualidade da cicatriz e diminuindo a inflamação. Lasers terapêuticos também auxiliam na prevenção de retrações cutâneas e na formação de cicatrizes hipertróficas.</p>
                    </div>

                    <h3>Esses tratamentos devem ser realizados por profissionais especializados, em frequência e duração recomendadas pelo seu cirurgião e fisioterapeuta.</h3>

                    

                </div>
            </div>
        `
},
    cinta: {
        title: "5. Uso da Cinta e das Meias de Compressão",
        content: `
            <div class="modal-section">
                <h3>O uso adequado da cinta e das meias de compressão é essencial para a recuperação, pois ajuda na contenção do edema, no suporte à pele e na prevenção de trombose.</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <h4>Cinta Abdominal</h4>
                        <ul class="info-list">
                            <li>Utilize a cinta 24 horas por dia durante o primeiro mês, removendo apenas para a higiene. O tempo de uso poderá variar de acordo com a orientação médica, mas em média, ela deve ser usada por cerca de dois a três meses.</li>

                            <li>Certifique-se de que a cinta está ajustada ao corpo, mas não apertada demais. Ajustes muito intensos podem prejudicar a circulação e causar desconforto.</li>

                        </ul>
                    </div>
                    <div class="info-item">
                        <h4>Meias de Compressão</h4>
                        <ul class="info-list">
                            <li>As meias de compressão são fundamentais para prevenir tromboses. Use-as diariamente pelo período orientado pelo seu cirurgião (em geral, de 14 a 28 dias).</li>
                            <li>As meias podem ser retiradas para dormir (após a primeira semana), conforme a orientação médica.</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
    
            <div class="modal-section">
                <h3>Cuidados com o Ajuste</h3>
                <div class="info-alert">
                    <p>A cinta deve estar:</p>
                    <ul class="info-list">
                        <li>Bem ajustada, mas não excessivamente apertada</li>
                        <li>Sem dobras ou rugas que possam marcar a pele</li>
                        <li>Cobrindo toda a região operada</li>
                    </ul>
                </div>
            </div>
    
            <div class="modal-section">
                <h3>Benefícios do Uso Correto</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-icon">✨</span>
                        <h4>Redução do Inchaço</h4>
                        <p>Ajuda a diminuir o edema pós-operatório</p>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🎯</span>
                        <h4>Melhor Cicatrização</h4>
                        <p>Auxilia na adesão dos tecidos</p>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">💪</span>
                        <h4>Suporte Muscular</h4>
                        <p>Oferece apoio à musculatura operada</p>
                    </div>
                </div>
            </div>
    
            <div class="modal-section">
                <h3>Higienização da Cinta</h3>
                <ul class="info-list">
                    <li>Lave a cinta delicadamente com sabão neutro</li>
                    <li>Não use alvejante ou produtos abrasivos</li>
                    <li>Seque à sombra, evitando exposição direta ao sol</li>
                    <li>Recomenda-se ter duas cintas para revezamento</li>
                </ul>
            </div>
    
            <div class="modal-section">
                <h3>Sinais de Ajuste Inadequado</h3>
                <div class="info-alert">
                    <p>Observe se há:</p>
                    <ul class="info-list">
                        <li>Dificuldade para respirar</li>
                        <li>Dormência excessiva</li>
                        <li>Marcas profundas na pele</li>
                        <li>Dobras ou enrugamento da cinta</li>
                    </ul>
                    <p>Em caso de desconforto excessivo, consulte seu cirurgião para ajustes.</p>
                </div>
            </div>
    
            <div class="modal-section">
                <h3>Meias de Compressão</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <h4>Período de Uso</h4>
                        <ul class="info-list">
                            <li>Use durante 14 a 28 dias</li>
                            <li>Pode ser retirada para dormir após a primeira semana</li>
                        </ul>
                    </div>
                    <div class="info-item">
                        <h4>Importância</h4>
                        <ul class="info-list">
                            <li>Previne trombose</li>
                            <li>Melhora a circulação</li>
                            <li>Reduz o risco de edema</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    Posições: {
        title: "6. Posições Corporais",
        content: `
            <div class="modal-section">
                <h3>As posições adotadas no pós-operatório são muito importantes para proteger a ferida e ajudar na sua recuperação.</h3>
                <img src="/img/pessoaCurvada.jpg" alt="">
                <div class="info-item">
                        <h4>Deitar-se com tronco elevado e pernas flexionadas</h4>
                        <ul class="info-list">
                            <li>Adote essa posição para descansar, pois ela reduz a pressão no abdômen e contribui para a cicatrização. </li>
                        </ul>
                    
                        <h4>Evitar posturas eretas nos primeiros dias</h4>
                        <ul class="info-list">
                            <li>Caminhe levemente curvado para frente até que o médico autorize a retomar a postura reta. Isso reduz a tensão na área da cicatriz. </li>
                        </ul>
                    </div>
            </div>
        `
    },
    Recomendações: {
        title: "7. Recomendações Finais para um Pós-operatório Tranquilo",
        content: `
            <div class="modal-section">
<img class="imgSec" src="img/pacienteTranquila.jpg" alt="">
            <h3>A recuperação completa é um processo gradual, que depende tanto do trabalho da equipe médica quanto dos cuidados diários que você realiza. Com disciplina e atenção às recomendações, você estará no caminho para uma recuperação mais rápida e segura, alcançando os melhores resultados possíveis na sua abdominoplastia.</h3>
           
                <div class="info-item">


                        <h4>Controle do Inchaço</h4>
                        <ul class="info-list">
                            <li>Utilize compressas frias na região abdominal conforme a orientação médica para ajudar a reduzir o inchaço.</li>
                        </ul>
                    
                        <h4>Evite Tabagismo</h4>
                        <ul class="info-list">
                            <li>Não fume, pois o cigarro compromete a oxigenação dos tecidos e dificulta a cicatrização.</li>
                        </ul>

                        <h4>Atente-se aos retornos médicos<h4>
                        <ul class="info-list">
                            <li>Compareça a todas as consultas de revisão para garantir que sua recuperação está no caminho certo.</li>
                        </ul>
                        <img class="imgSec" src="img/pacienteFeliz.jpg" alt="">
                    </div>
            </div>
        `
    },
    resultados: {
        title: "Resultados e Recuperação",
        content: `
            <div class="modal-section">
                <h3>Evolução dos Resultados</h3>
                <div class="info-table">
                    <table>
                        <tr>
                            <th>Período</th>
                            <th>Evolução</th>
                        </tr>
                        <tr>
                            <td>1-2 semanas</td>
                            <td>Redução inicial do inchaço</td>
                        </tr>
                        <tr>
                            <td>1-2 meses</td>
                            <td>Retorno gradual às atividades</td>
                        </tr>
                        <tr>
                            <td>3-6 meses</td>
                            <td>Resultados finais visíveis</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    }
};

// Classe do Modal
class Modal {
    constructor() {
        this.createModal();
        this.bindEvents();
        this.activeModal = null;
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <h2 class="modal-title"></h2>
                    <button class="modal-close" aria-label="Fechar">×</button>
                </div>
                <div class="modal-content"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        this.modal = modal;
        this.overlay = modal.querySelector('.modal-overlay');
        this.container = modal.querySelector('.modal-container');
        this.closeBtn = modal.querySelector('.modal-close');
        this.title = modal.querySelector('.modal-title');
        this.content = modal.querySelector('.modal-content');
    }

    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close();
            }
        });

        // Prevenir scroll do body quando modal estiver aberto
        this.modal.addEventListener('wheel', (e) => {
            if (!this.container.contains(e.target)) {
                e.preventDefault();
            }
        });
    }

    open(id) {
        const data = modalData[id];
        if (!data) return;

        this.activeModal = id;
        this.title.textContent = data.title;
        this.content.innerHTML = data.content;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset scroll position
        this.container.scrollTop = 0;

        // Animação de entrada
        requestAnimationFrame(() => {
            this.container.style.opacity = '1';
            this.container.style.transform = 'translateY(0)';
        });
    }

    close() {
        if (!this.activeModal) return;

        this.container.style.opacity = '0';
        this.container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
            this.activeModal = null;
        }, 200);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal();

    // Adiciona listeners aos botões de informação
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modal;
            modal.open(modalId);
        });
    });

    // Observer para animações de entrada
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observa elementos para animação
    document.querySelectorAll('.care-card, .step, .stat-box').forEach(el => {
        observer.observe(el);
    });
});

// Sistema de Analytics (opcional)
const trackModalOpen = (modalId) => {
    if (window.gtag) {
        gtag('event', 'modal_open', {
            'modal_id': modalId
        });
    }
};