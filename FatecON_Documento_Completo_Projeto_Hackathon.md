# FatecON

**Sua Fatec. Tudo conectado.**

FatecON

Sua Fatec. Tudo conectado.

Documento Completo do Projeto para Hackathon

Aplicativo mobile para melhorar a comunicação do estudante dentro da Fatec

Tecnologia principal: React Native + Expo + TypeScript

Versão inicial — Setembro de 2026

# 1. Visão Geral do Projeto

O FatecON é uma proposta de aplicativo mobile voltado à centralização e melhoria da comunicação acadêmica entre estudantes e a Fatec. O projeto parte do problema de que informações importantes podem ficar espalhadas entre diferentes canais, como e-mail, grupos de mensagens, sistemas acadêmicos, avisos presenciais e comunicação informal entre alunos, professores, coordenações e setores administrativos.

| PROPOSTA CENTRAL: reunir avisos, agenda acadêmica, comunicação com setores, comunidade estudantil e oportunidades em um único ambiente mobile, organizado e personalizado para o aluno. |
| --- |

## 1.1 Tema do Hackathon

Como a tecnologia pode melhorar a comunicação do estudante dentro da Fatec?

## 1.2 Nome do projeto

Nome-base: FatecON. A ideia do nome associa a Fatec ao conceito de estar conectado, informado e “online”. O nome pode ser alterado pela equipe sem afetar a proposta funcional descrita neste documento.

Nome: FatecON

Slogan: “Sua Fatec. Tudo conectado.”

Categoria: Educação / Comunicação Acadêmica / Campus Digital

Plataforma inicial: Aplicativo mobile

## 1.3 Objetivo geral

Desenvolver uma solução mobile que torne a comunicação acadêmica mais simples, centralizada, direcionada e acessível, reduzindo a chance de o estudante perder informações relevantes e criando um canal claro de comunicação de mão dupla com a instituição.

# 2. Problema que o Projeto Busca Resolver

O estudante pode receber informações por diferentes meios ao longo do semestre. Quando os canais não estão centralizados, o aluno precisa verificar várias fontes para saber se existe algum aviso, prazo, evento, alteração de sala, oportunidade ou resposta de um setor.

## 2.1 Principais dores identificadas

Informações acadêmicas dispersas em diferentes canais.

Avisos importantes podem se perder entre muitas mensagens.

Dificuldade para distinguir comunicações oficiais de informações repassadas informalmente.

Falta de uma visão única de eventos, entregas, provas e datas relevantes.

Dificuldade para saber qual setor procurar para uma dúvida ou solicitação.

Pouca visibilidade sobre o andamento de solicitações feitas pelo estudante.

Oportunidades de estágio, cursos, palestras e hackathons podem não chegar a todos os alunos interessados.

Dúvidas recorrentes são respondidas repetidamente, sem uma base organizada e pesquisável.

## 2.2 Cenário resumido

| Situação atual | Consequência |
| --- | --- |
| Avisos em vários canais | O aluno precisa procurar a informação em mais de um lugar. |
| Mensagens misturadas | Comunicados importantes podem ser ignorados ou esquecidos. |
| Informação informal | Pode haver dúvida sobre qual informação é oficial. |
| Solicitações sem acompanhamento | O estudante não sabe facilmente se o pedido foi recebido ou resolvido. |
| Eventos e oportunidades espalhados | Parte dos alunos pode descobrir tarde demais. |

## 2.3 Pergunta que orienta a solução

| Como criar um único ponto de comunicação que permita ao estudante receber, encontrar e acompanhar informações relevantes da Fatec de forma rápida e organizada? |
| --- |

# 3. Proposta de Solução

O FatecON funcionará como um hub de comunicação acadêmica. Depois de entrar no aplicativo, o aluno terá uma experiência personalizada de acordo com seus dados acadêmicos, como curso, semestre, turno e unidade. A Home reunirá as informações mais importantes e dará acesso aos módulos do sistema.

## 3.1 Pilares da solução

| Pilar | Objetivo | Exemplos |
| --- | --- | --- |
| Informar | Entregar informações relevantes de forma organizada. | Avisos, agenda, notificações e oportunidades. |
| Conectar | Facilitar a troca de informações entre estudantes. | Comunidade, dúvidas e respostas. |
| Ouvir | Criar comunicação de mão dupla com a instituição. | Fala Fatec, protocolo e acompanhamento. |
| Orientar | Ajudar o aluno a encontrar serviços e setores. | Serviços, contatos e perguntas frequentes. |

