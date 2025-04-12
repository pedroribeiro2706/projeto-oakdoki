document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM completamente carregado.");

    // ================================
    // 1) Sorting da Tabela
    // ================================
    const table = document.querySelector('table');
    const headers = document.querySelectorAll('.sort-btn');
    let sortedColumnIndex = -1;
    let sortDirection = 1;
  
    if (table && headers) {
      headers.forEach((header) => {
        header.addEventListener('click', () => {
          const columnIndex = header.getAttribute('data-column');
          sortDirection = -sortDirection; 
          sortTable(table, columnIndex, sortDirection);
        });
      });
    }
  
    function sortTable(tbl, colIndex, direction) {
      const rowsArray = Array.from(tbl.querySelectorAll('tbody tr'));
      rowsArray.sort((a, b) => {
        const aText = a.children[colIndex].innerText.trim();
        const bText = b.children[colIndex].innerText.trim();
        if (aText > bText) return direction;
        if (aText < bText) return -direction;
        return 0;
      });
      rowsArray.forEach(row => tbl.querySelector('tbody').appendChild(row));
    }
  
    // =========================================================
    // 2) fetch() para carregar MENUS (nível 2) e CARDS (nível 3)
    // =========================================================
  
    const menuNivel2Container = document.getElementById('menuNivel2Container');
  
    // Placeholders para Cards
    const cardContasPlaceholder      = document.getElementById('cardContasPlaceholder');
    const cardPermissoesPlaceholder  = document.getElementById('cardPermissoesPlaceholder');
    const cardRecebedoresPlaceholder = document.getElementById('cardRecebedoresPlaceholder');
    const cardAgendaPlaceholder               = document.getElementById('cardAgendaPlaceholder');
    const cardPedidosConsultaPlaceholder      = document.getElementById('cardPedidosConsultaPlaceholder');
    const cardComplementosConsultaPlaceholder = document.getElementById('cardComplementosConsultaPlaceholder');
    const cardRelatoriosBaixadosPlaceholder   = document.getElementById('cardRelatoriosBaixadosPlaceholder');
    const cardContratantesConsultaPlaceholder = document.getElementById('cardContratantesConsultaPlaceholder');
    const cardUsuariosConsultaPlaceholder     = document.getElementById('cardUsuariosConsultaPlaceholder');
    const cardPedidosAtendimentoPlaceholder   = document.getElementById('cardPedidosAtendimentoPlaceholder');
    const cardCuponsPlaceholder               = document.getElementById('cardCuponsPlaceholder');
    const cardContratantesAtendimentoPlaceholder = document.getElementById('cardContratantesAtendimentoPlaceholder');
    const cardUsuariosAtendimentoPlaceholder  = document.getElementById('cardUsuariosAtendimentoPlaceholder');
    const cardUnidadesPlaceholder             = document.getElementById('cardUnidadesPlaceholder');
    const cardHorariosPlaceholder             = document.getElementById('cardHorariosPlaceholder');
    const cardComposicoesPlaceholder          = document.getElementById('cardComposicoesPlaceholder');
    const cardPrazosPlaceholder               = document.getElementById('cardPrazosPlaceholder');
    const cardServicosPlaceholder             = document.getElementById('cardServicosPlaceholder');
    const cardComplementosLojasPlaceholder    = document.getElementById('cardComplementosLojasPlaceholder');
    const cardFormulariosPlaceholder          = document.getElementById('cardFormulariosPlaceholder');
    const cardTermosDeUsoPlaceholder          = document.getElementById('cardTermosDeUsoPlaceholder');
    const cardMeiosPagamentoPlaceholder       = document.getElementById('cardMeiosPagamentoPlaceholder');
    const cardBeneficiosPlaceholder           = document.getElementById('cardBeneficiosPlaceholder');
    const cardTaxasPlaceholder                = document.getElementById('cardTaxasPlaceholder');
    const cardDivisaoReceitasPlaceholder      = document.getElementById('cardDivisaoReceitasPlaceholder');
    const cardDesativarDatasPlaceholder       = document.getElementById('cardDesativarDatasPlaceholder');
    const cardLayoutPlaceholder               = document.getElementById('cardLayoutPlaceholder');
    // ... (demais placeholders)
  
    function clearMenuN2() {
      if (menuNivel2Container) {
        menuNivel2Container.innerHTML = '';
      }
    }

    // Função para limpar todos os placeholders
    function clearAllCards() {
      if (cardContasPlaceholder) cardContasPlaceholder.innerHTML = '';
      if (cardPermissoesPlaceholder) cardPermissoesPlaceholder.innerHTML = '';
      if (cardRecebedoresPlaceholder) cardRecebedoresPlaceholder.innerHTML = '';
      if (cardAgendaPlaceholder) cardAgendaPlaceholder.innerHTML = '';
      if (cardPedidosConsultaPlaceholder) cardPedidosConsultaPlaceholder.innerHTML = '';
      if (cardComplementosConsultaPlaceholder) cardComplementosConsultaPlaceholder.innerHTML = '';
      if (cardRelatoriosBaixadosPlaceholder) cardRelatoriosBaixadosPlaceholder.innerHTML = '';
      if (cardContratantesConsultaPlaceholder) cardContratantesConsultaPlaceholder.innerHTML = '';
      if (cardUsuariosConsultaPlaceholder) cardUsuariosConsultaPlaceholder.innerHTML = '';
      if (cardPedidosAtendimentoPlaceholder) cardPedidosAtendimentoPlaceholder.innerHTML = '';
      if (cardCuponsPlaceholder) cardCuponsPlaceholder.innerHTML = '';
      if (cardContratantesAtendimentoPlaceholder) cardContratantesAtendimentoPlaceholder.innerHTML = '';
      if (cardUsuariosAtendimentoPlaceholder) cardUsuariosAtendimentoPlaceholder.innerHTML = '';
      if (cardUnidadesPlaceholder) cardUnidadesPlaceholder.innerHTML = '';
      if (cardHorariosPlaceholder) cardHorariosPlaceholder.innerHTML = '';
      if (cardComposicoesPlaceholder) cardComposicoesPlaceholder.innerHTML = '';
      if (cardPrazosPlaceholder) cardPrazosPlaceholder.innerHTML = '';
      if (cardServicosPlaceholder) cardServicosPlaceholder.innerHTML = '';
      if (cardComplementosLojasPlaceholder) cardComplementosLojasPlaceholder.innerHTML = '';
      if (cardFormulariosPlaceholder) cardFormulariosPlaceholder.innerHTML = '';
      if (cardTermosDeUsoPlaceholder) cardTermosDeUsoPlaceholder.innerHTML = '';
      if (cardMeiosPagamentoPlaceholder) cardMeiosPagamentoPlaceholder.innerHTML = '';
      if (cardBeneficiosPlaceholder) cardBeneficiosPlaceholder.innerHTML = '';
      if (cardTaxasPlaceholder) cardTaxasPlaceholder.innerHTML = '';
      if (cardDivisaoReceitasPlaceholder) cardDivisaoReceitasPlaceholder.innerHTML = '';
      if (cardDesativarDatasPlaceholder) cardDesativarDatasPlaceholder.innerHTML = '';
      if (cardLayoutPlaceholder) cardLayoutPlaceholder.innerHTML = '';
      // ... (demais placeholders)
    }
  
    // Sidebar (nível 1)
    const sidebarLinks = document.querySelectorAll('#sidebarMenu .nav-link');
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        // Remove active
        sidebarLinks.forEach(i => i.classList.remove('active'));
        link.classList.add('active');
  
        const section = link.getAttribute('data-section');
        clearMenuN2();
        clearAllCards();
  
        if (section === 'cadastros') {
          fetch('partials/menuCadastros.html')
            .then(r => r.text())
            .then(html => {
              menuNivel2Container.innerHTML = html;
              setupMenuCadastros();
            });
        }
        else if (section === 'consultas') {
          fetch('partials/menuConsultas.html')
            .then(r => r.text())
            .then(html => {
              menuNivel2Container.innerHTML = html;
              setupMenuConsultas();
            });
        }
        else if (section === 'atendimento') {
          fetch('partials/menuAtendimento.html')
            .then(r => r.text())
            .then(html => {
              menuNivel2Container.innerHTML = html;
              setupMenuAtendimento();
            });
        }
        else if (section === 'configLojas') {
          fetch('partials/menuConfigLojas.html')
            .then(r => r.text())
            .then(html => {
              menuNivel2Container.innerHTML = html;
              setupMenuConfigLojas();
            });
        }
        // Adicione condições similares para outras seções conforme necessário
      });
    });


    // =========================================================
    // 2) Funções atualizar ativo no menu de nível 02
    // =========================================================    
    
    // Menu nível 02 Cadastro

    function setupMenuCadastros() {
      const menuContas = document.getElementById('menuContas');
      const menuPermissoes = document.getElementById('menuPermissoes');
      const menuRecebedores = document.getElementById('menuRecebedores');

      // Função para atualizar classe ativa nos itens do menu de nível 2
      function atualizarAtivo(itemSelecionado) {
        // Remove "active" de todos os links dentro do container
        document.querySelectorAll('#menuNivel2Container .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        // Adiciona "active" ao item clicado
        itemSelecionado.classList.add('active');
      }
  
      if (menuContas) {
        menuContas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuContas);
          clearAllCards();
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            });
        });
      }
      /*if (menuPermissoes) {
        menuPermissoes.addEventListener('click', (e) => {
          e.preventDefault();
          clearAllCards();
          fetch('partials/cardPermissoes.html')
            .then(r => r.text())
            .then(html => {
              cardPermissoesPlaceholder.innerHTML = html;
            });
        });
      }*/
      if (menuPermissoes) {
        menuPermissoes.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuPermissoes);
          clearAllCards();
          fetch('partials/cardPermissoes.html')
            .then(r => r.text())
            .then(html => {
              cardPermissoesPlaceholder.innerHTML = html;
              setupListenersPermissoes();
              setupCardPermissoesEvents(); 
            })
            .catch(err => console.error('Erro ao carregar cardPermissoes.html:', err));
        });
      }

      if (menuRecebedores) {
        menuRecebedores.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuRecebedores);
          clearAllCards();
          fetch('partials/cardRecebedores.html')
            .then(r => r.text())
            .then(html => {
                // Injetar no placeholder
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                //cardRecebedoresPlaceholder.innerHTML = html; outra maneira de injetar
                setupCardRecebedoresEvents();
              
            });
        });
      }
  
      // Por padrão, abrir Contas
      if (menuContas) {
        menuContas.click();
      }
    }
  

    // Menu nível 02 Consultas
    function setupMenuConsultas() {
      const menuAgenda = document.getElementById('menuAgenda');
      const menuPedidos = document.getElementById('menuPedidos');
      const menuComplementos = document.getElementById('menuComplementos');
      const menuRelatoriosBaixados = document.getElementById('menuRelatoriosBaixados');
      const menuContratantes = document.getElementById('menuContratantes');
      const menuUsuarios = document.getElementById('menuUsuarios');

      // Função para atualizar classe ativa nos itens do menu de nível 2
      function atualizarAtivo(itemSelecionado) {
        document.querySelectorAll('#menuNivel2Container .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        itemSelecionado.classList.add('active');
      }

      if (menuAgenda) {
        menuAgenda.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuAgenda);
          clearAllCards();
          fetch('partials/cardAgenda.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardAgendaPlaceholder').innerHTML = html;
              initCalendar(); // Inicializa o calendário após carregar o HTML
            })
            .catch(err => console.error('Erro ao carregar cardAgenda.html:', err));
        });
      }

      if (menuPedidos) {
        menuPedidos.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuPedidos);
          clearAllCards();
          fetch('partials/cardPedidos.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardPedidosConsultaPlaceholder').innerHTML = html;
              setupCardPedidosEvents(); // Garanta que esta chamada esteja aqui, após a carga do HTML
              setupCardContratantePedidoEvents()
            })
            .catch(err => console.error('Erro ao carregar cardPedidosConsulta.html:', err));
        });
      }

      if (menuComplementos) {
        menuComplementos.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuComplementos);
          clearAllCards();
          fetch('partials/cardComplementos.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardComplementosConsultaPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardComplementosConsulta.html:', err));
        });
      }

      if (menuRelatoriosBaixados) {
        menuRelatoriosBaixados.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuRelatoriosBaixados);
          clearAllCards();
          fetch('partials/cardRelatorios.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardRelatoriosBaixadosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardRelatoriosBaixados.html:', err));
        });
      }

      if (menuContratantes) {
        menuContratantes.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuContratantes);
          clearAllCards();
          fetch('partials/cardContratantes.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardContratantesConsultaPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardContratantes.html:', err));
        });
      }

      if (menuUsuarios) {
        menuUsuarios.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuUsuarios);
          clearAllCards();
          fetch('partials/cardUsuarios.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardUsuariosConsultaPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardUsuarios.html:', err));
        });
      }
      // Por padrão, abrir Agenda (primeiro item do menu)
      if (menuAgenda) {
        menuAgenda.click();
      }
    }

    
  // Menu nível 02 Atendimento
  function setupMenuAtendimento() {
    const menuPedidosAtendimento = document.getElementById('menuPedidosAtendimento');
    const menuCupons = document.getElementById('menuCupons');
    const menuContratantesAtendimento = document.getElementById('menuContratantesAtendimento');
    const menuUsuariosAtendimento = document.getElementById('menuUsuariosAtendimento');

    // Função para atualizar classe ativa nos itens do menu de nível 2
    function atualizarAtivo(itemSelecionado) {
      document.querySelectorAll('#menuNivel2Container .nav-link').forEach(link => {
        link.classList.remove('active');
      });
      itemSelecionado.classList.add('active');
    }

    // Configuração dos listeners para cada item do menu
    if (menuPedidosAtendimento) {
      menuPedidosAtendimento.addEventListener('click', (e) => {
        e.preventDefault();
        atualizarAtivo(menuPedidosAtendimento);
        clearAllCards();
        fetch('partials/cardPedidosAtendimento.html')
          .then(r => r.text())
          .then(html => {
            document.getElementById('cardPedidosAtendimentoPlaceholder').innerHTML = html;
          })
          .catch(err => console.error('Erro ao carregar cardPedidosAtendimentos.html:', err));
      });
    }

    if (menuCupons) {
      menuCupons.addEventListener('click', (e) => {
        e.preventDefault();
        atualizarAtivo(menuCupons);
        clearAllCards();
        fetch('partials/cardCupons.html')
          .then(r => r.text())
          .then(html => {
            document.getElementById('cardCuponsPlaceholder').innerHTML = html;
          })
          .catch(err => console.error('Erro ao carregar cardCupons.html:', err));
      });
    }

    if (menuContratantesAtendimento) {
      menuContratantesAtendimento.addEventListener('click', (e) => {
        e.preventDefault();
        atualizarAtivo(menuContratantesAtendimento);
        clearAllCards();
        fetch('partials/cardContratantes.html')
          .then(r => r.text())
          .then(html => {
            document.getElementById('cardContratantesAtendimentoPlaceholder').innerHTML = html;
          })
          .catch(err => console.error('Erro ao carregar cardContratantes.html:', err));
      });
    }

    if (menuUsuariosAtendimento) {
      menuUsuariosAtendimento.addEventListener('click', (e) => {
        e.preventDefault();
        atualizarAtivo(menuUsuariosAtendimento);
        clearAllCards();
        fetch('partials/cardUsuariosAtendimento.html')
          .then(r => r.text())
          .then(html => {
            document.getElementById('cardUsuariosAtendimentoPlaceholder').innerHTML = html;
          })
          .catch(err => console.error('Erro ao carregar cardUsuariosAtendimento.html:', err));
      });
    }
    // Por padrão, abrir Pedidos (primeiro item do menu)
    if (menuPedidosAtendimento) {
      menuPedidosAtendimento.click();
    }
  }
  



  
  
    // =========================================================
    // 2) Lógica do Card Contas
    // =========================================================
  
    function setupCardContasEvents() {
      // Botão “Adicionar Conta” (header)
      const btnAddConta = document.getElementById('botaoAdicionarConta');
      if (btnAddConta) {
        btnAddConta.addEventListener('click', () => {
          // Em vez de overlay, inject cardContaAdd.html:
          fetch('partials/cardContaAdd.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContaAddEvents();
            });
        });
      }
  
      // Botão “Adicionar Conta” (footer)
      const btnAddContaFooter = document.getElementById('botaoAdicionarContaFooter');
      if (btnAddContaFooter) {
        btnAddContaFooter.addEventListener('click', () => {
          fetch('partials/cardContaAdd.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContaAddEvents();
            });
        });
      }
  
      // Clique em "Editar" no dropdown
      const editLinks = document.querySelectorAll('.edit-account-link');
      editLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const accountName = link.getAttribute('data-account') || 'Conta';
  
          // Carregar cardContaEdit.html
          fetch('partials/cardContaEdit.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContaEditEvents(accountName);
            });
        });
      });
    }
  
    // =========================================================
    // 4) Lógica do Card “Adicionar Conta”
    // =========================================================
    function setupCardContaAddEvents() {
      // Botão "Voltar" no Header
      const btnVoltarHeader = document.getElementById('btnVoltarAddContaHeader');
      if (btnVoltarHeader) {
        btnVoltarHeader.addEventListener('click', (evt) => {
          evt.preventDefault();
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Salvar" no Header
      const btnSalvarHeader = document.getElementById('btnSalvarAddContaHeader');
      if (btnSalvarHeader) {
        btnSalvarHeader.addEventListener('click', (evt) => {
          evt.preventDefault();
          alert("Conta adicionada com sucesso (protótipo).");
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Voltar" no Footer
      const btnVoltarFooter = document.getElementById('btnVoltarAddContaFooter');
      if (btnVoltarFooter) {
        btnVoltarFooter.addEventListener('click', (evt) => {
          evt.preventDefault();
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Salvar" no Footer
      const btnSalvarFooter = document.getElementById('btnSalvarAddContaFooter');
      if (btnSalvarFooter) {
        btnSalvarFooter.addEventListener('click', (evt) => {
          evt.preventDefault();
          alert("Conta adicionada com sucesso (protótipo).");
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    }
    
  
    // =========================================================
    // 5) Lógica do Card “Editar Conta”
    // =========================================================
    function setupCardContaEditEvents(accountName) {
      // Botão "Voltar" no Header
      const btnVoltarHeader = document.getElementById('btnVoltarEdicaoHeader');
      if (btnVoltarHeader) {
        btnVoltarHeader.addEventListener('click', (evt) => {
          evt.preventDefault();
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Salvar" no Header
      const btnSalvarHeader = document.getElementById('btnSalvarEdicaoHeader');
      if (btnSalvarHeader) {
        btnSalvarHeader.addEventListener('click', (evt) => {
          evt.preventDefault();
          alert("Conta " + accountName + " editada (protótipo).");
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Voltar" no Footer
      const btnVoltarFooter = document.getElementById('btnVoltarEdicaoFooter');
      if (btnVoltarFooter) {
        btnVoltarFooter.addEventListener('click', (evt) => {
          evt.preventDefault();
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    
      // Botão "Salvar" no Footer
      const btnSalvarFooter = document.getElementById('btnSalvarEdicaoFooter');
      if (btnSalvarFooter) {
        btnSalvarFooter.addEventListener('click', (evt) => {
          evt.preventDefault();
          alert("Conta " + accountName + " editada (protótipo).");
          fetch('partials/cardContas.html')
            .then(r => r.text())
            .then(html => {
              cardContasPlaceholder.innerHTML = html;
              setupCardContasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardContas.html:', err));
        });
      }
    }


    // =========================================================
    // 6) Lógica do Card “Editar Recebedores”
    // =========================================================

    function setupCardRecebedoresEvents() {
        // (1) Botão “Adicionar Recebedor” (header)
        const btnAddReceb = document.getElementById('botaoAdicionarRecebedor');
        if (btnAddReceb) {
          btnAddReceb.addEventListener('click', () => {
            console.log("Clique no Adicionar Recebedor - Botão Header");
            fetch('partials/cardRecebedoresAdd.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresAddEvents();
              });
          });
        }
      
        // (2) Botão “Adicionar Recebedor” (footer)
        const btnAddRecebFooter = document.getElementById('botaoAdicionarRecebedorFooter');
        if (btnAddRecebFooter) {
          btnAddRecebFooter.addEventListener('click', () => {
            fetch('partials/cardRecebedoresAdd.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresAddEvents();
              });
          });
        }
      
        // (3) Clique em "Editar Recebedor"
        const editLinks = document.querySelectorAll('.edit-recebedor-link');
        editLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('partials/cardRecebedoresAdd.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresAddEvents();
              })
              .catch(err => console.error('Erro ao carregar cardRecebedoresAdd.html:', err));
          });
        });
      
        // (4) Clique em "Saques"
        const saquesLinks = document.querySelectorAll('.saques-link');
        saquesLinks.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Carregar cardSaquesRecebedores.html
            fetch('partials/cardSaquesRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardSaquesRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardSaquesRecebedores.html:', err));
          });
        });

      
        // (5) Clique em "Resumo" (exemplo)
        const resumoLinks = document.querySelectorAll('.resumo-link');
        resumoLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('partials/cardDadosRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardDadosRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardDadosRecebedores.html:', err));
          });
        });
        
        
        // (6) Clique em "Liquidações"
        const liquidaLinks = document.querySelectorAll('.liquidacoes-link');
        liquidaLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('partials/cardLiquidacoesRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardLiquidacoesRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardLiquidacoesRecebedores.html:', err));
          });
        });
    }
      
    function setupCardRecebedoresAddEvents() {
        // Botão "Voltar" no Header
        const btnVoltarHeader = document.getElementById('btnVoltarRecebedorAdd');
        if (btnVoltarHeader) {
          btnVoltarHeader.addEventListener('click', (evt) => {
            evt.preventDefault();
            fetch('partials/cardRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
          });
        }

        // Botão "Salvar" no Header
        const btnSalvarHeader = document.getElementById('btnSalvarRecebedorAddHeader');
        if (btnSalvarHeader) {
          btnSalvarHeader.addEventListener('click', (evt) => {
            evt.preventDefault();
            alert("Recebedor adicionado com sucesso (protótipo).");
            fetch('partials/cardRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
          });
        }

        // Botão "Voltar" no Footer
        const btnVoltarFooter = document.getElementById('btnVoltarRecebedorAddFooter');
        if (btnVoltarFooter) {
          btnVoltarFooter.addEventListener('click', (evt) => {
            evt.preventDefault();
            fetch('partials/cardRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
          });
        }

        // Botão "Salvar" no Footer
        const btnSalvarFooter = document.getElementById('btnSalvarRecebedorAddFooter');
        if (btnSalvarFooter) {
          btnSalvarFooter.addEventListener('click', (evt) => {
            evt.preventDefault();
            alert("Recebedor adicionado com sucesso (protótipo).");
            fetch('partials/cardRecebedores.html')
              .then(r => r.text())
              .then(html => {
                document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
                setupCardRecebedoresEvents();
              })
              .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
          });
        }
    }

    function setupCardSaquesRecebedoresEvents() {
      // Botão "Voltar" usando o ID correto do HTML
      const btnVoltar = document.getElementById('btnVoltarSaquesRecebedor'); // sem "s" no final
      if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
          e.preventDefault();
          // Voltar para cardRecebedores.html
          fetch('partials/cardRecebedores.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;                
              setupCardRecebedoresEvents();
            })
            .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
        });
      }
    }

    function setupCardDadosRecebedoresEvents() {
      const btnVoltar = document.getElementById('btnVoltarDadosRecebedor');
      if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
          e.preventDefault();
          // Voltar para a listagem anterior; por exemplo, cardRecebedores.html
          fetch('partials/cardRecebedores.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
              setupCardRecebedoresEvents();
            })
            .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
        });
      }
    }

    function setupCardLiquidacoesRecebedoresEvents() {
      const btnVoltar = document.getElementById('btnVoltarLiquidacoesRecebedores');
      if (btnVoltar) {
        btnVoltar.addEventListener('click', (e) => {
          e.preventDefault();
          // Voltar para a listagem de Recebedores ou para a página anterior, conforme desejado
          fetch('partials/cardRecebedores.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardRecebedoresPlaceholder').innerHTML = html;
              setupCardRecebedoresEvents();
            })
            .catch(err => console.error('Erro ao carregar cardRecebedores.html:', err));
        });
      }
    }
    
    // =========================================================
    // 7) Lógica do Card “Permissões”
    // =========================================================

    function setupListenersPermissoes() {
      // Permissões
      const btnCriarPerfilHeader = document.getElementById('btnCriarPerfilHeader');
      const btnAdicionarUsuarioHeader = document.getElementById('btnAdicionarUsuarioHeader');
      const btnCriarPerfilFooter = document.getElementById('btnCriarPerfilFooter');
      const btnAdicionarUsuarioFooter = document.getElementById('btnAdicionarUsuarioFooter');
      const permissoesTab = document.getElementById('permissoesTab');
    
      // Carrega conteúdo para a aba ativa ao carregar a página
      const initialActiveTab = document.querySelector('.nav-link.active');
      if (initialActiveTab) {
        const abaId = initialActiveTab.getAttribute('aria-controls');
        atualizarBotoes(abaId); // Chama com o ID da aba
      }

      function atualizarBotoes(aba) {
        if (aba === 'perfis') {
          btnCriarPerfilHeader?.classList.remove('d-none');
          btnCriarPerfilFooter?.classList.remove('d-none');
          btnAdicionarUsuarioHeader?.classList.add('d-none');
          btnAdicionarUsuarioFooter?.classList.add('d-none');
        } else if (aba === 'usuarios') {
          btnCriarPerfilHeader?.classList.add('d-none');
          btnCriarPerfilFooter?.classList.add('d-none');
          btnAdicionarUsuarioHeader?.classList.remove('d-none');
          btnAdicionarUsuarioFooter?.classList.remove('d-none');
        }

        // Adicionando carregamento de conteúdo dinâmico
        const contentId = `${aba}`;
        const contentDiv = document.getElementById(contentId);
        if (!contentDiv.getAttribute('data-loaded')) { // Verifica se já foi carregado
          fetch(`partials/${contentId}.html`)
            .then(response => response.text())
            .then(html => {
              contentDiv.innerHTML = html;
              contentDiv.setAttribute('data-loaded', 'true');
            })
            .catch(error => console.error(`Erro ao carregar conteúdo para ${aba}:`, error));
        }

      }
    
      // Vincula eventos de clique nas abas de permissões
      const tabPerfisBtn = document.getElementById('tab-perfis-tab');
      const tabUsuariosBtn = document.getElementById('tab-usuarios-tab');
    
      if (tabPerfisBtn) {
        tabPerfisBtn.addEventListener('click', () => atualizarBotoes('perfis'));
      }
      if (tabUsuariosBtn) {
        tabUsuariosBtn.addEventListener('click', () => atualizarBotoes('usuarios'));
      }

      // NumPedido
      const numPedidoTab = document.getElementById('orderDetailsTab');
      const tabsNumPedido = ['detalhes', 'aprovacoes', 'atualizacoes', 'editar', 'incluir', 'trocar', 'cancelar'];
      tabsNumPedido.forEach(tabId => {
        const tabBtn = document.getElementById(`${tabId}-tab`);
        if (tabBtn) {
          tabBtn.addEventListener('click', () => atualizarBotoes(tabId));
        }
      });
    
      // Atualizar botões conforme a aba ativa inicialmente
      // const initialActiveTab = document.querySelector('#permissoesTab .nav-link.active');
      // if (initialActiveTab) {
      //   if (initialActiveTab.id === 'tab-perfis-tab') {
      //     atualizarBotoes('perfis');
      //   } else if (initialActiveTab.id === 'tab-usuarios-tab') {
      //     atualizarBotoes('usuarios');
      //   }
      // }



      // Atualizar botões conforme a aba ativa inicialmente para ambos os cards
      //[permissoesTab, numPedidoTab].forEach(tabContainer => {
      //  const initialActiveTab = tabContainer.querySelector('.nav-link.active');
      //  if (initialActiveTab) {
      //    atualizarBotoes(initialActiveTab.getAttribute('aria-controls'));
      //  }
      //});

    }


    // Botão 'Criar perfil' no card Permissões
