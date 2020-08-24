class UsersController < ApplicationController
  before_action :time, only:[:index, :show,:new,:edit]
  before_action :set_params, only:[:show,:edit,:destroy]
  before_action :move_to_edit, only:[:edit]
  PER = 7

  def new
    
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to root_path and return
    else
      redirect_to new_user_registration_path and return
    end
  end

  def show
    @post = @user.posts
    @posts = @post.order("created_at DESC").page(params[:page]).per(PER)
  end

  def edit

  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.save
      redirect_to root_path and return
    else
      redirect_to edit_user_path and return
    end
  end

  def destroy
    if @user.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  private
  def user_params
    params.require(:user).permit(:nickname,:icon,:bgi,:email,:encrypted_password,:introduction)
  end

  def set_params
    @user = User.find(params[:id])
  end

  def time
    @d = Date.today
  end

  def move_to_edit
    @user = User.find(params[:id])
    if current_user.id != @user.id
      redirect_to root_path
    end
  end

end
