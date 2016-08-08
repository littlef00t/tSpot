class DropFoodTable < ActiveRecord::Migration
  def change
    drop_table :food
  end
end
