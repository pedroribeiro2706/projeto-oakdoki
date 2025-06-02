/**
 * beneficios.js
 * Script para gerenciar as funcionalidades da seção de Benefícios
 */

// Inicialização dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('beneficios.js carregado');
  
  // Verificamos se o cardBeneficiosPlaceholder já tem conteúdo
  const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
  if (cardBeneficiosPlaceholder && cardBeneficiosPlaceholder.innerHTML.trim() !== '') {
    console.log('cardBeneficiosPlaceholder já tem conteúdo, configurando eventos');
    setupCardBeneficiosEvents();
  }
  
  // Criamos um MutationObserver para detectar quando o conteúdo do cardBeneficiosPlaceholder mudar
  if (cardBeneficiosPlaceholder) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Conteúdo do cardBeneficiosPlaceholder mudou, configurando eventos');
          setupCardBeneficiosEvents();
        }
      });
    });
    
    // Configuramos o observer para observar mudanças no conteúdo do cardBeneficiosPlaceholder
    observer.observe(cardBeneficiosPlaceholder, { childList: true });
  }
  
  // Configurar o evento de clique no menu de Benefícios
  const menuBeneficios = document.getElementById('menuBeneficios');
  if (menuBeneficios) {
    console.log('Menu Benefícios encontrado');
    menuBeneficios.addEventListener('click', handleMenuBeneficiosClick);
  }
});

/**
 * Função para lidar com o clique no menu de Benefícios
 */
