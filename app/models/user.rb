class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  devise :validatable, password_length: 8..128

  has_many :posts ,dependent: :destroy

  mount_uploader :icon, IconImageUploader

  validates :nickname , presence: true
  validates :email, presence: true, 
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "は@とドメインを含んだものを入力してください" }, 
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, format: { with: /\A[a-zA-Z0-9]+\z/, message: "は半角英数字で入力してください"}, length: { minimum: 8 }, on: :create
  validates :bgi , presence: true
  validates :introduction , length: { maximum: 350 }
end
