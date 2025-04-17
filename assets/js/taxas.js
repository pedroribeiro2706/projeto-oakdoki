// assets/js/taxas.js

// Elementos principais
const cardTaxasPlaceholder = document.getElementById('cardTaxasPlaceholder');

/**
 * Função para carregar o card principal de Taxas
 */
function loadCardTaxas() {
  fetch('partials/cardTaxas.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao buscar o arquivo: ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      cardTaxasPlaceholder.innerHTML = html;
      setupCardTaxasEvents();
    })
    .catch(error => {
      console.error('Erro ao carregar o card de Taxas:', error);
    });
}

/**
 * Configurar eventos do card principal de Taxas
 */
function setupCardTaxasEvents() {
  const btnOutrasTaxas = document.getElementById('btnOutrasTaxas');
  
  if (btnOutrasTaxas) {
    btnOutrasTaxas.addEventListener('click', loadCardOutrasTaxas);
  } else {
    console.error('Botão Outras taxas não encontrado');
  }
}

/**
 * Função para carregar o card de Outras Taxas
 */
function loadCardOutrasTaxas() {
  fetch('partials/cardOutrasTaxas.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao buscar o arquivo: ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      cardTaxasPlaceholder.innerHTML = html;
      setupCardOutrasTaxasEvents();
    })
    .catch(error => {
      console.error('Erro ao carregar o card de Outras Taxas:', error);
    });
}

/**
 * Configurar eventos do card de Outras Taxas
 */
function setupCardOutrasTaxasEvents() {
  // Botões de voltar
  const btnVoltarTaxasHeader = document.getElementById('btnVoltarTaxasHeader');
  const btnVoltarTaxasFooter = document.getElementById('btnVoltarTaxasFooter');
  
  // Botões de salvar
  const btnSalvarTaxasHeader = document.getElementById('btnSalvarTaxasHeader');
  const btnSalvarTaxasFooter = document.getElementById('btnSalvarTaxasFooter');
  
  // Botão avançar
  const btnAvancarTaxas = document.getElementById('btnAvancarTaxas');
  
  // Botão salvar configurações
  const btnSalvarConfigTaxas = document.getElementById('btnSalvarConfigTaxas');
  
  // Campos de radio buttons
  const incidenciaPorcentagem = document.getElementById('incidenciaPorcentagem');
  const incidenciaValor = document.getElementById('incidenciaValor');
  const valorPorcentagem = document.getElementById('valorPorcentagem');
  const valorReais = document.getElementById('valorReais');
  
  // Campos de frequência de cobrança
  const cobrarCadaPedido = document.getElementById('cobrarCadaPedido');
  const porTemporada = document.getElementById('porTemporada');
  const anuidades = document.getElementById('anuidades');
  const diasTemporada = document.getElementById('diasTemporada');
  const mesesAnuidade = document.getElementById('mesesAnuidade');
  
  // Select de unidade
  const selectUnidade = document.getElementById('selectUnidade');
  const conteudoUnidade = document.getElementById('conteudoUnidade');
  
  // Adicionar eventos aos botões de voltar
  if (btnVoltarTaxasHeader) {
    btnVoltarTaxasHeader.addEventListener('click', loadCardTaxas);
  }
  
  if (btnVoltarTaxasFooter) {
    btnVoltarTaxasFooter.addEventListener('click', loadCardTaxas);
  }
  
  // Adicionar eventos aos botões de salvar
  if (btnSalvarTaxasHeader) {
    btnSalvarTaxasHeader.addEventListener('click', salvarTaxas);
  }
  
  if (btnSalvarTaxasFooter) {
    btnSalvarTaxasFooter.addEventListener('click', salvarTaxas);
  }
  
  // Adicionar evento ao botão avançar
  if (btnAvancarTaxas) {
    btnAvancarTaxas.addEventListener('click', function() {
      // Abrir o segundo item do accordion
      const collapseTwo = document.getElementById('collapseTwo');
      const headingTwo = document.getElementById('headingTwo');
      const btnCollapseTwo = headingTwo.querySelector('button');
      
      if (collapseTwo && btnCollapseTwo) {
        btnCollapseTwo.click();
      }
    });
  }
  
  // Adicionar evento ao botão salvar configurações
  if (btnSalvarConfigTaxas) {
    btnSalvarConfigTaxas.addEventListener('click', salvarConfigTaxas);
  }
  
  // Adicionar eventos aos radio buttons de incidência
  if (incidenciaPorcentagem && incidenciaValor && valorPorcentagem && valorReais) {
    incidenciaPorcentagem.addEventListener('change', function() {
      if (this.checked) {
        valorPorcentagem.disabled = false;
        valorReais.disabled = true;
      }
    });
    
    incidenciaValor.addEventListener('change', function() {
      if (this.checked) {
        valorPorcentagem.disabled = true;
        valorReais.disabled = false;
      }
    });
  }
  
  // Adicionar eventos aos radio buttons de frequência de cobrança
  if (cobrarCadaPedido && porTemporada && anuidades && diasTemporada && mesesAnuidade) {
    cobrarCadaPedido.addEventListener('change', function() {
      if (this.checked) {
        diasTemporada.disabled = true;
        mesesAnuidade.disabled = true;
      }
    });
    
    porTemporada.addEventListener('change', function() {
      if (this.checked) {
        diasTemporada.disabled = false;
        mesesAnuidade.disabled = true;
      }
    });
    
    anuidades.addEventListener('change', function() {
      if (this.checked) {
        diasTemporada.disabled = true;
        mesesAnuidade.disabled = false;
      }
    });
  }
  
  // Adicionar evento ao select de unidade
  if (selectUnidade && conteudoUnidade) {
    selectUnidade.addEventListener('change', function() {
      if (this.value) {
        conteudoUnidade.classList.remove('d-none');
      } else {
        conteudoUnidade.classList.add('d-none');
      }
    });
  }
}

