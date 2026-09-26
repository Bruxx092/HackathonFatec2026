# Identidade Visual do FatecON

Identidade derivada da marca do **Centro Paula Souza (CPS)**, com base no [Manual de Identidade Visual](https://www.cps.sp.gov.br/asscom/manuais-assessoria-de-comunicacao/) e no [Guia de Estilo Digital CPS](https://cps.sp.gov.br/guia-estilo/cores.php).

Slogan: **"Sua Fatec. Tudo conectado."**

## Paleta

Todas as cores são tokens oficiais do Guia de Estilo Digital CPS.

| Uso | Token em `src/theme.ts` | Hex |
| --- | --- | --- |
| Marca: botões, badge OFICIAL, "ON" do wordmark | `colors.brand` | #B20000 |
| Hover / pressed | `colors.brandDark` | #7E0000 |
| Links, abas, destaques institucionais | `colors.blue` | #005C6D |
| Hover de links | `colors.blueDark` | #004854 |
| Indicadores e chips (não usar em texto) | `colors.accent` | #00C1CF |
| Texto padrão | `colors.text` | #666666 |
| Texto de título | `colors.textStrong` | #000000 |
| Superfície de cards | `colors.surface` | #F8F8F8 |
| Divisores | `colors.border` | #DADADA |
| Hover de superfícies | `colors.hover` | #E6E6E6 |
| Fundo | `colors.background` | #FFFFFF |

Status (Fala Fatec): `feedback.canceled` #D32719, `feedback.inProgress` #B78718, `feedback.done` #3ACF1F, com versões `*Light` para fundos de badge.

## Tipografia

**Montserrat** (Google Fonts), instalada via `@expo-google-fonts/montserrat`.

| Uso | Peso | Token |
| --- | --- | --- |
| Corpo de texto | 400 | `typography.family.regular` |
| Subtítulos e botões | 600 | `typography.family.semibold` |
| Títulos e wordmark | 800 | `typography.family.extrabold` |

## Wordmark e ícone

- Wordmark: **FatecON** — "Fatec" em preto (#000000) e "ON" em vermelho (#B20000), Montserrat ExtraBold.
- Ícone do app e splash: "ON" ExtraBold vermelho sobre fundo branco (`assets/icon.png`, `assets/splash.png`).
- Fontes vetoriais: `assets/icon.svg`, `assets/splash.svg`, `docs/assets/banner.svg`.

## Formas e sombras

Tokens do Guia CPS: raio de borda `30px` para cards e botões, `50%` para avatares; sombras `shadows.box1` (`rgba(0,0,0,0.15)`) e `shadows.box2` (`rgba(0,0,0,0.25)`).

## Acessibilidade (contraste WCAG)

| Combinação | Contraste | Uso |
| --- | --- | --- |
| #B20000 sobre #FFFFFF | 7.26:1 | Texto/botão — AA e AAA |
| #FFFFFF sobre #B20000 | 7.26:1 | Texto sobre botão primário |
| #7E0000 sobre #FFFFFF | 11.13:1 | Texto — AAA |
| #005C6D sobre #FFFFFF | 7.63:1 | Links — AAA |
| #666666 sobre #FFFFFF | 5.74:1 | Corpo — AA |
| #D32719 sobre #FFFFFF | 5.15:1 | Status cancelado — AA |
| #00C1CF sobre #FFFFFF | 2.20:1 | Apenas elementos gráficos |
| #B78718 sobre #FFFFFF | 3.23:1 | Apenas elementos gráficos ou texto grande |
| #3ACF1F sobre #FFFFFF | 2.07:1 | Apenas elementos gráficos |

Nunca usar `azul #005C6D` e `vermelho #B20000` sobrepostos como fundo/texto sem verificar contraste.

## Capa do Google Slides

Montar um slide com:

1. Fundo branco (#FFFFFF) e uma faixa superior vermelha (#B20000), 8px.
2. Wordmark "FatecON" em Montserrat ExtraBold 60pt, centralizado — "Fatec" preto e "ON" vermelho.
3. Slogan "Sua Fatec. Tudo conectado." em Montserrat 18pt, cinza #666666.
4. Rodapé com "Hackathon Fatec 2026 · Fatec Itaquera - Prof. Miguel Reale" em Montserrat 12pt, #666666.

## Onde está no projeto

| Arquivo | Conteúdo |
| --- | --- |
| `src/theme.ts` | Tokens de cor, tipografia, raios e sombras |
| `App.tsx` | Wordmark e carregamento da Montserrat |
| `app.json` | Ícone, splash e backgroundColor |
| `assets/` | Ícone e splash (PNG + SVG fonte) |
| `docs/assets/banner.svg` | Banner do README |

## Referências oficiais

- Manual de Identidade Visual CPS — https://www.cps.sp.gov.br/asscom/manuais-assessoria-de-comunicacao/
- Guia de Estilo Digital CPS (cores, tipografia, tokens) — https://cps.sp.gov.br/guia-estilo/
