Rails.application.routes.draw do
  get 'favorite_drawings/index'
  get 'favorite_drawings/show'
  get 'favorite_drawings/new'
  get 'favorite_drawings/create'
  get 'favorite_drawings/edit'
  get 'favorite_activities/index'
  get 'favorite_activities/show'
  get 'favorite_activities/new'
  get 'favorite_activities/create'
  get 'drawings/index'
  get 'drawings/show'
  get 'activities/index'
  get 'activities/show'
  get 'users/index'
  get 'users/show'
  get 'users/new'
  get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end