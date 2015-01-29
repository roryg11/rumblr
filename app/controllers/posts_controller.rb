class PostsController < ApplicationController
  def index
    @posts = Post.all
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessed_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :caption, :username)
  end

end