## 3.2 Público-alvo

Estudantes da Fatec.

Professores, que publicam avisos para as turmas vinculadas a eles.

Coordenações de curso, que publicam avisos oficiais para o seu curso.

Secretaria e setores administrativos.

## 3.3 Benefícios esperados

Reduzir a fragmentação da comunicação.

Facilitar o acesso a informações relevantes.

Aumentar a visibilidade de comunicados e prazos.

Permitir acompanhamento de solicitações.

Melhorar a comunicação entre alunos e setores.

Criar um histórico pesquisável de informações.

Apoiar a integração e participação da comunidade acadêmica.

## 3.4 Papéis e permissões

O FatecON define identidades com escopos de publicação distintos, garantindo que cada comunicado oficial venha da fonte correta e alcance apenas o público-alvo adequado.

| Papel | Pode publicar | Escopo de publicação |
| --- | --- | --- |
| Estudante | Publicações da comunidade | Comunidade estudantil |
| Professor | Avisos | Apenas as turmas vinculadas a ele (ex.: DSM 3º semestre — Manhã) |
| Coordenador de curso | Avisos oficiais | Apenas o seu curso (ex.: o coordenador de DSM publica somente para DSM) |
| Direção / setores administrativos (evolução) | Avisos institucionais | Toda a unidade |

Regras de leitura do feed:

O estudante recebe avisos oficiais do seu curso (coordenação), avisos das turmas em que está matriculado (professores) e publicações da comunidade.

Uma turma é identificada por curso + semestre + turno.

O aplicativo valida o papel e o escopo no momento da publicação, e o Firebase aplica as mesmas regras no banco por meio de Security Rules.

# 4. Funcionalidades do Aplicativo

| Módulo | Descrição |
| --- | --- |
| Autenticação e perfil acadêmico | Login do estudante e identificação de curso, semestre, turno e unidade para personalização do conteúdo. |
| Home personalizada | Resumo com avisos importantes, próximos eventos, atalhos e oportunidades. |
| Avisos | Feed de comunicados com filtros por categoria, curso, turma e relevância. Publicação com escopo conforme o papel: professor publica apenas para suas turmas vinculadas; coordenador publica avisos oficiais apenas para o seu curso. |
| Agenda acadêmica | Visualização de provas, entregas, eventos, palestras e outras datas importantes. |
| Comunidade | Espaço de perguntas, publicações e respostas entre estudantes, com possibilidade de resposta oficial verificada. |
| Fala Fatec | Canal de dúvidas, sugestões, problemas e solicitações com protocolo e acompanhamento de status. |
| Oportunidades | Divulgação de estágios, cursos, certificações, eventos e hackathons. |
| Serviços Fatec | Informações sobre secretaria, biblioteca, coordenação, laboratórios e outros setores. |
| Notificações | Alertas sobre novos avisos, mudanças relevantes, eventos e atualizações em solicitações. |
| Assistente virtual — evolução | Consulta rápida de informações cadastradas pela instituição, sem substituir os canais oficiais. |

## 4.1 Prioridade para o MVP do Hackathon

Para manter o escopo executável, o MVP deve priorizar a experiência principal e demonstrar claramente o problema resolvido.

| Prioridade | Funcionalidade | MVP |
| --- | --- | --- |
| 1 | Login / perfil básico | Sim |
| 2 | Home personalizada | Sim |
| 3 | Avisos | Sim |
| 4 | Agenda | Sim |
| 5 | Fala Fatec | Sim |
| 6 | Comunidade | Se houver tempo |
| 7 | Oportunidades | Se houver tempo |
| 8 | Serviços | Se houver tempo |
| 9 | Assistente com IA | Evolução futura |

# 5. Fluxo de Telas

Splash → Login → Home → Avisos / Agenda / Comunidade / Fala Fatec / Perfil

## 5.1 Splash

Logo FatecON.

Slogan do projeto.

Verificação de sessão do usuário.

## 5.2 Login

E-mail institucional da Fatec (conta Microsoft, domínio @fatec.sp.gov.br).

Senha.

Botão Entrar.

Validação do domínio institucional no cadastro.

Opção visual de recuperação de senha.

Evolução futura: botão “Entrar com conta Microsoft” (OAuth Microsoft via Firebase Auth).

## 5.3 Home

