/**
 * composicao.js
 * Arquivo responsável por gerenciar as funcionalidades relacionadas às composições,
 * incluindo serviços, horários e prazos.
 */


// =========================================================
// Funções para o Card "Serviços"
// =========================================================

// Configurar eventos do card Serviços
function setupCardServicosEvents() {
  // Botão "Adicionar Serviço"
  const btnAdicionarServico = document.getElementById('btnAdicionarServico');
  if (btnAdicionarServico) {
    btnAdicionarServico.addEventListener('click', () => {
      fetch('partials/cardServicoAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardServicoPlaceholder').innerHTML = html;
          setupCardServicoAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardServicoAdd.html:', err));
    });
  }
  
  // Configurar outros eventos do card Serviços aqui, se necessário
}


// =========================================================
// Funções para o Card "Serviço Add"
// =========================================================

/**
 * Configura os eventos para o card de Adicionar Serviço
 */
function setupCardServicoAddEvents() {
  console.log('Configurando eventos do card de Adicionar Serviço');
  
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarServicoAddHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardServicos.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardServicoPlaceholder').innerHTML = html;
          // Chama a função de setup do cardServicos que está no scripts.js
          if (typeof setupCardServicosEvents === 'function') {
            setupCardServicosEvents();
          }
        })
        .catch(err => console.error('Erro ao carregar cardServicos.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarServicoAddHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Serviço adicionado com sucesso (protótipo).");
      fetch('partials/cardServicos.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardServicoPlaceholder').innerHTML = html;
          // Chama a função de setup do cardServicos que está no scripts.js
          if (typeof setupCardServicosEvents === 'function') {
            setupCardServicosEvents();
          }
        })
        .catch(err => console.error('Erro ao carregar cardServicos.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarServicoAddFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardServicos.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardServicoPlaceholder').innerHTML = html;
          // Chama a função de setup do cardServicos que está no scripts.js
          if (typeof setupCardServicosEvents === 'function') {
            setupCardServicosEvents();
          }
        })
        .catch(err => console.error('Erro ao carregar cardServicos.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarServicoAddFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Serviço adicionado com sucesso (protótipo).");
      fetch('partials/cardServicos.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardServicoPlaceholder').innerHTML = html;
          // Chama a função de setup do cardServicos que está no scripts.js
          if (typeof setupCardServicosEvents === 'function') {
            setupCardServicosEvents();
          }
        })
        .catch(err => console.error('Erro ao carregar cardServicos.html:', err));
    });
  }
  
  // Botão Avançar para o segundo item do accordion
  const btnAvancarServico = document.getElementById('btnAvancarServico');
  if (btnAvancarServico) {
    btnAvancarServico.addEventListener('click', () => {
      // Abrir o segundo item do accordion
      const collapseOne = document.getElementById('collapseOne');
      const collapseTwo = document.getElementById('collapseTwo');
      const headingOneButton = document.querySelector('#headingOne button');
      const headingTwoButton = document.querySelector('#headingTwo button');
      
      // Fechar o primeiro item
      collapseOne.classList.remove('show');
      headingOneButton.classList.add('collapsed');
      headingOneButton.setAttribute('aria-expanded', 'false');
      
      // Abrir o segundo item
      collapseTwo.classList.add('show');
      headingTwoButton.classList.remove('collapsed');
      headingTwoButton.setAttribute('aria-expanded', 'true');
    });
  }
  
  // Configurar eventos para as abas de cobrança
  const cobrancaUnicaTab = document.getElementById('cobranca-unica-tab');
  const cobrancaRecorrenteTab = document.getElementById('cobranca-recorrente-tab');
  
  if (cobrancaUnicaTab) {
    cobrancaUnicaTab.addEventListener('click', () => {
      document.getElementById('cobranca-unica').classList.add('show', 'active');
      document.getElementById('cobranca-recorrente').classList.remove('show', 'active');
      cobrancaUnicaTab.classList.add('active');
      cobrancaRecorrenteTab.classList.remove('active');
    });
  }
  
  if (cobrancaRecorrenteTab) {
    cobrancaRecorrenteTab.addEventListener('click', () => {
      document.getElementById('cobranca-recorrente').classList.add('show', 'active');
      document.getElementById('cobranca-unica').classList.remove('show', 'active');
      cobrancaRecorrenteTab.classList.add('active');
      cobrancaUnicaTab.classList.remove('active');
    });
  }
}

// Adicionar um event listener para o botão que carrega o cardServicoAdd
document.addEventListener('DOMContentLoaded', function() {
  // Este código será executado quando o documento estiver completamente carregado
  // Ele será responsável por configurar os event listeners para os botões que carregam o cardServicoAdd
  
  // Função para configurar o botão de adicionar serviço na página de composições
  function setupBtnAdicionarServico() {
    const btnAdicionarServico = document.getElementById('btnAdicionarServico');
    if (btnAdicionarServico) {
      btnAdicionarServico.addEventListener('click', function() {
        fetch('partials/cardServicoAdd.html')
          .then(response => response.text())
          .then(html => {
            document.getElementById('cardServicoPlaceholder').innerHTML = html;
            setupCardServicoAddEvents();
          })
          .catch(err => console.error('Erro ao carregar cardServicoAdd.html:', err));
      });
    }
  }
  
  // Verificar periodicamente se o botão existe (pode ser carregado dinamicamente)
  //const checkInterval = setInterval(function() {
  //  const btnAdicionarServico = document.getElementById('btnAdicionarServico');
  //  if (btnAdicionarServico) {
  //    setupBtnAdicionarServico();
  //    clearInterval(checkInterval);
  //  }
  //}, 1000); // Verificar a cada 1 segundo
});
