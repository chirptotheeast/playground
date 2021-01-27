class FavoriteDrawingsController < ApplicationController
  def index
    favorite_drawings = FavoriteDrawing.all
    render json: favorite_drawings
  end

  def show
    favorite_drawing = FavoriteDrawing.find(params[:id])
    render json: favorite_drawing
  end

   def create
    drawFav = FavoriteDrawing.create(user_id: params[:data][:user_id] ,  
                                    drawing_id: params[:data][:drawing_id],
                                    drawing: params[:data][:drawing])
    render json: drawFav
  end 

  def destroy
    deleteDraw = FavoriteDrawing.find_by(id: params[:id])
    deleteDraw.destroy
  end
  
end
