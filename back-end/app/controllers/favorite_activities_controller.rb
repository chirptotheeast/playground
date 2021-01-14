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
  end
end
