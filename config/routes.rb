Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :users, only: [:index,:show,:edit,:update,:destroy]
  root to: 'posts#index'
end
