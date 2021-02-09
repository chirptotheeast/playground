class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

    has_many :favorite_activities
    has_many :favorite_drawings
    has_many :activities, through: :favorite_activities
    has_many :drawings, through: :favorite_drawings
end
