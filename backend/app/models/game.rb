class Game < ApplicationRecord
  has_one :game_setting
  has_many :questions
end
