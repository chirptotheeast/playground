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
                                    drawing_id: params[:data][:drawing_id])
    render json: drawFav
  end 

  

  
  # def fave_draw_params
  #   params.require(:favorite_drawing).permit(:user_id, :drawing_id)
  # end
end
