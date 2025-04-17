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
    const cardComposicoesPlaceholder          = document.getElementById('cardComposicoesPlaceholder');
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
      if (cardComposicoesPlaceholder) cardComposicoesPlaceholder.innerHTML = '';
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
            setupCardCuponsEvents(); // Configura eventos específicos do card
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
          alert("Conta " + accountName + " editada com sucesso (protótipo).");
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
          alert("Conta " + accountName + " editada com sucesso (protótipo).");
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
      const menuComposicoes = document.getElementById('menuComposicoes');
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

      if (menuTaxas) {
        menuTaxas.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuTaxas);
          clearAllCards();
          // Carregar o cardTaxas.html
          fetch('partials/cardTaxas.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardTaxasPlaceholder').innerHTML = html;
              setupCardTaxasEvents();
            })
            .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
        });
      }

      if (menuUnidades) {
        menuUnidades.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuUnidades);
          clearAllCards();
          fetch('partials/cardUnidades.html')
            .then(r => r.text())
            .then(html => {
              document.getElementById('cardUnidadesPlaceholder').innerHTML = html;
              setupCardUnidadesEvents();
            })
            .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
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
              setupCardComposicoesEvents();
            })
            .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
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
              setupCardComplementosLojasEvents();
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
              setupCardFormulariosEvents();
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
              setupCardMeiosPagamentoEvents();
            })
            .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
        });
      }

      if (menuBeneficios) {
        menuBeneficios.addEventListener('click', (e) => {
          e.preventDefault();
          atualizarAtivo(menuBeneficios);
          clearAllCards();
          // O código para carregar o cardBeneficios.html foi movido para o arquivo beneficios.js
          // para manter todo o código relacionado à seção de Benefícios em um único arquivo
          if (typeof handleMenuBeneficiosClick === 'function') {
            handleMenuBeneficiosClick(e);
          } else {
            console.error('Função handleMenuBeneficiosClick não encontrada no arquivo beneficios.js');
          }
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

// =========================================================
// 9) Lógica do Card “Cupons” e “Desconto”
// =========================================================

// Função para configurar eventos do card Cupons
function setupCardCuponsEvents() {
  const btnAdicionarCupom = document.getElementById('btnAdicionarCupom');
  
  if (btnAdicionarCupom) {
    btnAdicionarCupom.addEventListener('click', function(e) {
      // Em vez de overlay, inject cardDesconto.html:
      fetch('partials/cardDesconto.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('cardCuponsPlaceholder').innerHTML = html;
          setupCardDescontoEvents(); // Configura eventos do card de desconto
        })
        .catch(error => console.error('Erro ao carregar cardDesconto.html:', error));
    });
  }
}

// Função para configurar eventos do card Desconto
function setupCardDescontoEvents() {
  // Botão "Avançar" no formulário do primeiro item do accordion
  const btnAvancar = document.getElementById('btnAvancar');
  
  if (btnAvancar) {
    btnAvancar.addEventListener('click', () => {
      // Fecha o primeiro item do accordion
      $('#collapseOne').collapse('hide');
      
      // Abre o segundo item do accordion
      $('#collapseTwo').collapse('show');
    });
  }
  
  // Botão "Voltar" no footer
  const btnVoltarCupons = document.getElementById('btnVoltarCupons');
  
  if (btnVoltarCupons) {
    btnVoltarCupons.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Carrega o cardCupons.html novamente
      fetch('partials/cardCupons.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('cardCuponsPlaceholder').innerHTML = html;
          setupCardCuponsEvents(); // Configura eventos do card de cupons
        })
        .catch(error => console.error('Erro ao carregar cardCupons.html:', error));
    });
  }
  
  // Controle do segundo item do accordion (Configurações Adicionais)
  const selectUnidade = document.getElementById('selectUnidade');
  const conteudoUnidade = document.getElementById('conteudoUnidade');
  const selectServico = document.getElementById('selectServico');
  const periodos = document.getElementById('periodos');
  const btnSalvarCupom = document.getElementById('btnSalvarCupom');
  
  // Evento ao selecionar uma unidade
  if (selectUnidade) {
    selectUnidade.addEventListener('change', function() {
      if (selectUnidade.value) {
        conteudoUnidade.classList.remove('d-none');
        
        // Resetar o dropdown de serviços para o estado inicial
        if (selectServico) {
          selectServico.selectedIndex = 0;
        }
        
        // Esconder a seção de períodos
        if (periodos) {
          periodos.classList.add('d-none');
        }
      } else {
        conteudoUnidade.classList.add('d-none');
        
        // Esconder os períodos
        if (periodos) {
          periodos.classList.add('d-none');
        }
      }
    });
  }
  
  // Evento ao selecionar um serviço (na aba Horários)
  if (selectServico) {
    selectServico.addEventListener('change', function() {
      if (selectServico.value) {
        periodos.classList.remove('d-none');
      } else {
        periodos.classList.add('d-none');
      }
    });
  }
  
  // Botão Salvar Cupom
  if (btnSalvarCupom) {
    btnSalvarCupom.addEventListener('click', function() {
      // Aqui você pode implementar a lógica para salvar o cupom
      alert('Cupom salvo com sucesso!');
      
      // Carrega o cardCupons.html novamente
      fetch('partials/cardCupons.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('cardCuponsPlaceholder').innerHTML = html;
          setupCardCuponsEvents(); // Configura eventos do card de cupons
        })
        .catch(error => console.error('Erro ao carregar cardCupons.html:', error));
    });
  }
}

