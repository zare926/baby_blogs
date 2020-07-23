class Post < ApplicationRecord
  belongs_to :user
  
  mount_uploader :image, ImageUploader

  def shot_text
    text[0, 20] + '...'
  end
end
