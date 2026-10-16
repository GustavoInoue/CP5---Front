# Eu sou a luz do mundo — landing page (vibecode)

Jornada de scroll da escuridão à luz: Jesus, o Espírito Santo e a Igreja.
Stack: HTML, CSS, JavaScript e React (Vite).

## Rodar
```
npm install
npm run dev
```
Build de produção: `npm run build`.

## Cenas (na ordem do scroll)
Hero (Jesus ao fundo) → Águas → A Palavra (Bíblia 3D) → Cruz → Espírito Santo → Igreja (portas e horários) → Fechamento (escada de luz) → Rodapé.
Cada cena é uma seção alta com palco fixo; o scroll vira a variável CSS `--p` (0 a 1) que comanda as animações.

## Onde editar
- Versículos, fruto do Espírito e horários da igreja: `src/data/content.js`
- Cores e estilos: `src/styles.css` (variáveis no topo)
- Imagens: `src/assets/` (jesus.jpg no hero, oracao.jpg na Igreja, escada.jpg no fechamento)

## Registros da atividade
Tudo o que direcionou o resultado está em `registros/`. Comece por `registros/00-leia-me.md`.
