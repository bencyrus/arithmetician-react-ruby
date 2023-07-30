# This module provides services related to generating a set of math questions.
module QuestionService
  extend self

  # Public method to create a set of math questions
  #
  # @param duration [Integer] The duration in minutes for which questions are created.
  # @param addition_range [Range] The range of numbers for addition and subtraction questions.
  # @param multiplication_range [Range] The range of numbers for multiplication and division questions.
  #
  # @return [Array] The array of generated questions.
  def create_set(duration, addition_range, multiplication_range)
    question_set = []

    # Generate questions equal to twice the duration (e.g., for a 10-seconds duration, generate 20 questions).
    (duration * 2).times do
      op_type = random_operation

      # Depending on the operation type, we choose either the addition_range or the multiplication_range.
      range = ['+', '-'].include?(op_type) ? addition_range : multiplication_range
      num1, num2 = random_number_pair(range)

      # For subtraction and division, we normalize the numbers to ensure positive subtraction and clean division.
      num1, num2 = normalize_numbers(num1, num2, op_type)

      question_set << generate_question(num1, num2, op_type)
    end

    question_set
  end

  private

  def random_operation
    ['+', '-', '*', '/'].sample
  end

  def random_number_pair(range)
    [range.to_a.sample, range.to_a.sample]
  end

  # Normalizes the generated numbers based on the operation type.
  #
  # For subtraction: Ensures num1 is greater than or equal to num2 for positive results.
  # For division: Ensures num1 is a multiple of num2 for integer results, and num1 is greater than or equal to num2.
  def normalize_numbers(num1, num2, op_type)
    if ['-', '/'].include?(op_type)
      num1, num2 = [num1, num2].max, [num1, num2].min
      num1 *= num2 if op_type == '/'
    end
    [num1, num2]
  end

  # Generates a single question based on the operation type.
  def generate_question(num1, num2, op_type)
    answer = case op_type
             when '+'
               num1 + num2
             when '-'
               num1 - num2
             when '*'
               num1 * num2
             when '/'
               # Ensure no division by zero.
               num2 = num2.zero? ? 1 : num2
               num1 / num2
             end

    { num1: num1, num2: num2, opType: op_type, answer: answer }
  end
end
