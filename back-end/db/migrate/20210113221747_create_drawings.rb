class CreateDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :drawings do |t|
      t.string :svgdrawing

      t.timestamps
    end
  end
end
