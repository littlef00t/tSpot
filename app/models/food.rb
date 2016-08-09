class Food < ActiveRecord::Base
  validates :name, :vegetarian, :vegan, :gf, :hours, presence: true
  
end
