# Arquitetura com react

/frontend
|-- /src
|   |-- /assets      // Arquivos estáticos (imagens, fontes, logos)
|   |
|   |-- /components  // **Componentes reutilizáveis em toda a aplicação** (Botão, Modal, Card, Input)
|   |   |-- Button.js
|   |   |-- Card.js
|   |   |-- Layout   // Componentes de estrutura principal
|   |       |-- Header.js
|   |       |-- Footer.js
|   |
|   |-- /pages       // **Componentes que representam uma tela completa** (Dashboard, Login, Projetos)
|   |   |-- Login.js
|   |   |-- Dashboard.js
|   |   |-- ProjectDetails.js
|   |
|   |-- /services    // Funções para comunicação com o Backend (APIs)
|   |   |-- projectService.js // Funções como fetchAllProjects(), createProject()
|   |   |-- authService.js
|   |
|   |-- /styles      // Arquivos de estilos globais (CSS ou SCSS)
|   |   |-- global.css
|   |   |-- theme.scss
|   |
|   |-- App.js       // Componente raiz que define as rotas
|   |-- index.js     // Ponto de entrada que renderiza o App.js
|
|-- package.json     // Dependências do frontend
|-- README.md

/backend
|-- /config        // Configurações do ambiente e banco de dados
|-- /controllers   // Recebe requisições HTTP e envia respostas
|-- /middlewares   // Lógica executada antes ou depois dos controllers (ex: autenticação)
|-- /models        // Representação da estrutura de dados/tabelas (opcional)
|-- /repositories  // Interação direta com o SQL Server (CRUD)
|-- /routes        // Define as URLs e as associa aos controllers
|-- /services      // Lógica de Negócio pura
|-- /utils         // Funções auxiliares (logs, formatação)
|-- app.js         // Ponto de entrada do servidor
|-- package.json








git checkout main
git push origin main
# Se você realmente precisar levar o que foi feito em 'main' para 'homologacao'
git checkout homologacao
git merge main
git push origin homologacao

git add .
git commit -m "Salvando trabalho pendente antes da reestruturação"
git push origin homologacao

# Puxe as últimas alterações da branch main do GitHub: Este é o passo crucial. Ele trará todas as atualizações que você enviou de casa.
git pull origin main