class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :score
      t.datetime :end_timestamp

      t.timestamps
    end
  end
end
