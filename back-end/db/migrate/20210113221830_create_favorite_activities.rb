class CreateFavoriteActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_activities do |t|
      t.integer :user_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
