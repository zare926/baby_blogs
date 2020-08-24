class LikesController < ApplicationController
  before_action :time, only:[:index, :show,:new,:edit]
  PER = 7
  def index
    @user = current_user
    @posts = @user.liked_posts.order("created_at DESC").page(params[:page]).per(PER)
  end

  def create
    @like = current_user.likes.create(post_id: params[:post_id])
    redirect_back(fallback_location: root_path)
  end

  def destroy
    @like = Like.find_by(post_id: params[:post_id], user_id: current_user.id)
    @like.destroy
    redirect_back(fallback_location: root_path)
  end

  private
  def time
    @d = Date.today
  end
end
