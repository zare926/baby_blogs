class UsersController < ApplicationController
  before_action :time, only:[:index, :show,:new]
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
    @user = User.find(params[:id])
    @item = @user.posts
    @items = @item.order("created_at DESC").page(params[:page]).per(PER)
  end

  private
  def user_params
    params.require(:user).premit(:nickname,:icon,:email,:encrypted_password)
  end

  def time
    @d = Date.today
  end

end