// =========================================================
// Funções para o Card "Unidades"
// =========================================================

// Configurar eventos do card Unidades
function setupCardUnidadesEvents() {
  // Botão "Adicionar Unidade" (header)
  const btnAddUnidade = document.getElementById('botaoAdicionarUnidade');
  if (btnAddUnidade) {
    btnAddUnidade.addEventListener('click', () => {
      // Injetar cardUnidadeAdd.html:
      fetch('partials/cardUnidadeAdd.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadeAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidadeAdd.html:', err));
    });
  }
  
  // Botão "Adicionar Unidade" (footer)
  const btnAddUnidadeFooter = document.getElementById('botaoAdicionarUnidadeFooter');
  if (btnAddUnidadeFooter) {
    btnAddUnidadeFooter.addEventListener('click', () => {
      // Injetar cardUnidadeAdd.html:
      fetch('partials/cardUnidadeAdd.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadeAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidadeAdd.html:', err));
    });
  }
  
  // Clique em "Editar" no dropdown
  const editLinks = document.querySelectorAll('.edit-unit-link');
  editLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const unitName = link.getAttribute('data-unit') || 'Unidade';
  
      // Carregar cardUnidadeEdit.html
      fetch('partials/cardUnidadeEdit.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadeEditEvents(unitName);
        })
        .catch(err => console.error('Erro ao carregar cardUnidadeEdit.html:', err));
    });
  });
  
  // Botões "Copiar URL"
  const copyUrlButtons = document.querySelectorAll('.btn-warning');
  copyUrlButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Simular cópia da URL (em um cenário real, aqui seria implementada a funcionalidade de cópia)
      alert('URL copiada para a área de transferência!');
    });
  });
}

function setupCardUnidadeAddEvents() {
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarUnidadeAddHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarUnidadeAddHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Unidade adicionada com sucesso (protótipo).");
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarUnidadeAddFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarUnidadeAddFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Unidade adicionada com sucesso (protótipo).");
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
}

function setupCardUnidadeEditEvents(unitName) {
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarUnidadeEditHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarUnidadeEditHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Unidade " + unitName + " editada com sucesso (protótipo).");
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarUnidadeEditFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarUnidadeEditFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Unidade " + unitName + " editada com sucesso (protótipo).");
      fetch('partials/cardUnidades.html')
        .then(r => r.text())
        .then(html => {
          cardUnidadesPlaceholder.innerHTML = html;
          setupCardUnidadesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardUnidades.html:', err));
    });
  }
}

// =========================================================
// Funções para o Card "Composições"
// =========================================================

// Configurar eventos do card Composições
function setupCardComposicoesEvents() {
  // Botão "Adicionar Composição" no header
  const btnAddComposicao = document.getElementById('botaoAdicionarComposicao');
  if (btnAddComposicao) {
    btnAddComposicao.addEventListener('click', () => {
      // Injetar cardComposicaoAdd.html:
      fetch('partials/cardComposicaoAdd.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicaoAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicaoAdd.html:', err));
    });
  }
  
  // Botão "Adicionar Horário" na aba Horários
  const btnAddHorario = document.getElementById('btnAdicionarHorario');
  if (btnAddHorario) {
    btnAddHorario.addEventListener('click', () => {
      // Injetar cardHorarioAdd.html:
      fetch('partials/cardHorarioAdd.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardHorarioAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardHorarioAdd.html:', err));
    });
  }
  
  // Botão "Adicionar Prazo" na aba Prazos
  const btnAddPrazo = document.getElementById('btnAdicionarPrazo');
  if (btnAddPrazo) {
    btnAddPrazo.addEventListener('click', () => {
      // Injetar cardPrazoAdd.html:
      fetch('partials/cardPrazoAdd.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardPrazoAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardPrazoAdd.html:', err));
    });
  }
  
  // Botão "Adicionar Serviço" na aba Serviços
  const btnAddServico = document.getElementById('btnAdicionarServico');
  if (btnAddServico) {
    btnAddServico.addEventListener('click', () => {
      // Injetar cardServicoAdd.html:
      fetch('partials/cardServicoAdd.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardServicoAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardServicoAdd.html:', err));
    });
  }
  
  // Botão "Adicionar Composição" na aba Composições
  const btnAddComposicaoTab = document.getElementById('btnAdicionarComposicaoTab');
  if (btnAddComposicaoTab) {
    btnAddComposicaoTab.addEventListener('click', () => {
      // Injetar cardComposicaoAdd.html:
      fetch('partials/cardComposicaoAdd.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicaoAddEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicaoAdd.html:', err));
    });
  }
  
  // Controle das abas para atualizar o contador
  const tabButtons = document.querySelectorAll('#composicoesTab button[data-bs-toggle="tab"]');
  const composicoesCounter = document.getElementById('composicoesCounter');
  
  if (tabButtons.length && composicoesCounter) {
    tabButtons.forEach(button => {
      button.addEventListener('shown.bs.tab', function (event) {
        // Atualizar o contador com base na aba ativa
        const activeTab = event.target.getAttribute('id');
        
        switch (activeTab) {
          case 'horarios-tab':
            composicoesCounter.innerHTML = 'Mostrando <strong>1 a 10</strong> de <strong>25</strong> horários';
            break;
          case 'prazos-tab':
            composicoesCounter.innerHTML = 'Mostrando <strong>1 a 10</strong> de <strong>18</strong> prazos';
            break;
          case 'servicos-tab':
            composicoesCounter.innerHTML = 'Mostrando <strong>1 a 10</strong> de <strong>32</strong> serviços';
            break;
          case 'composicoes-tab':
            composicoesCounter.innerHTML = 'Mostrando <strong>1 a 10</strong> de <strong>25</strong> composições';
            break;
        }
      });
    });
  }
}

