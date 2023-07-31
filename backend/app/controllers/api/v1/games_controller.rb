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
        games = Game.order(end_timestamp: :desc)
        render json: games
      end

      # GET /api/v1/games/:id
      # Returns a game with the provided id, along with its settings and answered questions.
      def show
        game = Game.find(params[:id])
        render json: {
          game: game,
          settings: game.game_setting,
          answeredQuestions: game.questions
        }
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :not_found
      end

      # DELETE /api/v1/games/:id
      # Deletes a game with the provided id along with its settings and answered questions.
      def destroy
        game = Game.find(params[:id])
        game.destroy
        render json: { message: 'Game successfully deleted' }, status: :ok
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :not_found
      end
    end
  end
end
