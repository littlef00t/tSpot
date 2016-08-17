json.array! @foods do |food|
  json.id food.id
  json.name food.name
  json.vegan food.vegan
  json.vegetarian food.vegetarian
  json.hours food.hours
  json.gf food.gf
  json.description food.description
end
