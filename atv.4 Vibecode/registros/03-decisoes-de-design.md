# Decisões de design

**Conceito:** "Luz". Uma única descida do escuro ao claro, em cinco cenas. A luz é o fio condutor porque é a imagem central de João 8:12 e aparece em todas as referências.

| Cena | Ideia | Por quê |
|---|---|---|
| Hero | Jesus em um portal em arco, com luz dourada atrás; título surge letra por letra | Único momento animado sem scroll: abre a história e dá um rosto à promessa |
| Águas | Ondas em camadas e ondas na água crescem com o scroll | Evoca Jesus sobre as águas (ref. 1) sem desenhar uma figura |
| Cruz | Sol sobe atrás da cruz, véu balança | Traduz a ref. 2 (cruz com tecido ao nascer do sol) |
| Espírito Santo | Pomba desce; nove frutos do Espírito giram ao redor | Ref. 4 + Gálatas 5:22 (nove frutos = nove itens) |
| Igreja | Duas portas se abrem revelando horários e convite | Fecha com ação: visitar |

**Tipografia:** Cormorant Garamond itálico (títulos e versículos: solene, humana) + Albert Sans (informação: limpa e legível). Os dois são bem distintos entre si.

**Layout:** conteúdo centralizado, uma ideia por tela, texto curto (menos de 80 caracteres por linha).

**Movimento:** guiado pelo scroll (variável CSS `--p` por seção) e só um efeito contínuo sutil (véu e asas). Respeita `prefers-reduced-motion`.

**Código:** componentes pequenos, um hook (`useScrollProgress`), dados separados em `content.js`, um único CSS. O scroll não re-renderiza o React.

**Imagem de Jesus no hero:** usei uma das referências enviadas (Jesus orando no campo), recortada em arco e iluminada por um halo dourado. Não desenhei o rosto em SVG porque ficaria pobre. As demais cenas sugerem a presença por luz, água e palavra. A imagem tem resolução baixa (522×350), por isso é exibida em tamanho pequeno; confirme os direitos de uso antes de publicar.

## Atualização — Prompt 4
- **Hero em camadas:** nada fica parado: a imagem abre como cortinas, raios giram, o halo pulsa, partículas sobem, o conjunto inclina com o mouse e dá zoom ao descer. Cada camada tem velocidade diferente, o que cria profundidade.
- **Bíblia (cena "A Palavra"):** posicionada entre as Águas e a Cruz porque o fundo vai do azul ao escuro, que valoriza o couro marrom e o ouro das páginas. A luz dourada sai do livro ao abrir, repetindo o conceito "luz" da página.
- **Livro em CSS puro:** capa que gira 180° na lombada; a página esquerda fica no verso da capa. Uma única variável (`--o`, 0 a 1) controla tudo e é animada com `@property`.
- **Acessibilidade e celular:** abre por foco de teclado; sem mouse, a abertura segue o scroll.
- **Texto do versículo:** na tradução enviada pelo pedido (NVI); os demais versículos são ACF. Se a professora notar a diferença, padronize em `content.js`.

## Atualização — Prompt 5
| Cena | Antes | Agora | Por quê |
|---|---|---|---|
| Hero | Jesus em arco no meio da tela | Foto em **tela cheia no fundo**: amanhece (de escuro para cor), respira em zoom lento, segue o mouse, raios de luz giram do céu, faíscas sobem. Título à direita no computador e embaixo no celular | O rosto ocupa a tela inteira e o texto ganha uma área limpa; a luz do céu da foto vira o "sol" da página |
| Espírito Santo | Tudo no mesmo palco, frutos em órbita cruzando o texto | **Duas áreas fixas**: céu (pomba desce, raios giram) e texto (título, versículo, frutos). Os 9 frutos já estão no lugar e **acendem um a um** com o scroll | Nada muda de posição, só de brilho: a leitura fica na ordem certa e nunca se sobrepõe |
| Igreja | Portas abrem sobre fundo claro estático | Portas abrem (com brilho dourado) revelando a **foto do homem ajoelhado sob os raios de sol** (antes: silhueta ao pôr do sol; trocada no Prompt 6); título, horários e botão entram um a um; botão pulsa | Ref. 7 vira o "venha como você está": gesto humano de entrega |
| Fechamento (novo) | Rodapé parado | Versículo acende palavra por palavra enquanto a **escada de luz se abre como um portal** (máscara que cresce com o scroll) | Ref. 6 fecha a jornada: do escuro à luz, "estou convosco todos os dias" |
| Rodapé | Texto simples | "Amém." surge letra por letra ao aparecer na tela e botão "Voltar à luz" | Fecha a página com uma animação e um atalho útil |
| Página toda | — | Fio de luz no topo mostra o progresso do scroll | Dá sensação de caminhada em todas as cenas |

**Escolhas técnicas**
- **Imagem pequena no fundo:** as fotos têm ~520–620 px de largura. Em vez de esconder, usei desfoque leve, degradês escuros e luz por cima, que dão um ar de "sonho" e disfarçam a ampliação. A escada usa `mix-blend-mode: screen` sobre o azul-noite, então só a luz aparece.
- **Responsivo:** unidades `dvh` (altura real em celular), `clamp()` nos textos, e dois layouts por cena: empilhado (celular e tablet em pé) e em duas colunas (telas deitadas a partir de 700 px).
- **Código limpo:** o que se repetia virou componente (`Sparks`, `Letters`) ou hook (`useInView`); o `Verse` ganhou `--from` e `--span` para ajustar quando o texto acende, sem criar outro componente. Foram removidos o retrato em arco, o brilho de baixo e a órbita de frutos.
