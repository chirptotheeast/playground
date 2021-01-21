class AuthController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        render json: user
    end

    def register 
    end 
end
