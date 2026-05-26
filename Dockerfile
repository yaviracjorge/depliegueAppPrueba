# ==========================================
# Etapa 1: Construcción (Build)
# ==========================================
FROM node:lts-alpine AS build

# Establecemos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos de dependencias primero (esto optimiza el caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el resto del código fuente a la carpeta /app
COPY . .

# Compilamos la aplicación para web (esto genera la carpeta 'dist')
RUN npx expo export

# ==========================================
# Etapa 2: Servidor de Producción (Nginx)
# ==========================================
FROM nginx:alpine

# Copiamos los archivos estáticos generados en la Etapa 1 a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para poder acceder a la web
EXPOSE 80

# Arrancamos el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]