class AddIPToNodes < ActiveRecord::Migration[5.2]
  def change
    add_column :nodes, :ip, :string
  end
end