function setupCardComposicaoAddEvents() {
  // Implementação futura
}

function setupCardHorarioAddEvents() {
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarHorarioAddHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComposicoes.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicoesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarHorarioAddHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Horário adicionado com sucesso (protótipo).");
      fetch('partials/cardComposicoes.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicoesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarHorarioAddFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComposicoes.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicoesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarHorarioAddFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Horário adicionado com sucesso (protótipo).");
      fetch('partials/cardComposicoes.html')
        .then(r => r.text())
        .then(html => {
          cardComposicoesPlaceholder.innerHTML = html;
          setupCardComposicoesEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComposicoes.html:', err));
    });
  }
  
  // Botão Avançar
  const btnAvancarHorario = document.getElementById('btnAvancarHorario');
  if (btnAvancarHorario) {
    btnAvancarHorario.addEventListener('click', () => {
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
  
  // Botão Adicionar Horário
  const btnAdicionarHorario = document.getElementById('btnAdicionarHorario');
  if (btnAdicionarHorario) {
    btnAdicionarHorario.addEventListener('click', () => {
      const tbody = document.querySelector('#tabelaHorarios tbody');
      
      // Criar nova linha
      const tr = document.createElement('tr');
      
      // Coluna "Horário Inicial"
      const tdInicial = document.createElement('td');
      const inputInicial = document.createElement('input');
      inputInicial.type = 'time';
      inputInicial.className = 'form-control';
      tdInicial.appendChild(inputInicial);
      
      // Coluna "Horário Final"
      const tdFinal = document.createElement('td');
      const inputFinal = document.createElement('input');
      inputFinal.type = 'time';
      inputFinal.className = 'form-control';
      tdFinal.appendChild(inputFinal);
      
      // Coluna "Preço"
      const tdPreco = document.createElement('td');
      const inputGroupPreco = document.createElement('div');
      inputGroupPreco.className = 'input-group';
      
      const inputGroupText = document.createElement('span');
      inputGroupText.className = 'input-group-text';
      inputGroupText.textContent = 'R$';
      
      const inputPreco = document.createElement('input');
      inputPreco.type = 'number';
      inputPreco.className = 'form-control';
      inputPreco.min = '0';
      inputPreco.step = '0.01';
      
      inputGroupPreco.appendChild(inputGroupText);
      inputGroupPreco.appendChild(inputPreco);
      tdPreco.appendChild(inputGroupPreco);
      
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
      dropdownLink.className = 'dropdown-item text-danger excluir-horario';
      dropdownLink.href = '#';
      dropdownLink.innerHTML = '<i class="bi bi-trash-fill"></i> Excluir';
      dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        tr.remove();
      });
      
      dropdownItem.appendChild(dropdownLink);
      dropdownMenu.appendChild(dropdownItem);
      dropdownDiv.appendChild(btnDropdown);
      dropdownDiv.appendChild(dropdownMenu);
      tdAcoes.appendChild(dropdownDiv);
      
      // Adicionar colunas à linha
      tr.appendChild(tdInicial);
      tr.appendChild(tdFinal);
      tr.appendChild(tdPreco);
      tr.appendChild(tdAcoes);
      
      // Adicionar linha à tabela
      tbody.appendChild(tr);
    });
  }
}

function setupCardPrazoAddEvents() {
  // Implementação futura
}

function setupCardServicoAddEvents() {
  // Implementação futura
}

// =========================================================
// Funções para o Card "Complementos Lojas"
// =========================================================

// Configurar eventos do card Complementos Lojas
function setupCardComplementosLojasEvents() {
  try {
    // Inicializar abas
    const cadastradosTab = document.getElementById('cadastrados');
    const ordenarTab = document.getElementById('ordenar');
    const btnCadastradosTab = document.getElementById('cadastrados-tab');
    const btnOrdenarTab = document.getElementById('ordenar-tab');
    
    if (btnCadastradosTab && btnOrdenarTab) {
      btnCadastradosTab.addEventListener('click', () => {
        cadastradosTab.classList.add('active', 'show');
        ordenarTab.classList.remove('active', 'show');
        btnCadastradosTab.classList.add('active');
        btnOrdenarTab.classList.remove('active');
      });
      
      btnOrdenarTab.addEventListener('click', () => {
        cadastradosTab.classList.remove('active', 'show');
        ordenarTab.classList.add('active', 'show');
        btnCadastradosTab.classList.remove('active');
        btnOrdenarTab.classList.add('active');
      });
    }
    
    // Inicializar sortable para ordenação de complementos
    const sortableElement = document.getElementById('sortable');
    if (sortableElement) {
      try {
        $(sortableElement).sortable({
          placeholder: 'ui-state-highlight',
          handle: '.col-lg-10',
          cursor: 'move',
          update: function(event, ui) {
            console.log('Ordem atualizada');
          }
        });
        $(sortableElement).disableSelection();
      } catch (error) {
        console.error('Erro ao inicializar sortable:', error);
      }
    }
    
    // Botão para adicionar novo complemento no header
    const btnAdicionarComplemento = document.getElementById('btnAdicionarComplemento');
    if (btnAdicionarComplemento) {
      btnAdicionarComplemento.addEventListener('click', () => {
        const cardComplementosLojasPlaceholder = document.getElementById('cardComplementosLojasPlaceholder');
        if (cardComplementosLojasPlaceholder) {
          fetch('partials/cardComplementoAdd.html')
            .then(r => r.text())
            .then(html => {
              cardComplementosLojasPlaceholder.innerHTML = html;
              setupCardComplementoAddEvents();
            })
            .catch(err => console.error('Erro ao carregar cardComplementoAdd.html:', err));
        }
      });
    }
    
    // Botão para adicionar novo complemento no footer
    const btnAdicionarComplementoFooter = document.getElementById('btnAdicionarComplementoFooter');
    if (btnAdicionarComplementoFooter) {
      btnAdicionarComplementoFooter.addEventListener('click', () => {
        const cardComplementosLojasPlaceholder = document.getElementById('cardComplementosLojasPlaceholder');
        if (cardComplementosLojasPlaceholder) {
          fetch('partials/cardComplementoAdd.html')
            .then(r => r.text())
            .then(html => {
              cardComplementosLojasPlaceholder.innerHTML = html;
              setupCardComplementoAddEvents();
            })
            .catch(err => console.error('Erro ao carregar cardComplementoAdd.html:', err));
        }
      });
    }
    
    // Botão para salvar
    const btnSalvar = document.getElementById('btnSalvar');
    if (btnSalvar) {
      btnSalvar.addEventListener('click', () => {
        // Verificar qual aba está ativa
        if (ordenarTab && ordenarTab.classList.contains('active')) {
          // Obter a ordem atual dos itens
          const itens = document.querySelectorAll('#sortable .list-group-item');
          const ordem = Array.from(itens).map(item => {
            const input = item.querySelector('input[type="hidden"]');
            return input ? input.name : null;
          }).filter(Boolean);
          
          // Aqui seria feita a chamada para a API para salvar a ordem
          console.log('Ordem a ser salva:', ordem);
        }
        
        // Simulação de sucesso
        alert('Dados salvos com sucesso!');
        
        // Carrega o cardComplementosLojas.html novamente
        fetch('partials/cardComplementosLojas.html')
          .then(r => r.text())
          .then(html => {
            document.getElementById('cardComplementosLojasPlaceholder').innerHTML = html;
            setupCardComplementosLojasEvents();
          })
          .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
      });
    }
    
    // Botões para editar complementos
    const botoesEditar = document.querySelectorAll('.edit-complemento-link');
    botoesEditar.forEach(botao => {
      botao.addEventListener('click', (evt) => {
        evt.preventDefault();
        const complementoName = botao.getAttribute('data-complemento') || 'Complemento';
        alert(`Editar complemento ${complementoName} (protótipo).`);
      });
    });
    
    // Botões para excluir complementos
    const botoesExcluir = document.querySelectorAll('.delete-complemento-link');
    botoesExcluir.forEach(botao => {
      botao.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (confirm(`Deseja realmente excluir este complemento?`)) {
          alert(`Complemento excluído (protótipo).`);
        }
      });
    });
    
  } catch (error) {
    console.error('Erro ao configurar eventos do card de complementos de lojas:', error);
  }
}

