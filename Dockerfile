# 使用 Node.js 镜像作为基础镜像
FROM node:20-alpine

## 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./ 

# 安装依赖
RUN npm install

# 复制项目文件
COPY ..

# 构建项目
RUN npm run build

# 使用 nginx 作为静态资源服务器
FROM nginx:alpine

# 复制构建好的静态文件到 nginx 默认目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ['nginx', '-g', 'daemon off;']