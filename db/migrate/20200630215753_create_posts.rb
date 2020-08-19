class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text
      t.string :image
      t.integer :user_id
      t.integer :impressions_count,default: 0
      t.timestamps
    end
  end
end
