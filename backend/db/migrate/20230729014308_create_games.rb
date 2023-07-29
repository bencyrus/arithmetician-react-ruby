class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.references :game_setting, null: false, foreign_key: true
      t.integer :score
      t.datetime :timestamp

      t.timestamps
    end
  end
end
