# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json para o contêiner
COPY package*.json ./

# Copie o arquivo .env para o contêiner
#COPY .env ./

# Instale as dependências
RUN npm install

# Copie o diretório prisma para o contêiner
COPY prisma ./prisma

# Copie o restante do código para o contêiner
COPY . .

# Gere o cliente Prisma
RUN npx prisma generate

# Exponha a porta que seu aplicativo usará
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]