// Funções para os cards de adição/edição (stubs para implementação futura)
function setupCardComplementoAddEvents() {
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarComplementoAddHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarComplementoAddHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento adicionado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarComplementoAddFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarComplementoAddFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento adicionado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Avançar" no primeiro accordion
  const btnAvancarComplemento = document.getElementById('btnAvancarComplemento');
  if (btnAvancarComplemento) {
    btnAvancarComplemento.addEventListener('click', () => {
      // Abrir o segundo accordion
      const collapseTwo = document.getElementById('collapseTwo');
      const collapseOne = document.getElementById('collapseOne');
      
      if (collapseTwo && collapseOne) {
        // Fechar o primeiro accordion
        const bsCollapseOne = new bootstrap.Collapse(collapseOne, {
          toggle: false
        });
        bsCollapseOne.hide();
        
        // Abrir o segundo accordion
        const bsCollapseTwo = new bootstrap.Collapse(collapseTwo, {
          toggle: false
        });
        bsCollapseTwo.show();
        
        // Atualizar o estado dos botões do accordion
        document.querySelector('button[data-bs-target="#collapseOne"]').classList.add('collapsed');
        document.querySelector('button[data-bs-target="#collapseOne"]').setAttribute('aria-expanded', 'false');
        
        document.querySelector('button[data-bs-target="#collapseTwo"]').classList.remove('collapsed');
        document.querySelector('button[data-bs-target="#collapseTwo"]').setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  // Configurar o comportamento do select de unidade
  const selectUnidade = document.getElementById('selectUnidade');
  const conteudoUnidade = document.getElementById('conteudoUnidade');
  const selectServico = document.getElementById('selectServico');
  const periodos = document.getElementById('periodos');
  
  if (selectUnidade && conteudoUnidade && selectServico) {
    selectUnidade.addEventListener('change', function() {
      if (selectUnidade.value) {
        conteudoUnidade.classList.remove('d-none');
        
        // Resetar o select de serviço para o estado default
        if (selectServico) {
          selectServico.selectedIndex = 0;
        }
        
        // Esconder os períodos quando a unidade muda
        if (periodos) {
          periodos.classList.add('d-none');
        }
      } else {
        conteudoUnidade.classList.add('d-none');
        
        // Esconder os períodos
        if (periodos) {
          periodos.classList.add('d-none');
        }
      }
    });
  }
  
  // Configurar o comportamento do select de serviço
  if (selectServico && periodos) {
    selectServico.addEventListener('change', function() {
      if (selectServico.value) {
        periodos.classList.remove('d-none');
      } else {
        periodos.classList.add('d-none');
      }
    });
  }
  
  // Configurar os radio buttons de cobrança
  const radioCobrarCadaDias = document.getElementById('cobrarCadaDias');
  const inputDiasCobranca = document.getElementById('diasCobranca');
  
  if (radioCobrarCadaDias && inputDiasCobranca) {
    // Atualizar o estado inicial
    inputDiasCobranca.disabled = !radioCobrarCadaDias.checked;
    
    // Adicionar event listeners para todos os radio buttons
    document.querySelectorAll('input[name="opcaoCobranca"]').forEach(radio => {
      radio.addEventListener('change', function() {
        // Habilitar ou desabilitar o campo de dias
        inputDiasCobranca.disabled = this.id !== 'cobrarCadaDias';
      });
    });
  }
  
  // Formatação do campo de preço
  const precoComplemento = document.getElementById('precoComplemento');
  if (precoComplemento) {
    precoComplemento.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = (parseInt(value) / 100).toFixed(2);
      e.target.value = value.replace('.', ',');
    });
    
    precoComplemento.addEventListener('focus', function(e) {
      if (e.target.value === '') {
        e.target.value = '0,00';
      }
    });
  }
}

function setupCardComplementoEditEvents(complementoName) {
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarComplementoEditHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarComplementoEditHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento " + complementoName + " editado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarComplementoEditFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarComplementoEditFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento " + complementoName + " editado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Switch para limitar quantidade
  const switchLimitarQuantidade = document.getElementById('switchLimitarQuantidade');
  const limitarQuantidadeContainer = document.getElementById('limitarQuantidadeContainer');
  
  if (switchLimitarQuantidade && limitarQuantidadeContainer) {
    switchLimitarQuantidade.addEventListener('change', function() {
      if (this.checked) {
        limitarQuantidadeContainer.classList.remove('d-none');
      } else {
        limitarQuantidadeContainer.classList.add('d-none');
      }
    });
  }
  
  // Botões para selecionar/desmarcar todos os dias
  const btnSelecionarTodos = document.getElementById('btnSelecionarTodos');
  const btnDesmarcarTodos = document.getElementById('btnDesmarcarTodos');
  const checkboxesDias = document.querySelectorAll('.card-body .form-check-input[id^="checkbox"]');
  
  if (btnSelecionarTodos) {
    btnSelecionarTodos.addEventListener('click', () => {
      checkboxesDias.forEach(checkbox => {
        checkbox.checked = true;
      });
    });
  }
  
  if (btnDesmarcarTodos) {
    btnDesmarcarTodos.addEventListener('click', () => {
      checkboxesDias.forEach(checkbox => {
        checkbox.checked = false;
      });
    });
  }
  
  // Formatação do campo de preço
  const precoComplemento = document.getElementById('precoComplemento');
  if (precoComplemento) {
    precoComplemento.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = (parseInt(value) / 100).toFixed(2);
      e.target.value = value.replace('.', ',');
    });
  }
}

