Projeto de Gerenciamento de Sintomas e Vírus
Este projeto é uma API desenvolvida em Node.js com Express, Prisma e MySQL para gerenciar registros de usuários, sintomas e vírus. A API permite criar, ler, atualizar e deletar registros, sendo um CRUD completo.

O projeto está configurado para ser implantado na Render e usa um banco de dados MySQL na Railway.

Tecnologias Utilizadas
Node.js
Express
Prisma ORM
MySQL
Docker (para containerização)
Railway (para o banco de dados em nuvem)
Render (para hospedagem da API)
Estrutura do Banco de Dados
O banco de dados contém três tabelas principais:

users - Armazena informações dos usuários.
virus - Armazena os vírus cadastrados.
sintomas - Armazena os sintomas disponíveis.
Configuração do Projeto
Pré-requisitos
Node.js
MySQL
Docker (opcional, caso queira usar um container)
Uma conta na Render (para hospedar a API)
Uma conta na Railway (para hospedar o banco de dados)
Variáveis de Ambiente
As variáveis de ambiente estão configuradas no arquivo .env. Certifique-se de definir as seguintes variáveis:

plaintext
Copiar código
DATABASE_URL="mysql://username:password@host:port/database"
Passos para Configuração
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Gere o cliente Prisma:

bash
Copiar código
npx prisma generate
Execute as migrações (caso necessário):

bash
Copiar código
npx prisma db push
Inicie o servidor:

bash
Copiar código
npm run dev
A API estará disponível em http://localhost:3000.

Testando a API com Thunder Client
Use o Thunder Client ou uma ferramenta como Postman para testar as rotas da API.

Rotas da API
Usuários
GET /api/users - Retorna todos os usuários.
POST /api/users - Cria um novo usuário.
Vírus
GET /api/virus - Retorna todos os vírus cadastrados.
POST /api/virus - Cadastra um novo vírus.
Sintomas
GET /api/sintomas - Retorna todos os sintomas disponíveis.
POST /api/sintomas - Cadastra um novo sintoma.
Estrutura do Dockerfile
O projeto contém um Dockerfile para criação da imagem do projeto. No Render, o arquivo .env é passado diretamente nas variáveis de ambiente da plataforma, portanto, a linha COPY .env ./ pode ser removida do Dockerfile.

Funcionalidade para o Usuário Final
Este projeto pode ser integrado com uma interface HTML e JavaScript, onde o usuário final pode selecionar os sintomas e vírus e enviar essas informações para o banco de dados. Os dados podem ser utilizados para gerar gráficos e analisar a frequência dos sintomas relatados.