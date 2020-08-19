class ChangeDataBgiToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :bgi, :integer
  end
end