function setupCardComplementoAddEvents() {
  // Inicializar o Bootstrap para garantir que o accordion funcione
  const accordionElement = document.getElementById('accordionComplemento');
  if (accordionElement) {
    // Garantir que o primeiro accordion esteja aberto por padrão
    const collapseOne = document.getElementById('collapseOne');
    if (collapseOne && !collapseOne.classList.contains('show')) {
      collapseOne.classList.add('show');
    }
    
    // Garantir que os botões do accordion tenham o estado correto
    const btnCollapseOne = document.querySelector('button[data-bs-target="#collapseOne"]');
    if (btnCollapseOne) {
      btnCollapseOne.classList.remove('collapsed');
      btnCollapseOne.setAttribute('aria-expanded', 'true');
    }
  }
  
  // Botão "Voltar" no Header
  const btnVoltarHeader = document.getElementById('btnVoltarComplementoAddHeader');
  if (btnVoltarHeader) {
    btnVoltarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Header
  const btnSalvarHeader = document.getElementById('btnSalvarComplementoAddHeader');
  if (btnSalvarHeader) {
    btnSalvarHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento adicionado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFooter = document.getElementById('btnVoltarComplementoAddFooter');
  if (btnVoltarFooter) {
    btnVoltarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFooter = document.getElementById('btnSalvarComplementoAddFooter');
  if (btnSalvarFooter) {
    btnSalvarFooter.addEventListener('click', (evt) => {
      evt.preventDefault();
      alert("Complemento adicionado com sucesso (protótipo).");
      fetch('partials/cardComplementosLojas.html')
        .then(r => r.text())
        .then(html => {
          cardComplementosLojasPlaceholder.innerHTML = html;
          setupCardComplementosLojasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardComplementosLojas.html:', err));
    });
  }
  
  // Botão "Avançar" no primeiro accordion
  const btnAvancarComplemento = document.getElementById('btnAvancarComplemento');
  if (btnAvancarComplemento) {
    btnAvancarComplemento.addEventListener('click', () => {
      // Abrir o segundo accordion
      const collapseTwo = document.getElementById('collapseTwo');
      const collapseOne = document.getElementById('collapseOne');
      
      if (collapseTwo && collapseOne) {
        // Fechar o primeiro accordion
        const bsCollapseOne = new bootstrap.Collapse(collapseOne, {
          toggle: false
        });
        bsCollapseOne.hide();
        
        // Abrir o segundo accordion
        const bsCollapseTwo = new bootstrap.Collapse(collapseTwo, {
          toggle: false
        });
        bsCollapseTwo.show();
        
        // Atualizar o estado dos botões do accordion
        document.querySelector('button[data-bs-target="#collapseOne"]').classList.add('collapsed');
        document.querySelector('button[data-bs-target="#collapseOne"]').setAttribute('aria-expanded', 'false');
        
        document.querySelector('button[data-bs-target="#collapseTwo"]').classList.remove('collapsed');
        document.querySelector('button[data-bs-target="#collapseTwo"]').setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  // Configurar o comportamento do select de unidade
  const selectUnidade = document.getElementById('selectUnidade');
  const conteudoUnidade = document.getElementById('conteudoUnidade');
  const selectServico = document.getElementById('selectServico');
  const periodos = document.getElementById('periodos');
  
  if (selectUnidade && conteudoUnidade && selectServico) {
    selectUnidade.addEventListener('change', function() {
      if (selectUnidade.value) {
        conteudoUnidade.classList.remove('d-none');
        
        // Resetar o select de serviço para o estado default
        if (selectServico) {
          selectServico.selectedIndex = 0;
        }
        
        // Esconder os períodos quando a unidade muda
        if (periodos) {
          periodos.classList.add('d-none');
        }
      } else {
        conteudoUnidade.classList.add('d-none');
        
        // Esconder os períodos
        if (periodos) {
          periodos.classList.add('d-none');
        }
      }
    });
  }
  
  // Configurar o comportamento do select de serviço
  if (selectServico && periodos) {
    selectServico.addEventListener('change', function() {
      if (selectServico.value) {
        periodos.classList.remove('d-none');
      } else {
        periodos.classList.add('d-none');
      }
    });
  }
  
  // Configurar os radio buttons de cobrança
  const radioCobrarCadaDias = document.getElementById('cobrarCadaDias');
  const inputDiasCobranca = document.getElementById('diasCobranca');
  
  if (radioCobrarCadaDias && inputDiasCobranca) {
    // Atualizar o estado inicial
    inputDiasCobranca.disabled = !radioCobrarCadaDias.checked;
    
    // Adicionar event listeners para todos os radio buttons
    document.querySelectorAll('input[name="opcaoCobranca"]').forEach(radio => {
      radio.addEventListener('change', function() {
        // Habilitar ou desabilitar o campo de dias
        inputDiasCobranca.disabled = this.id !== 'cobrarCadaDias';
      });
    });
  }
  
  // Formatação do campo de preço
  const precoComplemento = document.getElementById('precoComplemento');
  if (precoComplemento) {
    precoComplemento.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = (parseInt(value) / 100).toFixed(2);
      e.target.value = value.replace('.', ',');
    });
    
    precoComplemento.addEventListener('focus', function(e) {
      if (e.target.value === '') {
        e.target.value = '0,00';
      }
    });
  }
}

function setupCardFormulariosEvents() {
  console.log('Configurando eventos do card de Formulários');
  
  // Botão para adicionar formulário de contratante
  const btnAdicionarFormularioContratante = document.getElementById('btnAdicionarFormularioContratante');
  if (btnAdicionarFormularioContratante) {
    btnAdicionarFormularioContratante.addEventListener('click', function() {
      fetch('partials/cardAdicionarFormulario.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardFormulariosPlaceholder').innerHTML = html;
          
          // Atualizar o título para Contratante
          const cardTitle = document.querySelector('.card-header h5');
          if (cardTitle) {
            cardTitle.textContent = 'Adicionar Formulário de Contratante';
          }
          
          setupCardAdicionarFormularioEvents('contratante');
        })
        .catch(err => console.error('Erro ao carregar cardAdicionarFormulario.html:', err));
    });
  }
  
  // Botão para adicionar formulário de usuário
  const btnAdicionarFormularioUsuario = document.getElementById('btnAdicionarFormularioUsuario');
  if (btnAdicionarFormularioUsuario) {
    btnAdicionarFormularioUsuario.addEventListener('click', function() {
      fetch('partials/cardAdicionarFormulario.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardFormulariosPlaceholder').innerHTML = html;
          
          // Atualizar o título para Usuário
          const cardTitle = document.querySelector('.card-header h5');
          if (cardTitle) {
            cardTitle.textContent = 'Adicionar Formulário de Usuário';
          }
          
          setupCardAdicionarFormularioEvents('usuario');
        })
        .catch(err => console.error('Erro ao carregar cardAdicionarFormulario.html:', err));
    });
  } else {
    console.log('Botão Adicionar Formulário Usuário NÃO encontrado');
  }
}

/**
 * Configura os eventos do card de Adicionar Formulário
 * @param {string} tipo - Tipo de formulário ('contratante' ou 'usuario')
 */
function setupCardAdicionarFormularioEvents(tipo) {
  console.log('Configurando eventos do card de Adicionar Formulário');
  
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
  const conteudoUnidade = document.getElementById('conteudoUnidade');
  const selectServico = document.getElementById('selectServico');
  const periodos = document.getElementById('periodos');
  
  if (selectUnidade && conteudoUnidade && selectServico) {
    selectUnidade.addEventListener('change', function() {
      if (selectUnidade.value) {
        conteudoUnidade.classList.remove('d-none');
        
        // Resetar o select de serviço para o estado default
        if (selectServico) {
          selectServico.selectedIndex = 0;
        }
        
        // Esconder os períodos quando a unidade muda
        if (periodos) {
          periodos.classList.add('d-none');
        }
      } else {
        conteudoUnidade.classList.add('d-none');
        
        // Esconder os períodos
        if (periodos) {
          periodos.classList.add('d-none');
        }
      }
    });
  }
  
  // Configurar os eventos para a seleção de serviço
  if (selectServico && periodos) {
    selectServico.addEventListener('change', function() {
      if (selectServico.value) {
        periodos.classList.remove('d-none');
      } else {
        periodos.classList.add('d-none');
      }
    });
  }
  
  // Botão "Voltar" no Footer
  const btnVoltarFormulario = document.getElementById('btnVoltarFormulario');
  if (btnVoltarFormulario) {
    btnVoltarFormulario.addEventListener('click', function() {
      // Voltar para o card de Formulários
      fetch('partials/cardFormularios.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardFormulariosPlaceholder').innerHTML = html;
          setupCardFormulariosEvents();
        })
        .catch(err => console.error('Erro ao carregar cardFormularios.html:', err));
    });
  }
  
  // Botão "Salvar" no Footer
  const btnSalvarFormulario = document.getElementById('btnSalvarFormulario');
  if (btnSalvarFormulario) {
    btnSalvarFormulario.addEventListener('click', function() {
      alert(`Formulário de ${tipo} salvo com sucesso! (protótipo)`);
      // Voltar para o card de Formulários
      fetch('partials/cardFormularios.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardFormulariosPlaceholder').innerHTML = html;
          setupCardFormulariosEvents();
        })
        .catch(err => console.error('Erro ao carregar cardFormularios.html:', err));
    });
  }
}

