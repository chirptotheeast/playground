class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :video_link
      t.boolean :youtube_video
      t.string :avatar

      t.timestamps
    end
  end
end
