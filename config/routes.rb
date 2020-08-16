Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :users, only: [:index,:show,:edit,:update]
  root to: 'posts#index'
end
