class RemoveBgiFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :bgi, :integer
  end
end