Saudação e nome do estudante.

Curso e semestre.

Indicador de notificações.

Avisos importantes.

Próximos eventos.

Atalhos para Fala Fatec, Comunidade, Oportunidades e Serviços.

Cards resumidos com conteúdo recente.

## 5.4 Avisos e Detalhe do Aviso

Filtros: Todos, Meu Curso, Minha Turma e Institucional.

Publicação conforme o papel: professor publica apenas para suas turmas vinculadas; coordenador publica avisos oficiais apenas para o seu curso.

Título, resumo, autor/setor e data.

Indicador de prioridade: urgente, importante ou informativo.

Tela de detalhe com conteúdo completo e público-alvo.

Ação para adicionar lembrete, quando aplicável.

## 5.5 Agenda e Detalhe do Evento

Lista de datas e eventos.

Filtros por provas, eventos e entregas.

Data, horário, local e descrição.

Ação para criar lembrete ou demonstrar interesse.

## 5.6 Comunidade

Feed de publicações.

Categorias como dúvida, curso e evento.

Criação de nova publicação.

Comentários e respostas.

Possibilidade de marcar resposta oficial/verificada.

## 5.7 Fala Fatec

Categorias: dúvida, sugestão, problema, infraestrutura, biblioteca, secretaria etc.

Formulário de nova solicitação.

Título, descrição, categoria e setor.

Anexo de imagem como evolução opcional.

Geração de protocolo.

Linha do tempo: Enviado → Recebido → Em análise → Resolvido.

Resposta do setor responsável.

## 5.8 Perfil

Nome e e-mail.

Curso, semestre, turno e unidade.

Minhas solicitações.

Preferências de notificações.

Configurações e logout.

# 6. Stack Tecnológica

A stack foi pensada para permitir desenvolvimento rápido durante o Hackathon, boa experiência mobile e possibilidade de evolução após o evento.

| Camada | Tecnologia | Função |
| --- | --- | --- |
| Mobile | React Native | Construção do aplicativo para Android e iOS com base de código compartilhada. |
| Linguagem | TypeScript | Tipagem estática e maior segurança durante o desenvolvimento. |
| Framework/Tooling | Expo | Facilita execução, build, testes em dispositivo e desenvolvimento do MVP. |
| Navegação | Expo Router | Navegação baseada em arquivos e organização das rotas. |
| Estilização | NativeWind ou StyleSheet | Construção visual e responsividade dos componentes. |
| Backend/BaaS | Firebase | Autenticação (e-mail/senha com validação do domínio institucional), banco e regras de acesso com configuração rápida. |
| Banco de dados | Cloud Firestore | Persistência de usuários, avisos, eventos, posts e solicitações. |
| Estado remoto | TanStack Query (opcional) | Cache, loading, refetch e sincronização de dados de API. |
| Formulários | React Hook Form (opcional) | Gerenciamento de formulários. |
| Validação | Zod (opcional) | Validação de dados no frontend. |
| Versionamento | Git + GitHub | Colaboração, branches, commits e histórico do projeto. |
| Infraestrutura local | Docker + Docker Compose | Ambiente padronizado para a equipe rodar o projeto sem instalar dependências localmente. |
| Design | Figma | Protótipos, fluxo visual e padronização da interface. |

## 6.1 Stack recomendada para o MVP

| React Native + TypeScript + Expo + Expo Router + StyleSheet/NativeWind + Firebase (Auth + Firestore) + GitHub + Docker |
| --- |

## 6.2 Por que React Native?

Permite desenvolver uma única aplicação para Android e iOS.

Possui ecossistema amplo e boa integração com Expo.

Permite prototipação rápida para Hackathons.

Facilita reaproveitamento de componentes.

É adequado para uma experiência mobile centrada no estudante.

## 6.3 Por que Firebase no Hackathon?

Reduz o tempo necessário para criar autenticação e banco do zero.

Oferece o Cloud Firestore gerenciado, com sincronização em tempo real.

Permite integração direta com o aplicativo por meio do SDK oficial.

Oferece Security Rules para aplicar os papéis e escopos de publicação no banco, e não apenas na interface.

É suficiente para um MVP demonstrável.

Pode ser substituído futuramente por uma API própria se o projeto crescer.

## 6.4 Identidade visual

A identidade do FatecON deriva da marca do Centro Paula Souza (CPS), usando os tokens oficiais do Guia de Estilo Digital CPS.

