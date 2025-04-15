/**
 * formularios.js
 * Script para gerenciar as funcionalidades da seção de Formulários
 */

// Inicialização dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('formularios.js carregado');
  
  // Verificamos se o cardFormulariosPlaceholder já tem conteúdo
  const cardFormulariosPlaceholder = document.getElementById('cardFormulariosPlaceholder');
  if (cardFormulariosPlaceholder && cardFormulariosPlaceholder.innerHTML.trim() !== '') {
    console.log('cardFormulariosPlaceholder já tem conteúdo, configurando eventos');
    setupCardFormulariosEvents();
  }
  
  // Criamos um MutationObserver para detectar quando o conteúdo do cardFormulariosPlaceholder mudar
  if (cardFormulariosPlaceholder) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Conteúdo do cardFormulariosPlaceholder mudou, configurando eventos');
          setupCardFormulariosEvents();
        }
      });
    });
    
    // Configuramos o observer para observar mudanças no conteúdo do cardFormulariosPlaceholder
    observer.observe(cardFormulariosPlaceholder, { childList: true });
  }
  
  // Configurar o evento de clique no menu de Formulários
  const menuFormularios = document.getElementById('menuFormularios');
  if (menuFormularios) {
    console.log('Menu Formulários encontrado');
    menuFormularios.addEventListener('click', handleMenuFormulariosClick);
  }
});

/**
 * Função para lidar com o clique no menu de Formulários
 */
function handleMenuFormulariosClick(e) {
  console.log('Menu Formulários clicado');
  e.preventDefault();
  
  // Verificar se as funções do scripts.js estão disponíveis
  if (typeof atualizarAtivo === 'function' && typeof clearAllCards === 'function') {
    atualizarAtivo(e.currentTarget);
    clearAllCards();
  }
  
  // Carregar o conteúdo do cardFormularios.html
  const cardFormulariosPlaceholder = document.getElementById('cardFormulariosPlaceholder');
  if (cardFormulariosPlaceholder) {
    fetch('partials/cardFormularios.html')
      .then(r => r.text())
      .then(html => {
        cardFormulariosPlaceholder.innerHTML = html;
        setupCardFormulariosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardFormularios.html:', err));
  }
}

/**
 * Configura os eventos do card de Formulários
 */
function setupCardFormulariosEvents() {
  console.log('Configurando eventos do card de formulários');
  
  try {
    // Botão para adicionar formulário de contratante
    const btnAdicionarFormularioContratante = document.getElementById('btnAdicionarFormularioContratante');
    if (btnAdicionarFormularioContratante) {
      console.log('Botão Adicionar Formulário Contratante encontrado');
      
      btnAdicionarFormularioContratante.addEventListener('click', () => {
        console.log('Botão Adicionar Formulário Contratante clicado');
        loadCardAdicionarFormulario('contratante');
      });
    }
    
    // Botão para adicionar formulário de usuário
    const btnAdicionarFormularioUsuario = document.getElementById('btnAdicionarFormularioUsuario');
    if (btnAdicionarFormularioUsuario) {
      console.log('Botão Adicionar Formulário Usuário encontrado');
      
      btnAdicionarFormularioUsuario.addEventListener('click', () => {
        console.log('Botão Adicionar Formulário Usuário clicado');
        loadCardAdicionarFormulario('usuario');
      });
    }
  } catch (error) {
    console.error('Erro ao configurar eventos do card de formulários:', error);
  }
}

/**
 * Carrega o card de Adicionar Formulário
 * @param {string} tipo - Tipo de formulário ('contratante' ou 'usuario')
 */
function loadCardAdicionarFormulario(tipo) {
  const cardFormulariosPlaceholder = document.getElementById('cardFormulariosPlaceholder');
  if (cardFormulariosPlaceholder) {
    fetch('partials/cardAdicionarFormulario.html')
      .then(r => r.text())
      .then(html => {
        console.log('cardAdicionarFormulario.html carregado');
        cardFormulariosPlaceholder.innerHTML = html;
        
        // Atualizar o título do card com base no tipo
        const cardTitle = document.querySelector('.card-header h5');
        if (cardTitle) {
          cardTitle.textContent = tipo === 'contratante' ? 'Adicionar Formulário de Contratante' : 'Adicionar Formulário de Usuário';
        }
        
        setupCardAdicionarFormularioEvents(tipo);
      })
      .catch(err => console.error('Erro ao carregar cardAdicionarFormulario.html:', err));
  } else {
    console.error('cardFormulariosPlaceholder não encontrado');
  }
}

/**
 * Configura os eventos do card de Adicionar Formulário
 * @param {string} tipo - Tipo de formulário ('contratante' ou 'usuario')
 */
function setupCardAdicionarFormularioEvents(tipo) {
  console.log('Configurando eventos do card de adicionar formulário');
  
  // Botão "Avançar" para ir para o segundo item do accordion
  const btnAvancarFormulario = document.getElementById('btnAvancarFormulario');
  if (btnAvancarFormulario) {
    btnAvancarFormulario.addEventListener('click', () => {
      // Obter referências aos elementos do accordion
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
  
  // Configurar os eventos para a seleção de unidade
  const selectUnidade = document.getElementById('selectUnidade');
  if (selectUnidade) {
    selectUnidade.addEventListener('change', function() {
      const conteudoUnidade = document.getElementById('conteudoUnidade');
      const periodos = document.getElementById('periodos');
      const selectServico = document.getElementById('selectServico');
      
      // Mostrar a seção de serviços
      if (conteudoUnidade) {
        conteudoUnidade.classList.remove('d-none');
      }
      
      // Ocultar a seção de períodos se estiver visível
      if (periodos && !periodos.classList.contains('d-none')) {
        periodos.classList.add('d-none');
      }
      
      // Resetar o select de serviço para a opção padrão
      if (selectServico) {
        selectServico.selectedIndex = 0;
      }
    });
  }
  
  // Configurar os eventos para a seleção de serviço
  const selectServico = document.getElementById('selectServico');
  if (selectServico) {
    selectServico.addEventListener('change', function() {
      const periodos = document.getElementById('periodos');
      if (periodos) {
        periodos.classList.remove('d-none');
      }
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFormulario = document.getElementById('btnVoltarFormulario');
  if (btnVoltarFormulario) {
    btnVoltarFormulario.addEventListener('click', () => {
      loadCardFormularios();
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFormulario = document.getElementById('btnSalvarFormulario');
  if (btnSalvarFormulario) {
    btnSalvarFormulario.addEventListener('click', () => {
      alert(`Formulário de ${tipo} salvo com sucesso! (protótipo)`);
      loadCardFormularios();
    });
  }
}

/**
 * Carrega o card de Formulários principal
 */
function loadCardFormularios() {
  const cardFormulariosPlaceholder = document.getElementById('cardFormulariosPlaceholder');
  if (cardFormulariosPlaceholder) {
    fetch('partials/cardFormularios.html')
      .then(r => r.text())
      .then(html => {
        cardFormulariosPlaceholder.innerHTML = html;
        setupCardFormulariosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardFormularios.html:', err));
  }
}
