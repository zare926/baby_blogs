class PostsController < ApplicationController
  def index
    # @posts = Posts.all
  end

  def new
    @post = Post.new
  end

  def create
    post = Post.new(post_params)
    if post.save
      redirect_to root_path and return
    else
      redirect_to new_post_path and return
    end
  end

  private 
  def post_params
    params.require(:post).permit(:title,:text,:image).merge(user_id: current_user.id)
  end
end