Paleta principal: vermelho institucional #B20000 (marca, botões e badge OFICIAL), azul #005C6D (links e destaques), cinza #666666 (texto), superfícies #F8F8F8 e fundo #FFFFFF. Status do Fala Fatec usam as cores de feedback do guia (#D32719, #B78718, #3ACF1F).

Tipografia: Montserrat (400 para corpo, 600 para subtítulos e botões, 800 para títulos e wordmark).

Wordmark: FatecON, com "Fatec" em preto e "ON" em vermelho. O ícone do app e a splash usam o "ON" em vermelho sobre fundo branco.

O detalhamento (paleta completa, contrastes WCAG, formas e aplicação no código) está em docs/identidade-visual.md.

# 7. Arquitetura Inicial

| Aplicativo React Native → Serviços/API → Firebase (Auth + Cloud Firestore) |
| --- |

O aplicativo será responsável pela interface e interação do usuário. A camada de serviços realizará as operações de consulta e alteração dos dados. No MVP, o Firebase poderá fornecer autenticação (Firebase Auth), persistência (Cloud Firestore) e regras de acesso (Security Rules). A separação entre UI, regras e acesso a dados evita que as telas fiquem responsáveis por toda a lógica.

## 7.1 Estrutura de pastas sugerida

src/ ├── app/ │ ├── (auth)/ │ │ └── login.tsx │ └── (app)/ │ ├── home.tsx │ ├── avisos/ │ ├── agenda/ │ ├── comunidade/ │ ├── fala-fatec/ │ └── perfil.tsx ├── components/ ├── features/ ├── services/ ├── hooks/ ├── types/ └── constants/

## 7.2 Entidades principais

| Entidade | Campos principais |
| --- | --- |
| User | id, nome, email, curso, semestre, turno, unidade, tipoUsuario (estudante, professor ou coordenador), turmas (professor), cursoCoordenado (coordenador) |
| Turma | id, curso, semestre, turno |
| Aviso | id, titulo, mensagem, categoria, prioridade, curso, semestre, turma, autor, dataPublicacao |
| Evento | id, titulo, descricao, categoria, data, horario, local, publicoAlvo |
| Post | id, userId, titulo, conteudo, categoria, dataCriacao |
| Resposta | id, postId, userId, conteudo, oficial, dataCriacao |
| Solicitacao | id, userId, categoria, setor, titulo, descricao, status, protocolo, dataCriacao |
| AtualizacaoSolicitacao | id, solicitacaoId, status, mensagem, data |
| Oportunidade | id, titulo, tipo, descricao, link, prazo, dataPublicacao |

# 8. Requisitos do Sistema

## 8.1 Requisitos funcionais

RF01 — O sistema deve permitir que o estudante realize login.

RF02 — O sistema deve identificar os dados acadêmicos do estudante.

RF03 — O sistema deve exibir uma Home com informações personalizadas.

RF04 — O sistema deve listar avisos e permitir filtragem.

RF05 — O sistema deve permitir abrir o detalhe de um aviso.

RF06 — O sistema deve listar eventos e datas acadêmicas.

RF07 — O sistema deve permitir criar e acompanhar uma solicitação no Fala Fatec.

RF08 — O sistema deve exibir o status da solicitação.

RF09 — O sistema poderá permitir publicações e respostas na comunidade.

RF10 — O sistema poderá exibir oportunidades acadêmicas e profissionais.

RF11 — O sistema deve permitir logout.

RF12 — O sistema deve permitir que o professor publique avisos apenas para as turmas vinculadas a ele.

RF13 — O sistema deve permitir que o coordenador publique avisos oficiais apenas para o seu curso.

RF14 — O sistema deve exibir no feed apenas os avisos direcionados ao perfil acadêmico do estudante.

## 8.2 Requisitos não funcionais

RNF01 — A interface deve ser simples e responsiva.

RNF02 — O aplicativo deve apresentar feedback de carregamento, sucesso e erro.

RNF03 — O sistema deve proteger rotas que exigem autenticação.

RNF04 — O código deve utilizar TypeScript.

RNF05 — A navegação deve ser clara e consistente.

RNF06 — Informações sensíveis não devem ser expostas diretamente no cliente.

RNF07 — O design deve seguir contraste e legibilidade adequados.

# 9. Jornada Principal do Usuário

O estudante abre o FatecON.

Realiza login com sua conta.

O aplicativo identifica seu perfil acadêmico.

