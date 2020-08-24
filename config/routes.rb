Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :comments, only: [:create]
    resources :likes, only: [:create, :destroy]
  end
  resources :users, only: [:index,:show,:edit,:update,:destroy] do
    resources :likes, only: [:index]
  end
  root to: 'posts#index'
end
