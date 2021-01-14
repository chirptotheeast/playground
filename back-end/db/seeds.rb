# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Activity.destroy_all
Drawing.destroy_all
FavoriteActivity.destroy_all
FavoriteDrawing.destroy_all


puts 'users'
user1 = User.create(username: 'LovelyLeo', password: '123', avatar: '')
user2 = User.create(username: 'LilacBloomin', password: '123', avatar: '')
user3 = User.create(username: 'RedTruckin', password: '123', avatar: '')

puts 'activities'

music_activity = Activity.create(name: 'music', video_link: '', avatar: '')
games_activity = Activity.create(name: 'games', video_link: '', avatar: '')
puppet_activity = Activity.create(name: 'puppets', video_link: '', avatar: '')
nap_time = Activity.create(name: 'nap time', video_link: '', avatar: '')
sidewalk = Activity.create(name: 'sidewalk art', video_link: '', avatar: '')


puts 'drawings'

drawing1 = Drawing.create(svgdrawing: "boop")
drawing2 = Drawing.create(svgdrawing: "boop")
drawing3 = Drawing.create(svgdrawing: "boop")

puts "favorite activities"

favactivity1 = FavoriteActivity.create(user_id: user1.id , activity_id: music_activity.id)


puts "favorite drawings"

favdrawing1 = FavoriteDrawing.create(user_id: user1.id, drawing_id: drawing1.id)