class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  devise :validatable, password_length: 8..128

  has_many :posts ,dependent: :destroy

  validates :nickname , presence: true
  validates :email, presence: true, 
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "は@とドメインを含んだものを入力してください" }, 
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, format: { with: /\A[a-zA-Z0-9]+\z/, message: "は半角英数字で入力してください"}, length: { minimum: 8 }
end
