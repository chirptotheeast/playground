class ActivitiesController < ApplicationController
  def index
    activities = Activity.all
    render json: activities
  end

  def show
    activity = Activity.find(params[:id])
    render json: activity
  end

  def liked_youtubevids
    user = User.find(params[:id])
    youtubelove = user.activities.where(youtube: true)
    render json: youtubelove
  end
end
