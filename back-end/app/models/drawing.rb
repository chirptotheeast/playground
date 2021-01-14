class Drawing < ApplicationRecord
    belongs_to :user
    has_many :favorite_drawings
end
