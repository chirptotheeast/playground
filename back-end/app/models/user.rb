class User < ApplicationRecord
    has_many :favorite_activities
    has_many :favorite_drawings
    has_many :activities, through: :favorite_activities
    has_many :drawings, through: :favorite_drawings
end
