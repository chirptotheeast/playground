class Drawing < ApplicationRecord
    has_many :favorite_drawings
    has_many :users, through: :favorite_drawings
end