function setupCardPermissoesEvents() {
  const btnCriarPerfilHeader = document.getElementById('btnCriarPerfilHeader');
  const btnCriarPerfilFooter = document.getElementById('btnCriarPerfilFooter');
  

  console.log('btnCriarPerfilHeader:', btnCriarPerfilHeader);
  console.log('btnCriarPerfilFooter:', btnCriarPerfilFooter);

  if (btnCriarPerfilHeader) {
    btnCriarPerfilHeader.addEventListener('click', () => {
      fetch('partials/cardPermissaoPerfilAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
          setupCardPermissaoPerfilAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPermissaoPerfilAdd.html:', err));
    });
  }

  if (btnCriarPerfilFooter) {
    btnCriarPerfilFooter.addEventListener('click', () => {
      fetch('partials/cardPermissaoPerfilAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
          setupCardPermissaoPerfilAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPermissaoPerfilAdd.html:', err));
    });
  }

  

  // Tratamento para os botões adicionar usuário
  const btnAdicionarUsuarioHeader = document.getElementById('btnAdicionarUsuarioHeader');
  if (btnAdicionarUsuarioHeader) {
    btnAdicionarUsuarioHeader.addEventListener('click', () => {
      fetch('partials/cardPermissaoUsuarioAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
          setupCardPermissaoUsuarioAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPermissaoUsuarioAdd.html:', err));
    });
  }

  const btnAdicionarUsuarioFooter = document.getElementById('btnAdicionarUsuarioFooter');
  if (btnAdicionarUsuarioFooter) {
    btnAdicionarUsuarioFooter.addEventListener('click', () => {
      fetch('partials/cardPermissaoUsuarioAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
          setupCardPermissaoUsuarioAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPermissaoUsuarioAdd.html:', err));
    });
  }


  // Links de editar perfil
  const editPerfilLinks = document.querySelectorAll('.edit-perfil-link');
  editPerfilLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      fetch('partials/cardPermissaoPerfilAdd.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
          setupCardPermissaoPerfilAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPermissaoPerfilAdd.html:', err));
    });
  });

  // ... restante da lógica para outros botões, se houver ...
}

// Delegação de evento para links "Editar" de usuário
document.getElementById('cardPermissoesPlaceholder').addEventListener('click', function(e) {
  const editUserLink = e.target.closest('.edit-usuario-link');
  if(editUserLink) {
    e.preventDefault();
    fetch('partials/cardPermissaoUsuarioAdd.html')
      .then(r => r.text())
      .then(html => {
        document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
        setupCardPermissaoUsuarioAddEvents();
      })
      .catch(err => console.error('Erro ao carregar cardPermissaoUsuarioAdd.html:', err));
  }
});


// Configurar botões voltar e salvar no card Permissão Perfil Add
function setupCardPermissaoPerfilAddEvents() {
  const btnVoltarHeader = document.getElementById('btnVoltarPermissaoPerfilAddHeader');
  const btnSalvarHeader = document.getElementById('btnSalvarPermissaoPerfilAddHeader');
  const btnVoltarFooter = document.getElementById('btnVoltarPermissaoPerfilAddFooter');
  const btnSalvarFooter = document.getElementById('btnSalvarPermissaoPerfilAddFooter');

  function voltarAcao() {
    fetch('partials/cardPermissoes.html')
      .then(r => r.text())
      .then(html => {
        document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
        setupListenersPermissoes();
        setupCardPermissoesEvents();
      })
      .catch(err => console.error('Erro ao recarregar cardPermissoes.html:', err));
  }

  btnVoltarHeader?.addEventListener('click', voltarAcao);
  btnVoltarFooter?.addEventListener('click', voltarAcao);

  function salvarAcao() {
    alert("Perfil criado com sucesso (protótipo).");
    voltarAcao();
  }

  btnSalvarHeader?.addEventListener('click', salvarAcao);
  btnSalvarFooter?.addEventListener('click', salvarAcao);
}


// Configurar botões voltar e salvar no card Permissão Usuário Add
function setupCardPermissaoUsuarioAddEvents() {
  const btnVoltarHeader = document.getElementById('btnVoltarPermissaoUsuarioAddHeader');
  const btnSalvarHeader = document.getElementById('btnSalvarPermissaoUsuarioAddHeader');
  const btnVoltarFooter = document.getElementById('btnVoltarPermissaoUsuarioAddFooter');
  const btnSalvarFooter = document.getElementById('btnSalvarPermissaoUsuarioAddFooter');

  function voltarAcao() {
    fetch('partials/cardPermissoes.html')
      .then(r => r.text())
      .then(html => {
        document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
        setupListenersPermissoes();
        setupCardPermissoesEvents();
      })
      .catch(err => console.error('Erro ao recarregar cardPermissoes.html:', err));
  }

  btnVoltarHeader?.addEventListener('click', voltarAcao);
  btnVoltarFooter?.addEventListener('click', voltarAcao);

  function salvarAcao() {
    alert("Usuário adicionado com sucesso (protótipo).");
    voltarAcao();
  }

  btnSalvarHeader?.addEventListener('click', salvarAcao);
  btnSalvarFooter?.addEventListener('click', salvarAcao);
}

function setupCardPermissaoUsuarioEditEvents() {
  const btnVoltarHeader = document.getElementById('btnVoltarPermissaoUsuarioEditHeader');
  const btnSalvarHeader = document.getElementById('btnSalvarPermissaoUsuarioEditHeader');
  const btnVoltarFooter = document.getElementById('btnVoltarPermissaoUsuarioEditFooter');
  const btnSalvarFooter = document.getElementById('btnSalvarPermissaoUsuarioEditFooter');

  function voltarAcao() {
    fetch('partials/cardPermissoes.html')
      .then(r => r.text())
      .then(html => {
        document.getElementById('cardPermissoesPlaceholder').innerHTML = html;
        setupListenersPermissoes();
        setupCardPermissoesEvents();
      })
      .catch(err => console.error('Erro ao recarregar cardPermissoes.html:', err));
  }

  if (btnVoltarHeader) btnVoltarHeader.addEventListener('click', voltarAcao);
  if (btnVoltarFooter) btnVoltarFooter.addEventListener('click', voltarAcao);

  function salvarAcao() {
    alert("Usuário editado com sucesso (protótipo).");
    voltarAcao();
  }

  if (btnSalvarHeader) btnSalvarHeader.addEventListener('click', salvarAcao);
  if (btnSalvarFooter) btnSalvarFooter.addEventListener('click', salvarAcao);
}





    // Ao carregar a página, abrir “Cadastros” por padrão
    const defaultSidebarLink = document.querySelector('[data-section="cadastros"]');
    if (defaultSidebarLink) {
      defaultSidebarLink.click();
    }



    // =========================================================
    // 8) Lógica do Card “Pedidos em Consulta”
    // =========================================================

    // Injetar Numero do Pedido
    function setupCardPedidosEvents() {
      console.log("Setup de eventos para os pedidos iniciado.");
      const pedidoLinks = document.querySelectorAll('.pedido-link');
      console.log(`Encontrados ${pedidoLinks.length} botões de pedido.`);
      pedidoLinks.forEach(btn => {
          console.log("Adicionando listener de evento ao botão.");
          btn.addEventListener('click', function(e) {
              e.preventDefault();
              console.log("Botão de pedido clicado.");
              fetch('partials/cardNumPedido.html')
                  .then(response => response.text())
                  .then(html => {
                      console.log("HTML carregado, atualizando o DOM.");
                      document.getElementById('cardPedidosConsultaPlaceholder').innerHTML = html;
                      console.log("O conteúdo de cardNumPedido.html foi carregado no placeholder.");
                      setupCardNumPedidoEvents(); // Configura eventos específicos do card
                      setupFormularioEditarPedido() // Configura eventos específicos do formjulário adicionar ao pedido
                  })
                  .catch(error => console.error('Erro ao carregar cardNumPedido.html:', error));
                  console.log("Falha ao carregar o HTML.");
          });
      });
    }
  

    // Injetar Contratantes de Pedidos
    function setupCardContratantePedidoEvents() {
      console.log("Setup de eventos para os pedidos iniciado.");
      const contratanteLink = document.querySelectorAll('.contratante-link');
      console.log(`Encontrados ${contratanteLink.length} botões de pedido.`);
      contratanteLink.forEach(btn => {
          console.log("Adicionando listener de evento ao botão.");
          btn.addEventListener('click', function(e) {
              e.preventDefault();
              console.log("Botão de pedido clicado.");
              fetch('partials/cardContratantePedido.html')
                  .then(response => response.text())
                  .then(html => {
                      console.log("HTML carregado, atualizando o DOM.");
                      document.getElementById('cardPedidosConsultaPlaceholder').innerHTML = html;
                      console.log("O conteúdo de cardContratantePedido.html foi carregado no placeholder.");
                      setupCardNumPedidoEvents(); // Configura eventos específicos do novo card
                      setupFormUsuario()
                  })
                  .catch(error => console.error('Erro ao carregar cardContratantePedido.html:', error));
          });
      });
    }

    // Voltar para Pedidos
    function setupCardNumPedidoEvents() {
      const btnVoltar = document.getElementById('btnVoltar');
      if (btnVoltar) {
          btnVoltar.addEventListener('click', function(e) {
              e.preventDefault();
              fetch('partials/cardPedidos.html')
                  .then(response => response.text())
                  .then(html => {
                      document.getElementById('cardPedidosConsultaPlaceholder').innerHTML = html;
                      setupCardPedidosEvents(); // Reconfigura os eventos do card inicial
                      setupCardContratantePedidoEvents()
                  })
                  .catch(error => console.error('Erro ao carregar cardPedidos.html:', error));
          });
      }
    }



  




  // Calendário
  function initCalendar() {
    var calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'pt-br',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia'
            }
        });

        $('#calendar').hide();

        $('#btnFilterAgenda').on('click', function() {
            $('#calendar').toggle();
            if ($('#calendar').is(':visible')) {
                calendar.render(); // Renderiza apenas quando visível
            }
        });
    } else {
        console.error("Elemento '#calendar' não encontrado!");
    }
}

