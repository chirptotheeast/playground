Rails.application.routes.draw do
resources :drawings
resources :activities 
resources :favorite_activities
resources :favorite_drawings

post '/login', to: 'sessions#create'
post '/logout', to: 'sessions#destroy'
get '/logged_in', to: 'sessions#is_logged_in?'

resources :users, only: [:create, :show, :index] do
  resources :items, only: [:create, :show, :index, :destroy]
end

# post '/login', to: 'auth#login'

# post '/youtubefav', to: 'activities#youtubefav' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
