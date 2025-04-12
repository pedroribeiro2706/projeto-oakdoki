# O que o arquivo dashboard.html faz?

## Sidebar (Nível 1):
“Cadastros”, “Consultas”, “Atendimento” e “Configuração das lojas”. Cada link tem `data-section="..."` para que seu JS possa identificar qual menu de nível 2 exibir.

## Navbar Principal:
Permanece fixa no layout.

## Menu de Nível 2:
```html
<div id="menuNivel2Container"></div>
```
Aqui será injetado o menu de nível 2 via fetch(). Por exemplo, quando o usuário clica em “Cadastros” no sidebar, você pode carregar 

```html
partials/menuCadastros.html
```
dentro do container:

```html
<div id="cardsContainer">
```
ou placeholders: No exemplo acima, separei “cardsContainer” em vários div específicos (um para cada card). Você poderá, via JS, dar fetch('partials/cardContas.html') e injetar no 

```html 
<div id="cardContasPlaceholder"></div>
```
, por exemplo.

## Footer: 
Continua fixo, caso você deseje.

##
# Observações Finais
- Não há nenhum card ou menu de nível 2 inline. Tudo será carregado separadamente pelos arquivos em partials/.
- Você já tem placeholders suficientes para cada card de cada submenu. Se amanhã você adicionar mais subitens no sidebar, basta criar mais placeholders.
- No seu scripts.js, você fará algo como:

```html 
fetch('partials/menuCadastros.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('menuNivel2Container').innerHTML = html;
    // E assim por diante...
  });
```

</br>
</br>

# O que o aquivo script.js faz?

## Como Funciona
Carregamos a página dashboard.html.

## O script faz:

- “Reaproveita” o código que você já tinha (sorting, tabs, overlay-cards).
- Seleciona os itens do sidebar (nível 1).
- Quando você clica, executa fetch('partials/menuXXX.html') e insere no menuNivel2Container.
- Dentro desse menu de nível 2 (por exemplo, menuCadastros.html), existem links como:

```html
<a id="menuContas">Contas</a>
```

O script chama setupMenuCadastros() (ou outro) que faz “fetch” dos cards para os placeholders correspondentes.
Placeholders: Cada card tem um div no dashboard.html com ID cardXYZPlaceholder. Assim, fetch('partials/cardContas.html') → insere o HTML no 

```html
<div id="cardContasPlaceholder"></div>.
```

> Tudo está “completo” e “pronto” para que você crie as parciais (menuCadastros.html, menuConsultas.html, cardContas.html, cardPermissoes.html, etc.) que correspondem aos “includes”.

> **Resultado:** O layout final fica “enxuto” no dashboard.html, e você gerencia cada trecho (menu e card) em seu arquivo parcial.

# Ajustes Possíveis
- Se você tem muitos menus e cards, pode adaptar.
- Se algum card tiver abas internas (como “Perfis de acesso” e “Usuários”), você pode colocar no arquivo cardPermissoes.html o HTML dessas abas, e (se necessário) outro script para gerenciá-las.
- Caso queira exibir um card por padrão (por exemplo, “Contas” no menu “Cadastros”), você pode simular um “clique” no script (como menuContas.click() após a fetch do menu).

</br>
</br>

Como funciona
Quando o usuário clicar em “Cadastros” no sidebar (Nível 1), seu scripts.js fará:

js
Copiar código
fetch('partials/menuCadastros.html')
  .then(r => r.text())
  .then(html => {
    // Joga esse 'html' dentro de #menuNivel2Container
    menuNivel2Container.innerHTML = html;
    setupMenuCadastros();
  });
O setupMenuCadastros() então pega cada link (por ex. #menuContas) e, ao clicar, faz:

js
Copiar código
fetch('partials/cardContas.html')
  .then(r => r.text())
  .then(html => {
    // insere no placeholder #cardContasPlaceholder
    cardContasPlaceholder.innerHTML = html;
  });
Ou seja, esse arquivo menuCadastros.html é apenas o menu de nível 2 “Contas”, “Permissões” e “Recebedores”. Os cards (Contas, Permissões, Recebedores) ficarão em arquivos como:

partials/cardContas.html
partials/cardPermissoes.html
partials/cardRecebedores.html

</br>
</br>

Como funciona
Quando o usuário clica em “Contas” no menuCadastros (cujo link tem id="menuContas"), o seu scripts.js chama algo como:
js
Copiar código
fetch('partials/cardContas.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('cardContasPlaceholder').innerHTML = html;
  });
O HTML acima é carregado no <div id="cardContasPlaceholder"></div> do dashboard.html.
O botão de ordenação (.sort-btn, data-column="0") disparará o script de sorting que você já unificou no seu scripts.js.
Você pode manter a mesma estrutura de classes (.quick-post-form, .card-small, .table-responsive, etc.) para preservar o estilo do seu template Bootstrap.
Observações
Se você quiser incluir botões (por exemplo, “Adicionar Conta”) dentro do cardContas.html mesmo, basta pôr no <div class="card-header">. Ou pode deixar os overlay-cards (Adicionar Conta, Criar Grupo, etc.) controlados pelos botões do dashboard.html.
Caso queira incluir novas colunas ou remover linhas da tabela, basta editar este HTML.
O form de filtro (busca da conta, ativo/inativo, itens por página) aqui está como exemplo. Se você tiver um script que realmente filtra a tabela, pode conectar via JS.
Caso você precise de abas internas ou qualquer outro layout dentro do card, basta expandir este HTML parcial.
Com isso, você terá o Card “Contas” totalmente separado, pronto para ser carregado em dashboard.html via fetch() quando o usuário clicar em “Contas”.