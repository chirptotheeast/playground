class CreateDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :drawings do |t|
      t.text :svgdrawing

      t.timestamps
    end
  end
end
