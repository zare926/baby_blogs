class PostsController < ApplicationController
  before_action :set_params, only:[:show,:edit,:destroy]
  before_action :time, only:[:index, :show,:new,:edit]
  before_action :move_to_new, except: [:index,:show]
  before_action :move_to_edit, only: [:edit]
  PER = 7

  def index
    @posts = Post.all.order("created_at DESC").page(params[:page]).per(PER)
    @ranking = Post.all.order('impressions_count DESC').limit(6)
                  # .where("? <= created_at", Time.now.week)
                  # .where("created_at <= ?", Time.now).take(6)
  end

  def show
    impressionist(@post, nil)
    @like = Like.new
    @comment = Comment.new
    @comments = @post.comments.includes(:post).order("created_at DESC")
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

  def edit
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    if post.save
      redirect_to root_path and return
    else
      redirect_to new_post_path and return
    end
  end

  def destroy
    if @post.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  private 

  def post_params
    params.require(:post).permit(:title,:text,:image).merge(user_id: current_user.id)
  end

  def set_params
    @post = Post.find(params[:id])
  end

  def time
    @d = Date.today
  end

  def move_to_new
    redirect_to action: :index unless user_signed_in?
  end
  
  def move_to_edit
    @post = Post.find(params[:id])
    if @post.user_id != current_user.id
      redirect_to root_path
    end
  end

end
