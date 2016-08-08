class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.boolean :vegetarian, null: false
      t.boolean :vegan, null: false
      t.boolean :gf, null: false
      t.text :description
      t.text :hours, null: false

      t.timestamps null: false
    end
  end
end