A Home exibe avisos, próximos eventos e atalhos.

O aluno consulta um aviso direcionado ao seu curso.

Em seguida, verifica a agenda acadêmica.

Caso tenha uma dúvida ou problema, acessa o Fala Fatec.

Cria uma solicitação e recebe um protocolo.

Posteriormente, acompanha a mudança de status até a resolução.

## 9.1 Exemplo de caso de uso

| Um aluno descobre pela Home que uma aula mudou de sala. Ele abre o aviso, confirma o novo local e cria um lembrete. No mesmo aplicativo, verifica um evento da semana e acompanha uma solicitação enviada à infraestrutura. |
| --- |

# 10. Diferenciais da Proposta

Centralização: O projeto não depende de o aluno acompanhar vários canais para encontrar as informações principais.

Personalização: Os conteúdos podem ser direcionados por curso, semestre, turma, turno ou unidade.

Comunicação de mão dupla: Além de receber informações, o estudante pode enviar solicitações e acompanhar respostas.

Informação oficial identificada: Respostas ou comunicados oficiais podem ser visualmente diferenciados.

Histórico: Avisos, eventos e solicitações permanecem organizados e consultáveis.

Escalabilidade: A proposta pode começar como MVP e crescer para outras unidades ou instituições.

Experiência mobile: O estudante pode consultar rapidamente as informações pelo celular.

## 10.1 Uso de inteligência artificial como evolução

Uma evolução futura pode incluir um assistente que responda dúvidas usando somente uma base institucional validada, como horários de setores, procedimentos e perguntas frequentes. A IA deve ser apresentada como ferramenta complementar de busca e orientação, mantendo as fontes oficiais como referência.

# 11. Escopo do Hackathon e Roadmap

## 11.1 MVP recomendado

Splash e Login.

Home personalizada.

Lista e detalhe de avisos.

Agenda em formato de lista.

Fala Fatec com criação e acompanhamento de solicitação.

Perfil e logout.

Dados reais de demonstração ou seed no Firestore, incluindo as turmas dos cursos da Fatec Itaquera e contas de professor e coordenador.

## 11.2 Evolução após o MVP

| Fase | Evolução |
| --- | --- |
| Fase 2 | Comunidade completa com respostas e moderação. |
| Fase 2 | Notificações push. |
| Fase 2 | Oportunidades e serviços institucionais. |
| Fase 3 | Integrações com sistemas oficiais, quando autorizadas. |
| Fase 3 | Painel web administrativo para publicação de conteúdo. |
| Fase 3 | Assistente inteligente baseado em conteúdo institucional. |
| Fase 4 | Expansão para outras unidades e métricas de comunicação. |

## 11.3 O que não é necessário no primeiro protótipo

Integração real com todos os sistemas da Fatec.

Chat em tempo real completo.

Calendário extremamente complexo.

IA generativa como requisito central.

Painel administrativo completo.

Sistema de permissões com muitos níveis.

Implementação de todas as funcionalidades imaginadas.

# 12. Proposta de Apresentação no Hackathon

## 12.1 Estrutura do pitch

| Etapa | Mensagem |
| --- | --- |
| 1. Problema | O estudante recebe informações por diferentes canais e pode perder comunicados importantes. |
| 2. Impacto | Isso gera dificuldade para acompanhar avisos, prazos, eventos e respostas. |
| 3. Solução | O FatecON centraliza a comunicação acadêmica em uma experiência mobile. |
| 4. Demonstração | Mostrar Home, Avisos, Agenda e Fala Fatec. |
| 5. Diferencial | Personalização por perfil acadêmico e comunicação de mão dupla. |
| 6. Futuro | Comunidade, oportunidades, integrações e assistente institucional. |

## 12.2 Texto-resumo da proposta

| O FatecON é um aplicativo mobile criado para reduzir a fragmentação da comunicação acadêmica. A solução reúne avisos, agenda, solicitações e outros conteúdos relevantes em um único ambiente personalizado para o estudante. Com isso, o aluno encontra informações mais rapidamente e também ganha um canal claro para se comunicar com a instituição e acompanhar suas solicitações. |
| --- |

## 12.3 Problema → solução

| Antes | Com o FatecON |
| --- | --- |
| Informações espalhadas | Informações centralizadas. |
| Avisos misturados com outras mensagens | Feed acadêmico organizado. |
| Dificuldade para saber o que é relevante | Conteúdo direcionado ao perfil do aluno. |
| Solicitações sem visibilidade | Protocolo e acompanhamento de status. |
| Eventos pouco visíveis | Agenda acadêmica centralizada. |

