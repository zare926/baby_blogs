class UsersController < ApplicationController

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
  end

  private
  def user_params
    params.require(:user).premit(:nickname,:icon,:email,:encrypted_password)
  end

end
