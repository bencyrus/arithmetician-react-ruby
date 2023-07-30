module Api
  module V1
    # This controller handles all requests related to games.
    class GamesController < ApplicationController
      # POST /api/v1/games
      # Creates a new game based on the provided parameters.
      def create
        game = Game.create!(score: params[:score], end_timestamp: params[:endTimestamp])
        game.create_game_setting!(
          addition_range_start: params[:additionRange][:min],
          addition_range_end: params[:additionRange][:max],
          multiplication_range_start: params[:multiplicationRange][:min],
          multiplication_range_end: params[:multiplicationRange][:max],
          duration: params[:duration]
        )

        params[:answeredQuestions].each do |question|
          game.questions.create!(
            num1: question[:num1],
            num2: question[:num2],
            op_type: question[:opType],
            answer: question[:answer]
          )
        end

        render json: game, status: :created
      rescue ActiveRecord::Error => e
        render json: { errors: e.message }, status: :unprocessable_entity
      end

      # GET /api/v1/games
      # Returns all games.
      def index
        games = Game.all
        render json: games
      end
    end
  end
end
