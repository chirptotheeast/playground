class CreateFavoriteDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_drawings do |t|
      t.integer :user_id
      t.integer :drawing_id

      t.timestamps
    end
  end
end
