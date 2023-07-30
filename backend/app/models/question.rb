class Question < ApplicationRecord
  belongs_to :game
  validates :num1, :num2, :op_type, :answer, presence: true
end
