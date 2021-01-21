class UsersController < ApplicationController
  def index
    options = { 
        :include => {
          :favorite_activities => {
            :except => [:created_at, :updated_at]
          },
          :favorite_drawings => {
            :except => [:created_at, :updated_at]
          }
        },
         :except => [:created_at, :updated_at]
    }
    render json: User.all.to_json(options)
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def new
  end

  def create
  end
end
