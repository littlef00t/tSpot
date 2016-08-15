# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Food.create(name: 'Veg1', vegetarian: true, vegan: true, gf: true, hours: 'M-F 12PM - 9PM');
Food.create(name: 'Meat', vegetarian: true, vegan: false, gf: true, hours: 'M-F 5PM - 10PM');
Food.create(name: 'Noms', vegetarian: false, vegan: false, gf: true, hours: 'M-F 8AM - 2PM');