function handleMenuBeneficiosClick(e) {
  console.log('Menu Benefícios clicado');
  e.preventDefault();
  
  // Verificar se as funções do scripts.js estão disponíveis
  if (typeof atualizarAtivo === 'function' && typeof clearAllCards === 'function') {
    atualizarAtivo(e.currentTarget);
    clearAllCards();
  }
  
  // Carregar o conteúdo do cardBeneficios.html
  const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
  if (cardBeneficiosPlaceholder) {
    fetch('partials/cardBeneficios.html')
      .then(r => r.text())
      .then(html => {
        cardBeneficiosPlaceholder.innerHTML = html;
        setupCardBeneficiosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardBeneficios.html:', err));
  }
}

/**
 * Configura os eventos do card de Benefícios
 */
function setupCardBeneficiosEvents() {
  console.log('Configurando eventos do card de benefícios');
  
  try {
    // Botão para acessar Lotes
    const btnLotes = document.getElementById('btnLotes');
    if (btnLotes) {
      console.log('Botão Lotes encontrado');
      
      btnLotes.addEventListener('click', () => {
        console.log('Botão Lotes clicado');
        
        const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
        if (cardBeneficiosPlaceholder) {
          console.log('cardBeneficiosPlaceholder encontrado');
          
          fetch('partials/cardLotes.html')
            .then(r => r.text())
            .then(html => {
              console.log('cardLotes.html carregado');
              cardBeneficiosPlaceholder.innerHTML = html;
              setupCardLotesEvents();
            })
            .catch(err => console.error('Erro ao carregar cardLotes.html:', err));
        } else {
          console.error('cardBeneficiosPlaceholder não encontrado');
        }
      });
    } else {
      console.error('Botão Lotes não encontrado');
    }
    
    // Botão para acessar Descontos por Quantidade
    const btnDescontosQuantidade = document.getElementById('btnDescontosQuantidade');
    if (btnDescontosQuantidade) {
      btnDescontosQuantidade.addEventListener('click', () => {
        const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
        if (cardBeneficiosPlaceholder) {
          fetch('partials/cardDescontosQuantidade.html')
            .then(r => r.text())
            .then(html => {
              cardBeneficiosPlaceholder.innerHTML = html;
              setupCardDescontosQuantidadeEvents();
            })
            .catch(err => console.error('Erro ao carregar cardDescontosQuantidade.html:', err));
        }
      });
    }
    
    // Botão para acessar Descontos por Forma de Pagamento
    const btnDescontosFormaPagamento = document.getElementById('btnDescontosFormaPagamento');
    if (btnDescontosFormaPagamento) {
      btnDescontosFormaPagamento.addEventListener('click', () => {
        const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
        if (cardBeneficiosPlaceholder) {
          fetch('partials/cardDescontosFormaPagamento.html')
            .then(r => r.text())
            .then(html => {
              cardBeneficiosPlaceholder.innerHTML = html;
              setupCardDescontosFormaPagamentoEvents();
              adicionarListenersNosBadges();
            })
            .catch(err => console.error('Erro ao carregar cardDescontosFormaPagamento.html:', err));
        }
      });
    }

    function adicionarListenersNosBadges() {
      document.querySelectorAll('.badge').forEach(function(badge) {
        badge.addEventListener('click', function() {
          var periodosDiv = document.getElementById('periodos');
          if (periodosDiv) {
            periodosDiv.classList.remove('d-none');
          }
        });
      });
    }
    
    // Botão para acessar Ativar Benefícios
    const btnAtivarBeneficios = document.getElementById('btnAtivarBeneficios');
    if (btnAtivarBeneficios) {
      btnAtivarBeneficios.addEventListener('click', () => {
        console.log('Botão Ativar Benefícios clicado');
        loadCardAtivarBeneficios();
      });
    }
    
  } catch (error) {
    console.error('Erro ao configurar eventos do card de benefícios:', error);
  }
}

/**
 * Configura os eventos do card de Lotes
 */
function setupCardLotesEvents() {
  console.log('Configurando eventos do card de lotes');
  
  // Botão "Voltar" no Footer
  const btnVoltarLoteFooter = document.getElementById('btnVoltarLoteFooter');
  if (btnVoltarLoteFooter) {
    btnVoltarLoteFooter.addEventListener('click', () => {
      const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
      if (cardBeneficiosPlaceholder) {
        fetch('partials/cardBeneficios.html')
          .then(r => r.text())
          .then(html => {
            cardBeneficiosPlaceholder.innerHTML = html;
            setupCardBeneficiosEvents();
          })
          .catch(err => console.error('Erro ao carregar cardBeneficios.html:', err));
      }
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarLoteFooter = document.getElementById('btnSalvarLoteFooter');
  
  const salvarLote = () => {
    alert('Lote salvo com sucesso! (protótipo)');
    // Voltar para o card de Benefícios
    const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
    if (cardBeneficiosPlaceholder) {
      fetch('partials/cardBeneficios.html')
        .then(r => r.text())
        .then(html => {
          cardBeneficiosPlaceholder.innerHTML = html;
          setupCardBeneficiosEvents();
        })
        .catch(err => console.error('Erro ao carregar cardBeneficios.html:', err));
    }
  };
  
  if (btnSalvarLoteFooter) {
    btnSalvarLoteFooter.addEventListener('click', salvarLote);
  }
  
  // Botões de navegação do accordion
  const btnAvancarLote1 = document.getElementById('btnAvancarLote1');
  if (btnAvancarLote1) {
    btnAvancarLote1.addEventListener('click', () => {
      const collapseOne = document.getElementById('collapseOne');
      const collapseTwo = document.getElementById('collapseTwo');
      
      if (collapseOne && collapseTwo) {
        const bsCollapseOne = new bootstrap.Collapse(collapseOne, { toggle: false });
        const bsCollapseTwo = new bootstrap.Collapse(collapseTwo, { toggle: false });
        
        bsCollapseOne.hide();
        bsCollapseTwo.show();
      }
    });
  }
  
  const btnAvancarLote2 = document.getElementById('btnAvancarLote2');
  if (btnAvancarLote2) {
    btnAvancarLote2.addEventListener('click', () => {
      const collapseTwo = document.getElementById('collapseTwo');
      const collapseThree = document.getElementById('collapseThree');
      
      if (collapseTwo && collapseThree) {
        const bsCollapseTwo = new bootstrap.Collapse(collapseTwo, { toggle: false });
        const bsCollapseThree = new bootstrap.Collapse(collapseThree, { toggle: false });
        
        bsCollapseTwo.hide();
        bsCollapseThree.show();
      }
    });
  }
  
  const btnConcluirLote = document.getElementById('btnConcluirLote');
  if (btnConcluirLote) {
    btnConcluirLote.addEventListener('click', salvarLote);
  }
  
  // Mostrar/ocultar conteúdo de descontos diferenciados por serviço
  const descontoTodosServicos = document.getElementById('descontoTodosServicos');
  const descontoDiferenciadoServicos = document.getElementById('descontoDiferenciadoServicos');
  const descontoDiferenciadoServicosContent = document.getElementById('descontoDiferenciadoServicosContent');
  
  if (descontoTodosServicos && descontoDiferenciadoServicos && descontoDiferenciadoServicosContent) {
    descontoTodosServicos.addEventListener('change', () => {
      if (descontoTodosServicos.checked) {
        descontoDiferenciadoServicosContent.classList.add('d-none');
      }
    });
    
    descontoDiferenciadoServicos.addEventListener('change', () => {
      if (descontoDiferenciadoServicos.checked) {
        descontoDiferenciadoServicosContent.classList.remove('d-none');
      }
    });
  }
  
  // Mostrar/ocultar conteúdo de descontos diferenciados por complemento
  const descontoTodosComplementos = document.getElementById('descontoTodosComplementos');
  const descontoDiferenciadoComplementos = document.getElementById('descontoDiferenciadoComplementos');
  const descontoDiferenciadoComplementosContent = document.getElementById('descontoDiferenciadoComplementosContent');
  
  if (descontoTodosComplementos && descontoDiferenciadoComplementos && descontoDiferenciadoComplementosContent) {
    descontoTodosComplementos.addEventListener('change', () => {
      if (descontoTodosComplementos.checked) {
        descontoDiferenciadoComplementosContent.classList.add('d-none');
      }
    });
    
    descontoDiferenciadoComplementos.addEventListener('change', () => {
      if (descontoDiferenciadoComplementos.checked) {
        descontoDiferenciadoComplementosContent.classList.remove('d-none');
      }
    });
  }
}

/**
 * Configura os eventos do card de Descontos por Quantidade
 */
function setupCardDescontosQuantidadeEvents() {
  console.log('Configurando eventos do card de Descontos por Quantidade');
  
  // Botão para adicionar nova faixa de desconto
  const btnAdicionarFaixaDesconto = document.getElementById('btnAdicionarFaixaDesconto');
  if (btnAdicionarFaixaDesconto) {
    btnAdicionarFaixaDesconto.addEventListener('click', function() {
      const tbody = document.querySelector('#tabelaDescontosQuantidade tbody');
      
      // Criar nova linha
      const tr = document.createElement('tr');
      
      // Coluna "De"
      const tdDe = document.createElement('td');
      const inputDe = document.createElement('input');
      inputDe.type = 'text';
      inputDe.className = 'form-control';
      tdDe.appendChild(inputDe);
      
      // Coluna "Até"
      const tdAte = document.createElement('td');
      const inputAte = document.createElement('input');
      inputAte.type = 'text';
      inputAte.className = 'form-control';
      tdAte.appendChild(inputAte);
      
      // Coluna "% aplicada"
      const tdPorcentagem = document.createElement('td');
      const inputPorcentagem = document.createElement('input');
      inputPorcentagem.type = 'text';
      inputPorcentagem.className = 'form-control';
      tdPorcentagem.appendChild(inputPorcentagem);
      
      // Coluna "Ações"
      const tdAcoes = document.createElement('td');
      tdAcoes.className = 'text-center';
      
      // Dropdown de ações
      const dropdownDiv = document.createElement('div');
      dropdownDiv.className = 'dropdown';
      
      const btnDropdown = document.createElement('button');
      btnDropdown.className = 'btn btn-outline-info dropdown-toggle btn-sm';
      btnDropdown.type = 'button';
      btnDropdown.setAttribute('data-bs-toggle', 'dropdown');
      btnDropdown.setAttribute('aria-expanded', 'false');
      btnDropdown.innerHTML = 'Selecione';
      
      const dropdownMenu = document.createElement('ul');
      dropdownMenu.className = 'dropdown-menu';
      
      const dropdownItem = document.createElement('li');
      const dropdownLink = document.createElement('a');
      dropdownLink.className = 'dropdown-item text-danger excluir-faixa';
      dropdownLink.href = '#';
      dropdownLink.innerHTML = '<i class="bi bi-trash-fill"></i> Excluir';
      dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        tr.remove();
        
        // Reposicionar o botão Adicionar se não houver mais linhas
        if (tbody.querySelectorAll('tr').length === 0) {
          const tfoot = document.querySelector('#tabelaDescontosQuantidade tfoot');
          tfoot.style.display = '';
        }
      });
      
      dropdownItem.appendChild(dropdownLink);
      dropdownMenu.appendChild(dropdownItem);
      dropdownDiv.appendChild(btnDropdown);
      dropdownDiv.appendChild(dropdownMenu);
      tdAcoes.appendChild(dropdownDiv);
      
      // Adicionar colunas à linha
      tr.appendChild(tdDe);
      tr.appendChild(tdAte);
      tr.appendChild(tdPorcentagem);
      tr.appendChild(tdAcoes);
      
      // Adicionar linha à tabela
      tbody.appendChild(tr);
      
      // Mover o botão Adicionar para depois da linha adicionada
      const tfoot = document.querySelector('#tabelaDescontosQuantidade tfoot');
      if (tbody.querySelectorAll('tr').length === 1) {
        // Se for a primeira linha, esconder o botão do rodapé da tabela
        // e adicionar um novo após a tabela
        tfoot.style.display = 'none';
        
        const divBotao = document.createElement('div');
        divBotao.className = 'text-center mt-3';
        divBotao.id = 'divBotaoAdicionar';
        
        const btnAvancar = document.createElement('button');
        btnAvancar.className = 'btn btn-primary me-2';
        btnAvancar.id = 'btnAvancarFaixaDescontoExterno';
        btnAvancar.innerHTML = 'Avançar';
        btnAvancar.addEventListener('click', function() {
          // Avançar para o próximo item do accordion
          const collapseTwo = document.getElementById('collapseTwo');
          const headingTwo = document.getElementById('headingTwo').querySelector('button');
          const headingOne = document.getElementById('headingOne').querySelector('button');
          
          if (collapseTwo && headingTwo && headingOne) {
            // Fechar o primeiro item
            document.getElementById('collapseOne').classList.remove('show');
            
            // Marcar o botão do primeiro item como collapsed (não selecionado)
            headingOne.classList.add('collapsed');
            headingOne.setAttribute('aria-expanded', 'false');
            
            // Abrir o segundo item
            collapseTwo.classList.add('show');
            headingTwo.classList.remove('collapsed');
            headingTwo.setAttribute('aria-expanded', 'true');
          }
        });
        
        const novoBotao = document.createElement('button');
        novoBotao.className = 'btn btn-warning';
        novoBotao.id = 'btnAdicionarFaixaDescontoExterno';
        novoBotao.innerHTML = 'Adicionar';
        novoBotao.addEventListener('click', function() {
          btnAdicionarFaixaDesconto.click();
        });
        
        divBotao.appendChild(btnAvancar);
        divBotao.appendChild(novoBotao);
        
        const tabelaContainer = document.querySelector('.table-responsive');
        tabelaContainer.after(divBotao);
      }
    });
  }
  
  // Botão Avançar no footer da tabela
  const btnAvancarFaixaDesconto = document.getElementById('btnAvancarFaixaDesconto');
  if (btnAvancarFaixaDesconto) {
    btnAvancarFaixaDesconto.addEventListener('click', function() {
      // Avançar para o próximo item do accordion
      const collapseTwo = document.getElementById('collapseTwo');
      const headingTwo = document.getElementById('headingTwo').querySelector('button');
      const headingOne = document.getElementById('headingOne').querySelector('button');
      
      if (collapseTwo && headingTwo && headingOne) {
        // Fechar o primeiro item
        document.getElementById('collapseOne').classList.remove('show');
        
        // Marcar o botão do primeiro item como collapsed (não selecionado)
        headingOne.classList.add('collapsed');
        headingOne.setAttribute('aria-expanded', 'false');
        
        // Abrir o segundo item
        collapseTwo.classList.add('show');
        headingTwo.classList.remove('collapsed');
        headingTwo.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  // Botão Voltar
  const btnVoltar = document.getElementById('btnVoltarDescontosQuantidade');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', function() {
      loadCardBeneficios();
    });
  }
  
  // Botão Salvar
  const btnSalvar = document.getElementById('btnSalvarDescontosQuantidade');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', function() {
      // Simulação de salvamento
      alert('Configurações de descontos por quantidade salvas com sucesso!');
      loadCardBeneficios();
    });
  }
  
  // Configurar eventos para o segundo item do accordion (Configurações Adicionais)
  setupConfiguracaoAdicionalEvents();
}

/**
 * Configura os eventos da seção de configurações adicionais
 */
function setupConfiguracaoAdicionalEvents() {
  // Seleção de unidade
  const selectUnidade = document.getElementById('selectUnidade');
  if (selectUnidade) {
    selectUnidade.addEventListener('change', function() {
      const conteudoUnidade = document.getElementById('conteudoUnidade');
      const selectServico = document.getElementById('selectServico');
      const periodos = document.getElementById('periodos');
      
      if (this.value) {
        // Mostrar o conteúdo da unidade
        conteudoUnidade.classList.remove('d-none');
        
        // Resetar o select de serviço para a opção padrão
        if (selectServico) {
          selectServico.selectedIndex = 0;
        }
        
        // Esconder e resetar os períodos
        if (periodos) {
          periodos.classList.add('d-none');
          
          // Desmarcar todos os checkboxes de períodos
          const checkboxesPeriodos = periodos.querySelectorAll('input[type="checkbox"]');
          checkboxesPeriodos.forEach(checkbox => {
            checkbox.checked = false;
          });
        }
      } else {
        conteudoUnidade.classList.add('d-none');
      }
    });
  }
  
  // Seleção de serviço
  const selectServico = document.getElementById('selectServico');
  if (selectServico) {
    selectServico.addEventListener('change', function() {
      const periodos = document.getElementById('periodos');
      if (this.value) {
        periodos.classList.remove('d-none');
      } else {
        periodos.classList.add('d-none');
      }
    });
  }
  
  // Switch para exibir serviços inativos
  const switchInativos = document.getElementById('switchExibirServicosInativos');
  if (switchInativos) {
    switchInativos.addEventListener('change', function() {
      const badgesInativos = document.getElementById('badgesInativos');
      if (badgesInativos) {
        if (this.checked) {
          badgesInativos.classList.remove('d-none');
        } else {
          badgesInativos.classList.add('d-none');
        }
      }
    });
  }

  // Clique em badges para exibir períodos e alternar cores
  const periodosAtivos = document.getElementById('periodosAtivos');
  const periodosInativosEl = document.getElementById('periodosInativos');

  // Função para resetar as cores originais das badges
  function resetBadgeColors() {
    document.querySelectorAll('#conteudoUnidade .badge').forEach(b => {
      b.classList.remove('border-warning', 'text-bg-warning');
      b.classList.add('border-primary', 'text-bg-primary');
    });
    document.querySelectorAll('#badgesInativos .badge').forEach(b => {
      b.classList.remove('border-warning', 'text-bg-warning');
      b.classList.add('border-secondary', 'text-bg-secondary');
    });
  }

  // Handler para badges de serviços ativos
  document.querySelectorAll('#conteudoUnidade .badge').forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', () => {
      resetBadgeColors();
      badge.classList.remove('border-primary', 'text-bg-primary');
      badge.classList.add('border-warning', 'text-bg-warning');
      if (periodosAtivos) periodosAtivos.classList.remove('d-none');
      if (periodosInativosEl) periodosInativosEl.classList.add('d-none');
    });
  });

  // Handler para badges de serviços inativos
  document.querySelectorAll('#badgesInativos .badge').forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', () => {
      resetBadgeColors();
      badge.classList.remove('border-secondary', 'text-bg-secondary');
      badge.classList.add('border-warning', 'text-bg-warning');
      if (periodosInativosEl) periodosInativosEl.classList.remove('d-none');
      if (periodosAtivos) periodosAtivos.classList.add('d-none');
    });
  });
}

