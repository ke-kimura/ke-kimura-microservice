# ベースイメージ
FROM golang:1.16

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY go.mod go.sum ./
RUN go mod download

# アプリケーションのコードをコピー
COPY . .

# ビルド
RUN go build -o main .

# ポート番号の設定
EXPOSE 8080

# アプリケーションの実行
CMD ["/app/main"]
