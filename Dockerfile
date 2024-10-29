# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependência do projeto para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Exponha a porta usada pelo servidor (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]