/**
 * Configura os eventos do card de Meios de Pagamento
 */
function setupCardMeiosPagamentoEvents() {
  console.log('Configurando eventos do card de Meios de Pagamento');
  
  // Botão PIX
  const btnPagamento01 = document.getElementById('btnPagamento01');
  if (btnPagamento01) {
    console.log('Botão PIX encontrado');
    
    btnPagamento01.addEventListener('click', function() {
      console.log('Botão PIX clicado.');
      fetch('partials/cardEditarPagamento01.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardEditarPagamento01Events();
        })
        .catch(err => console.error('Erro ao carregar cardEditarPagamento01.html:', err));
    });
  } else {
    console.log('Botão PIX NÃO encontrado');
  }
  
  // Botão Boleto
  const btnPagamento02 = document.getElementById('btnPagamento02');
  if (btnPagamento02) {
    console.log('Botão Boleto encontrado');
    
    btnPagamento02.addEventListener('click', function() {
      console.log('Botão Boleto clicado.');
      fetch('partials/cardEditarPagamento02.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardEditarPagamento02Events();
        })
        .catch(err => console.error('Erro ao carregar cardEditarPagamento02.html:', err));
    });
  } else {
    console.log('Botão Boleto NÃO encontrado');
  }
  
  // Botão Cartão de Crédito
  const btnPagamento03 = document.getElementById('btnPagamento03');
  if (btnPagamento03) {
    console.log('Botão Cartão de Crédito encontrado');
    
    btnPagamento03.addEventListener('click', function() {
      console.log('Botão Cartão de Crédito clicado.');
      fetch('partials/cardEditarPagamento03.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardEditarPagamento03Events();
        })
        .catch(err => console.error('Erro ao carregar cardEditarPagamento03.html:', err));
    });
  } else {
    console.log('Botão Cartão de Crédito NÃO encontrado');
  }
}

