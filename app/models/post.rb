class Post < ApplicationRecord
  is_impressionable counter_cache: true
  belongs_to :user
  
  mount_uploader :image, ImageUploader

  validates :title , presence: true
  validates :text , presence: true
end
