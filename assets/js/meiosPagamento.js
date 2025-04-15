/**
 * meiosPagamento.js
 * Script para gerenciar as funcionalidades da seção de Meios de Pagamento
 */

// Inicialização dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('meiosPagamento.js carregado');
  
  // Verificamos se o cardMeiosPagamentoPlaceholder já tem conteúdo
  const cardMeiosPagamentoPlaceholder = document.getElementById('cardMeiosPagamentoPlaceholder');
  if (cardMeiosPagamentoPlaceholder && cardMeiosPagamentoPlaceholder.innerHTML.trim() !== '') {
    console.log('cardMeiosPagamentoPlaceholder já tem conteúdo, configurando eventos');
    setupCardMeiosPagamentoEvents();
  }
  
  // Criamos um MutationObserver para detectar quando o conteúdo do cardMeiosPagamentoPlaceholder mudar
  if (cardMeiosPagamentoPlaceholder) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Conteúdo do cardMeiosPagamentoPlaceholder mudou, configurando eventos');
          setupCardMeiosPagamentoEvents();
        }
      });
    });
    
    // Configuramos o observer para observar mudanças no conteúdo do cardMeiosPagamentoPlaceholder
    observer.observe(cardMeiosPagamentoPlaceholder, { childList: true });
  }
  
  // Configurar o evento de clique no menu de Meios de Pagamento
  const menuMeiosPagamento = document.getElementById('menuMeiosPagamento');
  if (menuMeiosPagamento) {
    console.log('Menu Meios de Pagamento encontrado');
    menuMeiosPagamento.addEventListener('click', handleMenuMeiosPagamentoClick);
  }
});

/**
 * Função para lidar com o clique no menu de Meios de Pagamento
 */
function handleMenuMeiosPagamentoClick(e) {
  console.log('Menu Meios de Pagamento clicado');
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  
  // Verificar se as funções do scripts.js estão disponíveis
  if (typeof atualizarAtivo === 'function' && typeof clearAllCards === 'function') {
    if (e && e.currentTarget) {
      atualizarAtivo(e.currentTarget);
    }
    clearAllCards();
  }
  
  // Vamos tentar encontrar o placeholder correto
  let placeholder = document.getElementById('cardMeiosPagamentoPlaceholder');
  
  // Se não encontrar, tente outros nomes possíveis
  if (!placeholder) {
    console.log('cardMeiosPagamentoPlaceholder não encontrado, tentando alternativas...');
    placeholder = document.getElementById('meiosPagamentoContentPlaceholder');
    
    if (!placeholder) {
      placeholder = document.querySelector('[id$="MeiosPagamentoPlaceholder"]');
      
      if (!placeholder) {
        console.error('Não foi possível encontrar o placeholder para meios de pagamento');
        alert('Erro ao carregar o card. Por favor, tente novamente.');
        return;
      }
    }
  }
  
  console.log('Placeholder encontrado:', placeholder.id);
  
  // Carregar o conteúdo do cardMeiosPagamento.html
  fetch('partials/cardMeiosPagamento.html')
    .then(r => r.text())
    .then(html => {
      placeholder.innerHTML = html;
      setupCardMeiosPagamentoEvents();
    })
    .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
}

/**
 * Configura os eventos do card de Meios de Pagamento
 */
function setupCardMeiosPagamentoEvents() {
  console.log('Configurando eventos do card de meios de pagamento');
  
  try {
    // Botão para PIX / Manual / Débito / Crédito em conta / Crédito de Troca
    const btnPagamento01 = document.getElementById('btnPagamento01');
    if (btnPagamento01) {
      console.log('Botão Pagamento 01 encontrado');
      
      btnPagamento01.addEventListener('click', function() {
        console.log('Botão Pagamento 01 clicado');
        loadCardEditarPagamento01();
      });
    } else {
      console.log('Botão Pagamento 01 NÃO encontrado');
    }
    
    // Botão para Boleto
    const btnPagamento02 = document.getElementById('btnPagamento02');
    if (btnPagamento02) {
      console.log('Botão Pagamento 02 encontrado');
      
      btnPagamento02.addEventListener('click', function() {
        console.log('Botão Pagamento 02 clicado');
        loadCardEditarPagamento02();
      });
    } else {
      console.log('Botão Pagamento 02 NÃO encontrado');
    }
    
    // Botão para Cartão de Crédito
    const btnPagamento03 = document.getElementById('btnPagamento03');
    if (btnPagamento03) {
      console.log('Botão Pagamento 03 encontrado');
      
      btnPagamento03.addEventListener('click', function() {
        console.log('Botão Pagamento 03 clicado');
        loadCardEditarPagamento03();
      });
    } else {
      console.log('Botão Pagamento 03 NÃO encontrado');
    }
    
    // Botões de voltar dos cards de edição
    setupEditarPagamentoEvents();
    
  } catch (error) {
    console.error('Erro ao configurar eventos do card de meios de pagamento:', error);
  }
}

/**
 * Carrega o card de Editar Pagamento 01 (PIX / Manual / etc)
 */
