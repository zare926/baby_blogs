class Post < ApplicationRecord
  is_impressionable counter_cache: true
  belongs_to :user
  has_many :likes
  has_many :liked_users, through: :likes, source: :user
  
  mount_uploader :image, ImageUploader

  validates :title , presence: true
  validates :text , presence: true
end