/**
 * Configura os eventos do card de Descontos por Forma de Pagamento
 */
function setupCardDescontosFormaPagamentoEvents() {
  console.log('Configurando eventos do card de Descontos por Forma de Pagamento');
  
  // Botão Avançar no primeiro item do accordion
  const btnAvancarDescontoPagamento = document.getElementById('btnAvancarDescontoPagamento');
  if (btnAvancarDescontoPagamento) {
    btnAvancarDescontoPagamento.addEventListener('click', function() {
      // Avançar para o próximo item do accordion
      const collapseTwo = document.getElementById('collapseTwo');
      const headingTwo = document.getElementById('headingTwo').querySelector('button');
      const headingOne = document.getElementById('headingOne').querySelector('button');
      
      if (collapseTwo && headingTwo && headingOne) {
        // Fechar o primeiro item
        document.getElementById('collapseOne').classList.remove('show');
        
        // Marcar o botão do primeiro item como collapsed (não selecionado)
        headingOne.classList.add('collapsed');
        headingOne.setAttribute('aria-expanded', 'false');
        
        // Abrir o segundo item
        collapseTwo.classList.add('show');
        headingTwo.classList.remove('collapsed');
        headingTwo.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  // Botão Voltar
  const btnVoltar = document.getElementById('btnVoltarDescontosFormaPagamento');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', function() {
      loadCardBeneficios();
    });
  }
  
  // Botão Salvar
  const btnSalvar = document.getElementById('btnSalvarDescontosFormaPagamento');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', function() {
      // Simulação de salvamento
      alert('Configurações de descontos por forma de pagamento salvas com sucesso!');
      loadCardBeneficios();
    });
  }
  
  // Configurar eventos para o segundo item do accordion (Configurações Adicionais)
  setupConfiguracaoAdicionalEvents();
}

