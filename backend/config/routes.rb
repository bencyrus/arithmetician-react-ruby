Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:create, :index, :destroy] do
        resources :questions, only: [:index]
      end
      resources :questions, only: [:create]
    end
  end
end