class Game < ApplicationRecord
  has_one :game_setting, dependent: :destroy
  has_many :questions, dependent: :destroy
end