function toggleDetail(button) {
  const currentRow = button.parentNode.parentNode;
  const detailRow = currentRow.nextElementSibling;
  $(detailRow).toggle(); // Usando jQuery para simplificar a demonstração
}



// Abas do Detalhes pedidos
const detalhesButton = document.querySelector('#headingDetalhes .accordion-button');
detalhesButton.addEventListener('click', function() {
  console.log("Botão de detalhes clicado.");
  const detalhesContent = document.getElementById('detalhesContent');
  if (!detalhesContent.hasAttribute('data-loaded')) {
    fetch('partials/detalhesPedido.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao buscar o arquivo: ' + response.statusText);
        }
        return response.text();
      })
      .then(html => {
        detalhesContent.innerHTML = html;
        detalhesContent.setAttribute('data-loaded', 'true');
        console.log("Conteúdo carregado.");
      })
      .catch(error => console.error('Erro ao carregar o conteúdo:', error));
  }
});



// expansão dos botões em 'Pagamento' em 'Detalhes do Pedido'
document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-bs-target'); // Ajustado para buscar o atributo data-bs-target
    const content = document.querySelector(targetId);
    
    // Fechar todos os conteúdos abertos
    document.querySelectorAll('.collapse-content').forEach(c => {
      if (c !== content) {
        c.style.display = 'none';
      }
    });

    // Alternar visibilidade do conteúdo específico
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Collapse do Select do formulário do resumo de editar o pedido
function setupFormularioEditarPedido() {
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2Container = document.getElementById('dropdown2Container');
  const dropdown2 = document.getElementById('dropdown2');
  const dropdown3Container = document.getElementById('dropdown3Container');
  const dropdown3 = document.getElementById('dropdown3');
  const inputContainer = document.getElementById('inputContainer');
  const buttonContainer = document.getElementById('buttonContainer');

  if (!dropdown1) return; // Garante que o elemento exista

  dropdown1.addEventListener('change', function() {
    if (dropdown1.value) {
      dropdown2Container.classList.remove('d-none');
    } else {
      dropdown2Container.classList.add('d-none');
      dropdown3Container.classList.add('d-none');
      inputContainer.classList.add('d-none');
      buttonContainer.classList.add('d-none');
    }
  });

  dropdown2.addEventListener('change', function() {
    if (dropdown2.value) {
      dropdown3Container.classList.remove('d-none');
    } else {
      dropdown3Container.classList.add('d-none');
      inputContainer.classList.add('d-none');
      buttonContainer.classList.add('d-none');
    }
  });

  dropdown3.addEventListener('change', function() {
    if (dropdown3.value) {
      inputContainer.classList.remove('d-none');
      buttonContainer.classList.remove('d-none');
    } else {
      inputContainer.classList.add('d-none');
      buttonContainer.classList.add('d-none');
    }
  });
}