# 13. Organização do Desenvolvimento

## 13.1 Divisão possível da equipe

| Frente | Responsabilidades |
| --- | --- |
| UX/UI | Fluxos, protótipo no Figma, componentes e identidade visual. |
| Frontend Mobile | Telas, navegação, estados de loading/erro e integração com serviços. |
| Backend / Firebase | Auth, Cloud Firestore, Security Rules e dados de demonstração. |
| Produto / Pitch | Problema, validação da proposta, roteiro, apresentação e demonstração. |
| QA / Integração | Testes do fluxo principal, revisão visual e correção de bugs. |

## 13.2 Estratégia de Git

Branch principal estável.

Branches por funcionalidade ou tela.

Commits pequenos e descritivos.

Pull Requests quando houver mais de um integrante trabalhando no código.

Evitar alterações grandes de última hora antes da apresentação.

# 14. Critérios de Sucesso do MVP

O usuário consegue entrar no aplicativo e chegar à Home.

A Home apresenta informações relevantes sem exigir navegação complexa.

O usuário consegue consultar um aviso completo.

O usuário consegue visualizar os próximos eventos.

O usuário consegue criar uma solicitação no Fala Fatec.

O usuário consegue acompanhar o status da solicitação.

O fluxo é demonstrável em poucos minutos sem depender de explicações extensas.

A interface é consistente e legível em um dispositivo mobile.

O projeto comunica claramente qual problema está resolvendo.

## 14.1 Métricas possíveis em uma versão real

Taxa de abertura de avisos.

Quantidade de alunos ativos no aplicativo.

Tempo médio para resposta de solicitações.

Número de solicitações resolvidas.

Visualizações de eventos e oportunidades.

Redução de dúvidas repetidas em canais informais.

# 15. Conclusão

O FatecON propõe resolver um problema simples de entender e presente no cotidiano acadêmico: a dificuldade de acompanhar informações quando a comunicação está distribuída entre diferentes canais. O aplicativo transforma essa comunicação em uma experiência centralizada, organizada e direcionada ao estudante.

Para o Hackathon, o maior valor está em demonstrar um fluxo funcional e coerente, e não em implementar todas as funcionalidades possíveis. Um MVP com Home, Avisos, Agenda e Fala Fatec já demonstra a proposta de valor de forma clara e permite apresentar uma visão concreta de evolução futura.

| Resumo: um único aplicativo para informar, conectar, ouvir e orientar o estudante dentro da Fatec. |
| --- |

## 15.1 Definição final do MVP

| Item | Definição |
| --- | --- |
| Nome | FatecON |
| Tema | Tecnologia aplicada à melhoria da comunicação do estudante dentro da Fatec. |
| Problema | Comunicação acadêmica fragmentada e dificuldade para acompanhar informações relevantes. |
| Solução | Hub mobile centralizado e personalizado de comunicação acadêmica. |
| Tecnologia | React Native + TypeScript + Expo + Expo Router + Firebase (Auth + Firestore). |
| Telas essenciais | Login, Home, Avisos, Agenda, Fala Fatec e Perfil. |
| Diferencial | Comunicação de mão dupla e conteúdo direcionado ao perfil acadêmico. |
| Login | E-mail institucional Microsoft (@fatec.sp.gov.br) com senha; OAuth Microsoft como evolução. |
| Evolução | Comunidade, oportunidades, notificações, integrações e assistente institucional. |

# 16. Anexo — Cursos da Fatec Itaquera - Prof. Miguel Reale

Lista oficial de cursos da unidade (código f257), utilizada como base para os dados de demonstração (seed) e para a vinculação de turmas, professores e coordenações.

| Curso | Turnos |
| --- | --- |
| Desenvolvimento de Software Multiplataforma (DSM) | Tarde |
| Automação Industrial | Tarde / Noite |
| Engenharia Mecânica | Noite |
| Fabricação Mecânica | Noite |
| Manutenção Industrial | Manhã |
| Mecânica — Processos de Soldagem | Manhã |
| Refrigeração, Ventilação e Ar Condicionado | Manhã / Noite |

Fonte: vestibular.fatec.sp.gov.br — Unidades e Cursos, Fatec Itaquera - Prof. Miguel Reale.
