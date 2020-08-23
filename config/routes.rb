Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :likes, only: [:create, :destroy]
  end
  resources :users, only: [:index,:show,:edit,:update,:destroy] do
    collection do
      get :likes
    end
  end
  root to: 'posts#index'
end