function loadCardEditarPagamento01() {
  console.log('Carregando card de editar pagamento 01');
  
  // Vamos tentar encontrar o placeholder correto
  let placeholder = document.getElementById('cardMeiosPagamentoPlaceholder');
  
  // Se não encontrar, tente outros nomes possíveis
  if (!placeholder) {
    console.log('cardMeiosPagamentoPlaceholder não encontrado, tentando alternativas...');
    placeholder = document.getElementById('meiosPagamentoContentPlaceholder');
    
    if (!placeholder) {
      placeholder = document.querySelector('[id$="MeiosPagamentoPlaceholder"]');
      
      if (!placeholder) {
        console.error('Não foi possível encontrar o placeholder para meios de pagamento');
        alert('Erro ao carregar o card de edição. Por favor, tente novamente.');
        return;
      }
    }
  }
  
  console.log('Placeholder encontrado:', placeholder.id);
  
  fetch('partials/cardEditarPagamento01.html')
    .then(r => r.text())
    .then(html => {
      placeholder.innerHTML = html;
      setupEditarPagamentoEvents();
    })
    .catch(err => console.error('Erro ao carregar cardEditarPagamento01.html:', err));
}

/**
 * Carrega o card de Editar Pagamento 02 (Boleto)
 */
function loadCardEditarPagamento02() {
  console.log('Carregando card de editar pagamento 02');
  
  // Vamos tentar encontrar o placeholder correto
  let placeholder = document.getElementById('cardMeiosPagamentoPlaceholder');
  
  // Se não encontrar, tente outros nomes possíveis
  if (!placeholder) {
    console.log('cardMeiosPagamentoPlaceholder não encontrado, tentando alternativas...');
    placeholder = document.getElementById('meiosPagamentoContentPlaceholder');
    
    if (!placeholder) {
      placeholder = document.querySelector('[id$="MeiosPagamentoPlaceholder"]');
      
      if (!placeholder) {
        console.error('Não foi possível encontrar o placeholder para meios de pagamento');
        alert('Erro ao carregar o card de edição. Por favor, tente novamente.');
        return;
      }
    }
  }
  
  console.log('Placeholder encontrado:', placeholder.id);
  
  fetch('partials/cardEditarPagamento02.html')
    .then(r => r.text())
    .then(html => {
      placeholder.innerHTML = html;
      setupEditarPagamentoEvents();
    })
    .catch(err => console.error('Erro ao carregar cardEditarPagamento02.html:', err));
}

/**
 * Carrega o card de Editar Pagamento 03 (Cartão de Crédito)
 */
function loadCardEditarPagamento03() {
  console.log('Carregando card de editar pagamento 03');
  
  // Vamos tentar encontrar o placeholder correto
  let placeholder = document.getElementById('cardMeiosPagamentoPlaceholder');
  
  // Se não encontrar, tente outros nomes possíveis
  if (!placeholder) {
    console.log('cardMeiosPagamentoPlaceholder não encontrado, tentando alternativas...');
    placeholder = document.getElementById('meiosPagamentoContentPlaceholder');
    
    if (!placeholder) {
      placeholder = document.querySelector('[id$="MeiosPagamentoPlaceholder"]');
      
      if (!placeholder) {
        console.error('Não foi possível encontrar o placeholder para meios de pagamento');
        alert('Erro ao carregar o card de edição. Por favor, tente novamente.');
        return;
      }
    }
  }
  
  console.log('Placeholder encontrado:', placeholder.id);
  
  fetch('partials/cardEditarPagamento03.html')
    .then(r => r.text())
    .then(html => {
      placeholder.innerHTML = html;
      setupEditarPagamentoEvents();
    })
    .catch(err => console.error('Erro ao carregar cardEditarPagamento03.html:', err));
}

/**
 * Configura os eventos dos cards de edição de pagamento
 */
function setupEditarPagamentoEvents() {
  console.log('Configurando eventos dos cards de edição de pagamento');
  
  try {
    // Botão Voltar do card 01
    const btnVoltarPagamento01 = document.getElementById('btnVoltarPagamento01');
    if (btnVoltarPagamento01) {
      btnVoltarPagamento01.addEventListener('click', function() {
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
    // Botão Salvar do card 01
    const btnSalvarPagamento01 = document.getElementById('btnSalvarPagamento01');
    if (btnSalvarPagamento01) {
      btnSalvarPagamento01.addEventListener('click', function() {
        alert('Configurações salvas com sucesso!');
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
    // Botão Voltar do card 02
    const btnVoltarPagamento02 = document.getElementById('btnVoltarPagamento02');
    if (btnVoltarPagamento02) {
      btnVoltarPagamento02.addEventListener('click', function() {
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
    // Botão Salvar do card 02
    const btnSalvarPagamento02 = document.getElementById('btnSalvarPagamento02');
    if (btnSalvarPagamento02) {
      btnSalvarPagamento02.addEventListener('click', function() {
        alert('Configurações salvas com sucesso!');
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
    // Botão Voltar do card 03
    const btnVoltarPagamento03 = document.getElementById('btnVoltarPagamento03');
    if (btnVoltarPagamento03) {
      btnVoltarPagamento03.addEventListener('click', function() {
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
    // Botão Salvar do card 03
    const btnSalvarPagamento03 = document.getElementById('btnSalvarPagamento03');
    if (btnSalvarPagamento03) {
      btnSalvarPagamento03.addEventListener('click', function() {
        alert('Configurações salvas com sucesso!');
        handleMenuMeiosPagamentoClick(new Event('click'));
      });
    }
    
  } catch (error) {
    console.error('Erro ao configurar eventos dos cards de edição de pagamento:', error);
  }
}
