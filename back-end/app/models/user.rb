class User < ApplicationRecord
    has_many :favorite_activities
    has_many :favorite_drawings
    has_many :drawings
end
