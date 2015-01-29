class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :image_url
      t.string :caption
      t.string :username
      t.timestamps
    end
  end
end