/**
 * Configura os eventos do card de Ativar Benefícios
 */
function setupCardAtivarBeneficiosEvents() {
  console.log('Configurando eventos do card de Ativar Benefícios');
  
  // Configurar a funcionalidade de arrastar e soltar para reordenar os itens
  if (typeof $.fn.sortable !== 'undefined') {
    // Configurar sortable para Tipos de Desconto
    $("#sortableTiposDesconto").sortable({
      handle: ".bi-grip-vertical",
      placeholder: "ui-state-highlight",
      update: function(event, ui) {
        // Atualizar a ordem dos itens
        console.log('Ordem dos tipos de desconto atualizada');
        // Aqui você pode implementar a lógica para salvar a nova ordem
      }
    });
    
    // Configurar sortable para Meios de Pagamento
    $("#sortableMeiosPagamento").sortable({
      handle: ".bi-grip-vertical",
      placeholder: "ui-state-highlight",
      update: function(event, ui) {
        // Atualizar a ordem dos itens
        console.log('Ordem dos meios de pagamento atualizada');
        // Aqui você pode implementar a lógica para salvar a nova ordem
      }
    });
  } else {
    console.warn('jQuery UI Sortable não está disponível. A funcionalidade de reordenação não funcionará.');
  }
  
  // Configurar eventos para os switches de Status
  document.querySelectorAll('#sortableTiposDesconto .form-check-input[id^="switchStatus"]').forEach(function(switchEl) {
    switchEl.addEventListener('change', function() {
      const itemId = this.id.replace('switchStatus', '');
      console.log(`Status do tipo de desconto ${itemId} alterado para: ${this.checked}`);
      // Aqui você pode implementar a lógica para salvar o novo status
    });
  });
  
  // Configurar eventos para os switches de Suspender o próximo
  document.querySelectorAll('#sortableTiposDesconto .form-check-input[id^="switchSuspender"]').forEach(function(switchEl) {
    switchEl.addEventListener('change', function() {
      const itemId = this.id.replace('switchSuspender', '');
      console.log(`Suspender o próximo para ${itemId} alterado para: ${this.checked}`);
      // Aqui você pode implementar a lógica para salvar a configuração
    });
  });
  
  // Configurar eventos para os switches de Status dos meios de pagamento
  document.querySelectorAll('#sortableMeiosPagamento .form-check-input[id^="switchStatus"]').forEach(function(switchEl) {
    switchEl.addEventListener('change', function() {
      const itemId = this.id.replace('switchStatus', '');
      console.log(`Status do meio de pagamento ${itemId} alterado para: ${this.checked}`);
      // Aqui você pode implementar a lógica para salvar o novo status
    });
  });
  
  // Configurar eventos para os switches de Sempre conceder o desconto
  document.querySelectorAll('#sortableMeiosPagamento .form-check-input[id^="switchConceder"]').forEach(function(switchEl) {
    switchEl.addEventListener('change', function() {
      const itemId = this.id.replace('switchConceder', '');
      console.log(`Sempre conceder o desconto para ${itemId} alterado para: ${this.checked}`);
      // Aqui você pode implementar a lógica para salvar a configuração
    });
  });
}

/**
 * Carrega o card de Benefícios principal
 */
function loadCardBeneficios() {
  const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
  if (cardBeneficiosPlaceholder) {
    fetch('partials/cardBeneficios.html')
      .then(r => r.text())
      .then(html => {
        cardBeneficiosPlaceholder.innerHTML = html;
        setupCardBeneficiosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardBeneficios.html:', err));
  }
}

/**
 * Carrega o card de Ativar Benefícios
 */
function loadCardAtivarBeneficios() {
  console.log('Carregando card de Ativar Benefícios');
  const cardBeneficiosPlaceholder = document.getElementById('cardBeneficiosPlaceholder');
  
  if (cardBeneficiosPlaceholder) {
    fetch('partials/cardAtivarBeneficios.html')
      .then(r => r.text())
      .then(html => {
        cardBeneficiosPlaceholder.innerHTML = html;
        setupCardAtivarBeneficiosEvents();
      })
      .catch(err => console.error('Erro ao carregar cardAtivarBeneficios.html:', err));
  }
}
