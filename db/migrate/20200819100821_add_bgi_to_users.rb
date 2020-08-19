class AddBgiToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bgi, :string, default: "背景1"
  end
end
