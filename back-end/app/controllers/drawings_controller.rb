class DrawingsController < ApplicationController
  def index
    drawings = Drawing.all
    render json: drawings
  end

  def show
    drawing = Drawing.find(params[:id])
    render json: drawing
  end

   def create
    newdraw = Drawing.create(svgdrawing: params[:data][:svgdrawing])
    render json: newdraw
  end 


end
