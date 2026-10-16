# Prompts

## Prompt 1 — Briefing e regras (texto original)
> Atividade da professora: "Desenvolvam uma landing page, com tema livre, para treinar e explorar os benefícios do vibecode. O foco não é só o resultado final. Quero ver como você pensou, como se comunicou com a IA e como corrigiu o caminho quando algo não saiu como esperado. [...] quero na pasta do projeto todos os registros dos prompts, as pesquisas, decisões de design, referências visuais, paleta de cores, tudo o que direcionou a resolução final da página."

Pedido: landing page inteira em HTML, CSS, React e JavaScript; código limpo, sem sobras; tema Jesus, com o Espírito Santo de Deus; animações criativas ativadas pelo scroll; ajuda com paleta de cores; aguardar as imagens de referência antes de criar.

- **Decisão de comunicação:** pedir à IA que esperasse as referências antes de gerar, para o primeiro resultado já nascer direcionado.
- **Retorno da IA:** confirmou o entendimento e aguardou.

## Prompt 2 — Referências e liberdade criativa
> Enviei 4 imagens de referência. "Pode pegar conhecimentos, frase da Bíblia para montar a Landing page. Se puder também pegue referências de uma landing page para se inspirar, saia do padrão, me impressione. Pode fazer e me mandar a pasta pronta."

- **Retorno da IA:** projeto React + Vite com 5 cenas de scroll (luz, águas, cruz, Espírito Santo, Igreja), versículos em domínio público, paleta derivada das imagens e esta pasta de registros.
- **Limite conhecido:** a IA não pôde instalar dependências nem abrir no navegador; a primeira execução (`npm install && npm run dev`) é o primeiro teste real.

## Prompt 3 em diante
_(registre aqui cada ajuste pedido: o que você viu, o que pediu, o que mudou)_

## Prompt 3 — Imagem de Jesus no hero
> "Na primeira parte onde está escrito 'Eu sou a luz do mundo' não dá pra colocar uma imagem de Jesus nessa primeira parte em algum lugar?"

- **Decisão:** usar a referência de Jesus orando (LP_Jesus.jpeg), em um arco acima do título, em vez de um fundo de tela cheia, porque a imagem é pequena e ficaria borrada ampliada.
- **Alterações:** `Hero.jsx` (figura), `styles.css` (arco, halo dourado, título menor para caber na tela), `src/assets/jesus.jpg`.

## Prompt 4 — Hero mais criativo e nova página da Bíblia
> "Quero que seja mais criativo nessa imagem da primeira parte. Está muito estática essa imagem de Jesus, faça algo melhor. Quero adicionar uma página com esta mensagem: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim' (João 14:6) [...] um livro ou Bíblia que abrisse ao passar o mouse, uma Bíblia marrom. Segue imagem de referência."

- **Correção de rota:** a imagem do hero estava parada; troquei por um portal em camadas (abre como cortinas, raios girando, halo pulsante, partículas de luz, inclinação 3D que segue o mouse e zoom no scroll).
- **Nova cena "A Palavra":** Bíblia marrom em CSS 3D, entre as Águas e a Cruz. Abre ao passar o mouse ou receber foco (teclado); em celular, abre conforme o scroll.
- **Arquivos:** `Hero.jsx`, `usePointerParallax.js`, `Bible.jsx`, `content.js`, `styles.css`.

## Prompt 5 — Hero com a imagem no fundo, Espírito Santo organizado, finale animado e responsivo
> "A primeira parte onde tem uma imagem de Jesus, altere essa parte e deixe mais criativo, esta imagem dessa forma no meio da tela não está legal, será que não dá pra introduzir ela no fundo? Diante da pasta, preciso que você deixe responsivo a qualquer tela. Também preciso que você mude um pouco a página do Espírito Santo, pois ao scrollar o mouse as informações se cruzam, e a leitura fica estranha, tente arrumar isso deixando mais organizado. A última parte do projeto está sem animação nenhuma, consegue deixar animado todas as partes? Vou te mandar mais algumas imagens de inspiração, e me ajude na criatividade. Lembrando que as imagens é para serem introduzidas de forma que você ache mais criativo e fique animado e sensacional."

Imagens enviadas junto: escada de luz entre nuvens (`LP_Jesus_6_escada-de-luz.jpg`) e silhueta orando ao pôr do sol (`LP_Jesus_7_oracao-por-do-sol.jpg`).

- **O que vi de errado:** (1) a foto de Jesus ficava pequena e "colada" no meio da tela; (2) na cena do Espírito Santo o título, a pomba, o versículo e os 9 frutos giravam todos no mesmo espaço e se cruzavam; (3) a Igreja e o rodapé só tinham a abertura das portas, depois ficavam parados; (4) o layout só tinha sido pensado para uma largura.
- **Decisões:** foto como fundo de tela cheia com luz viva por cima; Espírito Santo em duas áreas fixas (céu e texto); Igreja com a oração ao pôr do sol e entrada em sequência; fechamento novo com a escada de luz; página inteira testada em 6 tamanhos de tela.
- **Arquivos:** `Hero.jsx`, `Spirit.jsx`, `Church.jsx`, `Closing.jsx` (novo), `Footer.jsx`, `Sparks.jsx` (novo), `Letters.jsx` (novo), `ScrollBar.jsx` (novo), `useInView.js` (novo), `styles.css`, `content.js`, `src/assets/` (2 imagens novas).
- **Como foi verificado:** o `npm install` ficou bloqueado no ambiente da IA, então ela empacotou o código com esbuild e tirou capturas de tela em Chromium (360×640, 390×844, 768×1024, 844×390 deitado, 1440×810 e 1920×1080) em vários pontos do scroll. O Vite em si ainda não foi executado: o primeiro `npm run dev` é o teste final.

## Prompt 6 — Nova imagem na cena "A porta está aberta"
> "Ponha esta imagem no lugar da imagem que está na parte 'A porta está aberta'"

Imagem enviada: homem ajoelhado em um campo, de braços abertos, sob raios de sol entre nuvens escuras (`LP_Jesus_8_homem-orando-raios.jpg`).

- **Decisão:** trocar só o arquivo `src/assets/oracao.jpg` (reduzido para 1600 px, bem mais nítido que a silhueta anterior) e o texto alternativo em `Church.jsx`; layout, portas e animações ficam iguais.
- **Verificação:** capturas em 1440×810, 390×844 e 844×390: o texto continua legível sobre o lado escuro da foto e a pessoa aparece inteira no celular.

## Prompt 7 — Nova imagem no Hero ("Eu sou a luz do mundo")
> "Na primeira parte onde tem uma imagem de Jesus, substitua por essa imagem, somente isso"

Imagem enviada: Jesus de braços erguidos em campo florido, céu nublado com raios de sol, gerada no Gemini (`Gemini_Generated_Image_oj0rrkoj0rrkoj0r.jpg`, 2576×1438).

- **Decisão:** trocar apenas o arquivo `src/assets/jesus.jpg` (mantido o mesmo nome, para não alterar nenhuma linha de código de `Hero.jsx` ou `styles.css`), como já estava previsto em "Ainda para conferir" na revisão da Rodada 2.
- **Escopo:** nenhuma outra alteração feita, conforme pedido ("somente isso") — título, textos, animações e demais seções continuam exatamente como estavam.
- **Resultado:** imagem de fundo do hero bem mais nítida (2576×1438 contra 522×350 da versão anterior); mesma cena e composição, então o recorte/posicionamento em CSS não precisou de ajuste.