/**
 * Configura os eventos do card de Editar Pagamento 01 (PIX)
 */
function setupCardEditarPagamento01Events() {
  console.log('Configurando eventos do card de Editar Pagamento 01 (PIX)');
  
  // Botão Voltar
  const btnVoltar = document.getElementById('btnVoltarPagamento01');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
  
  // Botão Salvar
  const btnSalvar = document.getElementById('btnSalvarPagamento01');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', () => {
      alert('Configurações de PIX salvas com sucesso!');
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
}

/**
 * Configura os eventos do card de Editar Pagamento 02 (Boleto)
 */
function setupCardEditarPagamento02Events() {
  console.log('Configurando eventos do card de Editar Pagamento 02 (Boleto)');
  
  // Botão Voltar
  const btnVoltar = document.getElementById('btnVoltarPagamento02');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
  
  // Botão Salvar
  const btnSalvar = document.getElementById('btnSalvarPagamento02');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', () => {
      alert('Configurações de Boleto salvas com sucesso!');
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
}

/**
 * Configura os eventos do card de Editar Pagamento 03 (Cartão de Crédito)
 */
function setupCardEditarPagamento03Events() {
  console.log('Configurando eventos do card de Editar Pagamento 03 (Cartão de Crédito)');
  
  // Botão Voltar
  const btnVoltar = document.getElementById('btnVoltarPagamento03');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
  
  // Botão Salvar
  const btnSalvar = document.getElementById('btnSalvarPagamento03');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', () => {
      alert('Configurações de Cartão de Crédito salvas com sucesso!');
      // Voltar para o card de Meios de Pagamento
      fetch('partials/cardMeiosPagamento.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardMeiosPagamentoPlaceholder').innerHTML = html;
          setupCardMeiosPagamentoEvents();
        })
        .catch(err => console.error('Erro ao carregar cardMeiosPagamento.html:', err));
    });
  }
}

