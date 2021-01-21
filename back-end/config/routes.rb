Rails.application.routes.draw do
resources :drawings
resources :users 
resources :activities 
resources :favorite_activities
resources :favorite_drawings
post '/login', to: 'auth#login'
# post '/youtubefav', to: 'activities#youtubefav' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
