Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :likes, only: [:create, :destroy]
  end
  resources :users, only: [:index,:show,:edit,:update,:destroy]
  root to: 'posts#index'
end
