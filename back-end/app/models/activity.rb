class Activity < ApplicationRecord
    has_many :favorite_activities
    has_many :users, through: :favorite_activities
end
