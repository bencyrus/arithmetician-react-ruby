module Api
  module V1
    class QuestionsController < ApplicationController
      def create
        duration = params[:duration].to_i
        addition_range = (params[:additionRange][:min].to_i..params[:additionRange][:max].to_i)
        multiplication_range = (params[:multiplicationRange][:min].to_i..params[:multiplicationRange][:max].to_i)

        question_set = []
        (duration * 2).times do
          op_type = random_operation
          if ['+', '-'].include?(op_type)
            num1, num2 = random_numbers(addition_range)
          else
            num1, num2 = random_numbers(multiplication_range)
          end

          case op_type
          when '+'
            answer = num1 + num2
          when '-'
            answer = num1 - num2
          when '*'
            answer = num1 * num2
          when '/'
            # Ensure no division by zero.
            num2 = num2.zero? ? 1 : num2
            answer = num1 / num2
          end

          question_set << { num1: num1, num2: num2, opType: op_type, answer: answer }
        end

        render json: question_set
      end

      private

      def random_operation
        ['+', '-', '*', '/'].sample
      end

      def random_numbers(range)
        [range.to_a.sample, range.to_a.sample]
      end
    end
  end
end
