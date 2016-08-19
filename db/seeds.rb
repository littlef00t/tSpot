# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

food_list = [
  ['Eatery1', true, true, true, '12-3'],
  ['Eatery2', true, false, true, '5-8'],
  ['Eatery3', false, false, true, '9-11'],
  ['Eatery4', false, false, false, '3-11']
]

food_list.each do |name, vegetarian, vegan, gf, hours|
  Food.create(name: name, vegetarian: vegetarian, vegan: vegan, gf: gf, hours: hours)
end


# Food.create({name: 'Veg1', vegetarian: true, vegan: true, gf: true, hours: 'M-F 12PM - 9PM'})
# Food.create({name: 'Meat', vegetarian: true, vegan: false, gf: true, hours: 'M-F 5PM - 10PM'})
# Food.create({name: 'Noms', vegetarian: false, vegan: false, gf: true, hours: 'M-F 8AM - 2PM'})
