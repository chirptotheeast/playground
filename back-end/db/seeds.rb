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

music_activity_sheep = Activity.create(name: 'SheepMusic', video_link: 'https://youtu.be/xT2zOAZAWoM', youtube_video: true, avatar: '')
music_activity_love = Activity.create(name: 'LoveMusic', video_link: 'https://youtu.be/nYKNeMqww-I', youtube_video: true, avatar: '')
music_activity_bee = Activity.create(name: 'BeeMusic', video_link: 'https://youtu.be/Z6zWxullnuA', youtube_video: true, avatar: '')
music_activity_hedgie = Activity.create(name: 'HedgieMusic', video_link: 'https://youtu.be/1YNVnXEckHM', youtube_video: true, avatar: '')
music_activity_sick = Activity.create(name: 'SickMusic', video_link: 'https://youtu.be/wdKQIhtclZc', youtube_video: true, avatar: '')
music_activity_bunny = Activity.create(name: 'bunnyMusic', video_link: 'https://youtu.be/IWWjTl39sFo', youtube_video: true, avatar: '')
games_activity = Activity.create(name: 'games', video_link: '', youtube_video: false , avatar: '')
puppet_activity = Activity.create(name: 'puppets', video_link: '', youtube_video: false, avatar: '')
nap_time = Activity.create(name: 'nap time', video_link: '', youtube_video: false, avatar: '')
sidewalk = Activity.create(name: 'sidewalk art', video_link: '', youtube_video: false, avatar: '')



puts 'drawings'

drawing1 = Drawing.create(svgdrawing: "boop")
drawing2 = Drawing.create(svgdrawing: "boop")
drawing3 = Drawing.create(svgdrawing: "boop")

puts "favorite activities"

favactivity1 = FavoriteActivity.create(user_id: user1.id , activity_id: music_activity_sheep.id)


puts "favorite drawings"

favdrawing1 = FavoriteDrawing.create(user_id: user1.id, drawing_id: drawing1.id)