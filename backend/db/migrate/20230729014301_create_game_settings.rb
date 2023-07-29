class CreateGameSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :game_settings do |t|
      t.integer :addition_range_start
      t.integer :addition_range_end
      t.integer :multiplication_range_start
      t.integer :multiplication_range_end
      t.integer :duration

      t.timestamps
    end
  end
end
