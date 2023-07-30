Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: %i[create index destroy] do
        resources :questions, only: [:index]
      end
    end
  end
end
