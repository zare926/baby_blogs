Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :users, only: [:index,:show]
  root to: 'posts#index'
end
