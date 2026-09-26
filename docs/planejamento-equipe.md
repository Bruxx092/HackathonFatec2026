# Planejamento da Equipe — FatecON

Divisão de trabalho para o hackathon: **3 pessoas · 4 horas** (2 frontend + 1 backend).

## Decisões de coordenação

| Decisão | Definição |
| --- | --- |
| Fundação compartilhada | Feita antes do trabalho paralelo, por um dev (~30min) |
| Divisão das telas | Front A: Login + Home (com sino de Avisos) + Perfil + Avisos (feed e Detalhe) + Fala Fatec (chat) · Front B: Agenda |
| Contrato com o backend | Telas consomem `src/services/` com mocks tipados; o backend troca pela implementação Firebase no fim, sem tocar nas telas |
| Chat do Fala Fatec | Canais de setor + conversas 1:1, com dados simulados (tempo real é evolução) |
| Componentes compartilhados | Criados na fundação (um dono) |
| Git | Branch por pessoa + merge na `develop` a cada tela pronta |
| Backend na reta final | Estabilização: integração, bugs e apoio aos frontends |

## Quadro de tarefas

### T0 — Fundação (~30min, os três em paralelo)

| Dev | Tarefa | Arquivos |
| --- | --- | --- |
| Front A (você) | Estrutura Expo Router, tipos, componentes e services | `src/app/`, `src/types/`, `src/components/`, `src/services/` |
| Front B (colega) | Conteúdo dos mocks com dados reais da Fatec Itaquera | `src/services/mocks/*.ts` |
| Backend | Console Firebase: Auth e-mail/senha, coleções, regras base | Console + `.env` |

### T1 — Telas (paralelo, ~2h30)

| Branch | Dono | Telas | Rotas |
| --- | --- | --- | --- |
| `feat/front-entrada` | Front A | Login, Home (sino de Avisos com badge), Perfil | `(auth)/login.tsx`, `(app)/home.tsx`, `(app)/perfil.tsx` |
| `feat/front-conteudo` | Front A | Avisos (feed + filtros), Detalhe do Aviso, Fala Fatec (chat: canais + 1:1) | `(app)/avisos/`, `(app)/fala-fatec/` |
| `feat/agenda` | Front B | Agenda (lista, filtros e detalhe de evento) | `(app)/agenda/` |
| `feat/backend` | Backend | Security Rules por papel (professor → suas turmas, coordenador → seu curso) e seed | Firebase |

**Navegação:** Avisos não fica mais na barra inferior — é acessado pelo sino no topo da Home. Permanecem 4 abas: Início, Agenda, Fala Fatec e Perfil.

### T2 — Integração (~45min)

1. Trocar os mocks pelo Firebase na camada de services (assinatura preservada), na ordem: **Auth → Avisos**.
2. O chat do Fala Fatec permanece simulado nesta versão (tempo real é evolução).
3. Backend em estabilização e correção de bugs.

### T3 — Demo (~15min)

- Popular o seed com dados reais e as contas de demonstração.
- Ensaio do fluxo: login → Home (tocar no sino) → Avisos → Fala Fatec → enviar mensagem em um canal e em uma conversa 1:1.

## Regra de merge (DoD)

Tela pronta = navega com os mocks + estilos do `src/theme.ts` → merge imediato na `develop`, sem PR formal.

## Contas de demonstração (mocks)

| Papel | E-mail |
| --- | --- |
| Estudante | ana.souza@fatec.sp.gov.br |
| Professor | carlos.henrique@fatec.sp.gov.br |
| Coordenador | coordenacao.dsm@fatec.sp.gov.br |

Senha: qualquer valor com 4+ caracteres (validação mock).

## Contrato de services (não mudar assinatura)

| Serviço | Funções |
| --- | --- |
| `services/auth.ts` | `entrar(email, senha)`, `isEmailInstitucional(email)` |
| `services/avisos.ts` | `listarAvisos(filtro, contexto)`, `obterAviso(id)`, `contarNaoLidos(contexto)`, `marcarComoLido(id)`, `marcarTodosComoLidos()` |
| `services/eventos.ts` | `listarEventos()` |
| `services/conversas.ts` | `listarResumos()`, `obterConversa(id)`, `listarMensagens(conversaId)`, `enviarMensagem(conversaId, autorId, texto)`, `responderAutomatico(conversaId)`, `obterConversaComPessoa(pessoaId, usuarioId)` |
| `services/solicitacoes.ts` | `listarSolicitacoes(userId)`, `criarSolicitacao(dados)` — mantido como evolução (chamados) |
| `services/acessibilidade.tsx` | `AcessibilidadeProvider`, `useAcessibilidade()`, `filtrosDaltonismo`, `escalasTexto` |
| `services/firebase.ts` | `app`, `auth`, `db`, `storage` (configurados via `.env`) |

## Diferencial do hackathon — Acessibilidade

Filtros de daltonismo no mesmo padrão do site oficial do CPS (Acromatomia, Acromatopsia, Deuteranomalia, Deuteranopia, Protanomalia, Protanopia, Tritanomalia, Tritanopia) e três níveis de tamanho de texto, acionados por um ícone no header de todas as telas (bottom sheet) e persistidos no dispositivo. Responsável: Front A. No demo web o filtro é aplicado globalmente na raiz do app; em nativo o filtro visual fica como evolução.

## Fora de escopo

Comunidade, Oportunidades, Serviços, notificações push, OAuth Microsoft, chat em tempo real, anexos, reações, ThemeProvider com paletas próprias e filtro visual em nativo (evolução — ver documento do projeto).
