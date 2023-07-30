class GameSetting < ApplicationRecord
  belongs_to :game
  validates :addition_range_start, :addition_range_end, :multiplication_range_start, :multiplication_range_end,
            :duration, presence: true
end
