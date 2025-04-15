/**
 * termos.js
 * Script para gerenciar as funcionalidades da seção de Termos de uso
 */

// Inicialização dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('termos.js carregado');
  
  // Verificamos se o cardTermosDeUsoPlaceholder já tem conteúdo
  const cardTermosDeUsoPlaceholder = document.getElementById('cardTermosDeUsoPlaceholder');
  if (cardTermosDeUsoPlaceholder && cardTermosDeUsoPlaceholder.innerHTML.trim() !== '') {
    console.log('cardTermosDeUsoPlaceholder já tem conteúdo, configurando eventos');
    setupCardTermosEvents();
  }
  
  // Criamos um MutationObserver para detectar quando o conteúdo do cardTermosDeUsoPlaceholder mudar
  if (cardTermosDeUsoPlaceholder) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Conteúdo do cardTermosDeUsoPlaceholder mudou, configurando eventos');
          setupCardTermosEvents();
        }
      });
    });
    
    // Configuramos o observer para observar mudanças no conteúdo do cardTermosDeUsoPlaceholder
    observer.observe(cardTermosDeUsoPlaceholder, { childList: true });
  }
  
  // Configurar o evento de clique no menu de Termos de uso
  const menuTermos = document.getElementById('menuTermos');
  if (menuTermos) {
    console.log('Menu Termos de uso encontrado');
    menuTermos.addEventListener('click', handleMenuTermosClick);
  }
});

/**
 * Função para lidar com o clique no menu de Termos de uso
 */
function handleMenuTermosClick(e) {
  console.log('Menu Termos de uso clicado');
  e.preventDefault();
  
  // Verificar se as funções do scripts.js estão disponíveis
  if (typeof atualizarAtivo === 'function' && typeof clearAllCards === 'function') {
    atualizarAtivo(e.currentTarget);
    clearAllCards();
  }
  
  // Carregar o conteúdo do cardTermosDeUso.html
  const cardTermosDeUsoPlaceholder = document.getElementById('cardTermosDeUsoPlaceholder');
  if (cardTermosDeUsoPlaceholder) {
    fetch('partials/cardTermosDeUso.html')
      .then(r => r.text())
      .then(html => {
        cardTermosDeUsoPlaceholder.innerHTML = html;
        setupCardTermosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardTermosDeUso.html:', err));
  }
}

/**
 * Configura os eventos do card de Termos de uso
 */
function setupCardTermosEvents() {
  console.log('Configurando eventos do card de termos de uso');
  
  try {
    // Botão para visualizar termos de uso
    const btnTermos = document.getElementById('btnTermos');
    if (btnTermos) {
      console.log('Botão Termos de uso encontrado');
      
      btnTermos.addEventListener('click', () => {
        console.log('Botão Termos de uso clicado');
        // Aqui você pode adicionar a lógica para mostrar os termos de uso
        alert('Visualização dos termos de uso será implementada em breve.');
      });
    }
  } catch (error) {
    console.error('Erro ao configurar eventos do card de termos de uso:', error);
  }
}
