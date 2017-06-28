Rails.application.routes.draw do
  get '/', to: 'home#index'

  post '/login',       to: 'sessions#create'
  get '/login',        to: 'sessions#new'
  post '/logout',      to: 'sessions#destroy'

  get '/signup',       to: 'users#new'
  post '/users',       to: 'users#create'

  post '/posts',       to: 'posts#create'
  post '/delete_post', to: 'posts#destroy'
  get  '/posts',       to: 'posts#index'
end
