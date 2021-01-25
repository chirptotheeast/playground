class FavoriteActivitiesController < ApplicationController
  def index
    favorite_activities = FavoriteActivity.all
    render json: favorite_activities
  end

  def show
    favorite_activity = FavoriteActivity.find(params[:id])
    render json: favorite_activity
  end

  def create
    newfav = FavoriteActivity.create(fave_acty_params)
    render json: newfav
  end 

  
  def fave_acty_params
    params.require(:favorite_activity).permit(:user_id, :activity_id)
  end
end
