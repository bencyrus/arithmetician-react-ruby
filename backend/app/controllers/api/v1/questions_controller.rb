module Api
  module V1
    # This controller handles all requests related to questions.
    class QuestionsController < ApplicationController
      # POST /api/v1/questions
      # Creates a new set of questions based on the provided parameters.
      def create
        duration = params[:duration].to_i
        addition_range = (params[:additionRange][:min].to_i..params[:additionRange][:max].to_i)
        multiplication_range = (params[:multiplicationRange][:min].to_i..params[:multiplicationRange][:max].to_i)

        question_set = QuestionService.create_set(duration, addition_range, multiplication_range)

        render json: question_set
      end
    end
  end
end
