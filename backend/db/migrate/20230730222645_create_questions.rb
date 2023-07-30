class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.references :game, null: false, foreign_key: true
      t.integer :num1
      t.integer :num2
      t.string :op_type
      t.integer :answer

      t.timestamps
    end
  end
end
