class Post < ApplicationRecord
  belongs_to :user
  is_impressionable counter_cache: true
  
  mount_uploader :image, ImageUploader

  validates :title , presence: true
  validates :text , presence: true
end
