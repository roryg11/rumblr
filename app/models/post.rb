class Post < ActiveRecord::Base
  validates :image_url, :caption, :username, presence: true
end
