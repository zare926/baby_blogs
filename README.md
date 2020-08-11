# Baby_BLOGs
小さい子供にフォーカスしたブログ

## Description
シンプルな赤ちゃんの成長日記


## Features
  - capistranoによるAWS EC2への自動デプロイ
  - AWS S3への画像アップロード
  - フロントエンドの部分をおしゃれに
  - 記事へのアクセス数をカウントしランキング表示

## Contributors
  - https://github.com/zare926

## URL：http://18.182.117.12/


## テストアカウント
- メール：hogehoge@gmail.com
- パスワード：hogehoge

## 制作背景
・子供用のブログを作って欲しいと頼まれて、経験上誰かに作ってと言われたものを作ってみたかった。
・Railsで1つアプリを作ったので、次に何か新しい技術を取り入れようと思ったが、まだ不完全と感じたため、初心に戻るため
・前作のアプリはフロントが雑だったので、フロントに力を入れてみたかった。
・あまり記録を残さない家庭なので、作ることで子供の思い出を残せると思った。

## GIF
https://gyazo.com/f1d54e32add553690fb5ad5644e4d96d

## 実装予定
  - フォロー機能
  - 独自ドメイン
  - favicon設定
  - SNS連携
  - 通常のブログ機能

## 工夫したポイント
淡い感じで、おしゃれな雰囲気を出した。

## 使用技術
  - 言語・フレームワーク等：HTML(Haml)/CSS(scss)/Ruby/Ruby on Rails/JavaScript/jQuery/MySQL/Github/AWS/Visual Studio Code
  - タスク管理：Trello

## DB設計

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|icon|text|
|email|string|null: false|

#### association
  - has_many :items

### postsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|text|null: false|
|user_id|integer|null: false|
|impressions_count|integer|

#### association
  - belongs_to :user

### impressionsテーブル
|Column|Type|Options|
|------|----|-------|
|impressionable_type|string|
|impressionable_id|integer|
|user_id|integer|
|controller_name|string|
|action_name|string|
|view_name|string|
|request_hash|string|
|ip_address|string|
|session_hash|string|
|message|text|
|referrer|text|
|params|text|


