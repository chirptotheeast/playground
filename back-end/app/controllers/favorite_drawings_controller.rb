class FavoriteDrawingsController < ApplicationController
  def index
    favorite_drawings = FavoriteDrawing.all
    render json: favorite_drawings
  end

  def show
    favorite_drawing = FavoriteDrawing.find(params[:id])
    render json: favorite_drawing
  end

  def new
  end

  def create
  end

  def edit
  end
end
