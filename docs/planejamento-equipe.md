# Planejamento da Equipe — FatecON

Divisão de trabalho para o hackathon: **3 pessoas · 4 horas** (2 frontend + 1 backend).

## Decisões de coordenação

| Decisão | Definição |
| --- | --- |
| Fundação compartilhada | Feita antes do trabalho paralelo, por um dev (~30min) |
| Divisão das telas | Front A: Login + Home + Perfil · Front B: Avisos + Detalhe + Fala Fatec · Agenda: quem terminar primeiro |
| Contrato com o backend | Telas consomem `src/services/` com mocks tipados; o backend troca pela implementação Firebase no fim, sem tocar nas telas |
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
| `feat/front-entrada` | Front A | Login, Home, Perfil | `(auth)/login.tsx`, `(app)/home.tsx`, `(app)/perfil.tsx` |
| `feat/front-conteudo` | Front B | Avisos (feed + filtros), Detalhe do Aviso, Fala Fatec | `(app)/avisos/`, `(app)/fala-fatec/` |
| `feat/backend` | Backend | Security Rules por papel (professor → suas turmas, coordenador → seu curso) e seed | Firebase |

**Agenda** (`(app)/agenda/`) fica para quem terminar as próprias telas primeiro.

### T2 — Integração (~45min)

1. Trocar os mocks pelo Firebase na camada de services (assinatura preservada), na ordem: **Auth → Avisos → Solicitações**.
2. Backend em estabilização e correção de bugs.

### T3 — Demo (~15min)

- Popular o seed com dados reais e as contas de demonstração.
- Ensaio do fluxo: login → home → avisos → fala fatec.

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
| `services/avisos.ts` | `listarAvisos(filtro, contexto)`, `obterAviso(id)` |
| `services/eventos.ts` | `listarEventos()` |
| `services/solicitacoes.ts` | `listarSolicitacoes(userId)`, `criarSolicitacao(dados)` |
| `services/firebase.ts` | `app`, `auth`, `db` (configurados via `.env`) |

## Fora de escopo

Comunidade, Oportunidades, Serviços, notificações push e OAuth Microsoft (evolução — ver documento do projeto).