// Collapse do Select do formulário do resumo de editar o pedido
function setupFormUsuario() {
  const selectNome = document.getElementById('selectNome');
  const dadosForm = document.getElementById('dadosForm');
  
  if (!selectNome) return;
  
  selectNome.addEventListener('change', function() {
    if (selectNome.value) {
      dadosForm.classList.remove('d-none');
    } else {
      dadosForm.classList.add('d-none');
    }
  });
}

document.addEventListener('DOMContentLoaded', setupFormUsuario);



    // Menu nível 02 ConfigLojas
    function setupMenuConfigLojas() {
      const menuUnidades = document.getElementById('menuUnidades');
      const menuHorarios = document.getElementById('menuHorarios');
      const menuComposicoes = document.getElementById('menuComposicoes');
      const menuPrazos = document.getElementById('menuPrazos');
      const menuServicos = document.getElementById('menuServicos');
      const menuComplementosLojas = document.getElementById('menuComplementosLojas');
      const menuFormularios = document.getElementById('menuFormularios');
      const menuTermosDeUso = document.getElementById('menuTermosDeUso');
      const menuMeiosPagamento = document.getElementById('menuMeiosPagamento');
      const menuBeneficios = document.getElementById('menuBeneficios');
      const menuTaxas = document.getElementById('menuTaxas');
      const menuDivisaoReceitas = document.getElementById('menuDivisaoReceitas');
      const menuDesativarDatas = document.getElementById('menuDesativarDatas');
      const menuLayout = document.getElementById('menuLayout');

      // Função para atualizar classe ativa nos itens do menu de nível 2
      function atualizarAtivo(itemSelecionado) {
        document.querySelectorAll('#menuNivel2Container .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        itemSelecionado.classList.add('active');
      }

      // Configuração dos listeners para cada item do menu
      if (menuUnidades) {
        menuUnidades.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuUnidades);
          clearAllCards();
          fetch('partials/cardUnidades.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardUnidadesPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
        });
      }

      if (menuHorarios) {
        menuHorarios.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuHorarios);
          clearAllCards();
          fetch('partials/cardHorarios.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardHorariosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardHorarios.html:', err));
        });
      }

      if (menuComposicoes) {
        menuComposicoes.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuComposicoes);
          clearAllCards();
          fetch('partials/cardComposicoes.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardComposicoesPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
        });
      }

      if (menuPrazos) {
        menuPrazos.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuPrazos);
          clearAllCards();
          fetch('partials/cardPrazos.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardPrazosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardPrazos.html:', err));
        });
      }

      if (menuServicos) {
        menuServicos.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuServicos);
          clearAllCards();
          fetch('partials/cardServicos.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardServicosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardServicos.html:', err));
        });
      }

      if (menuComplementosLojas) {
        menuComplementosLojas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuComplementosLojas);
          clearAllCards();
          fetch('partials/cardComplementosLojas.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardComplementosLojasPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
        });
      }

      if (menuFormularios) {
        menuFormularios.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuFormularios);
          clearAllCards();
          fetch('partials/cardFormularios.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardFormulariosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardFormularios.html:', err));
        });
      }

      if (menuTermosDeUso) {
        menuTermosDeUso.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuTermosDeUso);
          clearAllCards();
          fetch('partials/cardTermosDeUso.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardTermosDeUsoPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardTermosDeUso.html:', err));
        });
      }

      if (menuMeiosPagamento) {
        menuMeiosPagamento.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuMeiosPagamento);
          clearAllCards();
          fetch('partials/cardMeiosPagamento.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
        });
      }

      if (menuBeneficios) {
        menuBeneficios.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuBeneficios);
          clearAllCards();
          fetch('partials/cardBeneficios.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardBeneficiosPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardBeneficios.html:', err));
        });
      }

      if (menuTaxas) {
        menuTaxas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuTaxas);
          clearAllCards();
          fetch('partials/cardTaxas.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardTaxasPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
        });
      }

      if (menuDivisaoReceitas) {
        menuDivisaoReceitas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuDivisaoReceitas);
          clearAllCards();
          fetch('partials/cardDivisaoReceitas.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardDivisaoReceitasPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardDivisaoReceitas.html:', err));
        });
      }

      if (menuDesativarDatas) {
        menuDesativarDatas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuDesativarDatas);
          clearAllCards();
          fetch('partials/cardDesativarDatas.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardDesativarDatasPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardDesativarDatas.html:', err));
        });
      }

      if (menuLayout) {
        menuLayout.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuLayout);
          clearAllCards();
          fetch('partials/cardLayout.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardLayoutPlaceholder').innerHTML = html;
            })
            .catch(err => console.error('Erro ao carregar cardLayout.html:', err));
        });
      }

      // Por padrão, abrir Unidades (primeiro item do menu)
      if (menuUnidades) {
        menuUnidades.click();
      }
    }
}); // Fim do DOMContentLoaded
