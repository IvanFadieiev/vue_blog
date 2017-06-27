class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { success: true }
    else
      render json: { auth_error: 'Invalid Auth' }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end