/**
 * Configura os eventos do card de Taxas
 */
function setupCardTaxasEvents() {
  console.log('Configurando eventos do card de Taxas');
  
  // Botão Outras taxas
  const btnOutrasTaxas = document.getElementById('btnOutrasTaxas');
  if (btnOutrasTaxas) {
    btnOutrasTaxas.addEventListener('click', () => {
      fetch('partials/cardOutrasTaxas.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardTaxasPlaceholder').innerHTML = html;
          setupCardOutrasTaxasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardOutrasTaxas.html:', err));
    });
  } else {
    console.log('Botão Outras taxas NÃO encontrado');
  }
}

/**
 * Configura os eventos do card de Outras Taxas
 */
function setupCardOutrasTaxasEvents() {
  console.log('Configurando eventos do card de Outras Taxas');
  
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
  
  // Adicionar eventos aos botões de voltar
  if (btnVoltarTaxasHeader) {
    btnVoltarTaxasHeader.addEventListener('click', () => {
      fetch('partials/cardTaxas.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardTaxasPlaceholder').innerHTML = html;
          setupCardTaxasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
    });
  }
  
  if (btnVoltarTaxasFooter) {
    btnVoltarTaxasFooter.addEventListener('click', () => {
      fetch('partials/cardTaxas.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardTaxasPlaceholder').innerHTML = html;
          setupCardTaxasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
    });
  }
  
  // Adicionar eventos aos botões de salvar
  if (btnSalvarTaxasHeader) {
    btnSalvarTaxasHeader.addEventListener('click', () => {
      alert("Taxa salva com sucesso!");
      fetch('partials/cardTaxas.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardTaxasPlaceholder').innerHTML = html;
          setupCardTaxasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
    });
  }
  
  if (btnSalvarTaxasFooter) {
    btnSalvarTaxasFooter.addEventListener('click', () => {
      alert("Taxa salva com sucesso!");
      fetch('partials/cardTaxas.html')
        .then(r => r.text())
        .then(html => {
          document.getElementById('cardTaxasPlaceholder').innerHTML = html;
          setupCardTaxasEvents();
        })
        .catch(err => console.error('Erro ao carregar cardTaxas.html:', err));
    });
  }
  
  // Adicionar evento ao botão avançar
  if (btnAvancarTaxas) {
    btnAvancarTaxas.addEventListener('click', () => {
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
  
  // Adicionar evento ao botão salvar configurações
  if (btnSalvarConfigTaxas) {
    btnSalvarConfigTaxas.addEventListener('click', () => {
      alert('Configurações adicionais salvas com sucesso!');
      // Manter na mesma tela, apenas mostrar o alerta
    });
  }
}

// Botão Adicionar Horário
const btnAdicionarHorario = document.getElementById('btnAdicionarHorario');
if (btnAdicionarHorario) {
  btnAdicionarHorario.addEventListener('click', () => {
    const tbody = document.querySelector('#tabelaHorarios tbody');
    
    // Criar nova linha
    const tr = document.createElement('tr');
    
    // Coluna "Horário Inicial"
    const tdInicial = document.createElement('td');
    const inputInicial = document.createElement('input');
    inputInicial.type = 'time';
    inputInicial.className = 'form-control';
    tdInicial.appendChild(inputInicial);
    
    // Coluna "Horário Final"
    const tdFinal = document.createElement('td');
    const inputFinal = document.createElement('input');
    inputFinal.type = 'time';
    inputFinal.className = 'form-control';
    tdFinal.appendChild(inputFinal);
    
    // Coluna "Preço"
    const tdPreco = document.createElement('td');
    const inputGroupPreco = document.createElement('div');
    inputGroupPreco.className = 'input-group';
    
    const inputGroupText = document.createElement('span');
    inputGroupText.className = 'input-group-text';
    inputGroupText.textContent = 'R$';
    
    const inputPreco = document.createElement('input');
    inputPreco.type = 'number';
    inputPreco.className = 'form-control';
    inputPreco.min = '0';
    inputPreco.step = '0.01';
    
    inputGroupPreco.appendChild(inputGroupText);
    inputGroupPreco.appendChild(inputPreco);
    tdPreco.appendChild(inputGroupPreco);
    
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
    dropdownLink.className = 'dropdown-item text-danger excluir-horario';
    dropdownLink.href = '#';
    dropdownLink.innerHTML = '<i class="bi bi-trash-fill"></i> Excluir';
    dropdownLink.addEventListener('click', function(e) {
      e.preventDefault();
      tr.remove();
    });
    
    dropdownItem.appendChild(dropdownLink);
    dropdownMenu.appendChild(dropdownItem);
    dropdownDiv.appendChild(btnDropdown);
    dropdownDiv.appendChild(dropdownMenu);
    tdAcoes.appendChild(dropdownDiv);
    
    // Adicionar colunas à linha
    tr.appendChild(tdInicial);
    tr.appendChild(tdFinal);
    tr.appendChild(tdPreco);
    tr.appendChild(tdAcoes);
    
    // Adicionar linha à tabela
    tbody.appendChild(tr);
  });
}
