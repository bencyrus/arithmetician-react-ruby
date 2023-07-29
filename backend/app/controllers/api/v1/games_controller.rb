module Api
  module V1
    class GamesController < ApplicationController
      def create
        # Add your create logic here
      end

      def index
        render json: { message: 'Hello game' }
      end

      def destroy
        # Add your delete logic here
      end
    end
  end
end