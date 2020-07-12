class PostsController < ApplicationController
  def index
    # @posts = Posts.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
  end

end