/**
 * Função para salvar as taxas
 */
function salvarTaxas() {
  alert('Taxa salva com sucesso!');
  loadCardTaxas();
}

/**
 * Função para salvar as configurações adicionais
 */
function salvarConfigTaxas() {
  alert('Configurações adicionais salvas com sucesso!');
  // Manter na mesma tela, apenas mostrar o alerta
}

/**
 * Função para lidar com o clique no menu de Taxas
 */
function handleMenuTaxasClick(e) {
  console.log('Menu Taxas clicado');
  e.preventDefault();
  
  // Verificar se as funções do scripts.js estão disponíveis
  if (typeof atualizarAtivo === 'function' && typeof clearAllCards === 'function') {
    atualizarAtivo(e.currentTarget);
    clearAllCards();
  }
  
  // Carregar o conteúdo do cardTaxas.html
  if (cardTaxasPlaceholder) {
    loadCardTaxas();
  }
}

// Inicialização dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('taxas.js carregado');
  
  // Verificamos se o cardTaxasPlaceholder já tem conteúdo
  if (cardTaxasPlaceholder && cardTaxasPlaceholder.innerHTML.trim() !== '') {
    console.log('cardTaxasPlaceholder já tem conteúdo, configurando eventos');
    setupCardTaxasEvents();
  }
  
  // Criamos um MutationObserver para detectar quando o conteúdo do cardTaxasPlaceholder mudar
  if (cardTaxasPlaceholder) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Conteúdo do cardTaxasPlaceholder mudou, configurando eventos');
          setupCardTaxasEvents();
        }
      });
    });
    
    // Configuramos o observer para observar mudanças no conteúdo do cardTaxasPlaceholder
    observer.observe(cardTaxasPlaceholder, { childList: true });
  }
  
  // Configurar o evento de clique no menu de Taxas
  const menuTaxas = document.getElementById('menuTaxas');
  if (menuTaxas) {
    console.log('Menu Taxas encontrado');
    menuTaxas.addEventListener('click', handleMenuTaxasClick);
  }
});
