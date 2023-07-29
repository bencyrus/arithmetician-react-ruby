class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.integer :first_num
      t.integer :second_num
      t.string :operation_type
      t.integer :answer

      t.timestamps
    end
  end
end
