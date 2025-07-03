#!/bin/bash

# 部署脚本：一键部署中文学习网站到Vercel

echo "======================================"
echo "  中文学习网站自动部署脚本"
echo "======================================"

# 检查Node.js是否安装
if ! command -v node &> /dev/null
then
    echo "错误：未找到Node.js，请先安装Node.js (https://nodejs.org/)"
    exit 1
fi

# 检查npm是否安装
if ! command -v npm &> /dev/null
then
    echo "错误：未找到npm，请先安装Node.js (https://nodejs.org/)"
    exit 1
fi

# 安装依赖
echo "正在安装依赖包..."
npm install

# 构建项目
echo "正在构建项目..."
npm run build

# 检查Vercel CLI是否安装，未安装则进行安装
if ! command -v vercel &> /dev/null
then
    echo "正在安装Vercel CLI..."
    npm install -g vercel
fi

# 部署到Vercel
echo "正在部署到Vercel..."
vercel --prod

echo "======================================"
echo "  部署完成！"
echo "  请查看上方输出的URL访问您的网站"
echo "======================================"