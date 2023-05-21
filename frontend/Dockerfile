# ベースイメージ
FROM node:16

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY package*.json ./
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# ビルド
RUN npm run build

# ポート番号の設定
EXPOSE 3000

# アプリケーションの実行開発モード
CMD ["npm", "run", "dev"]
