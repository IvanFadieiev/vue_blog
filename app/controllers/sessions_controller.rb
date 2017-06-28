class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      user&.update_token
      cookies[:token] = user.token
      render json: { success: true, token: user.token }
    else
      render json: { auth_error: 'Invalid Auth' }
    end
  end

  def destroy
    User.find_by_token(params[:token])&.update_attribute(:token, '')
    cookies.delete :token
    render json: { success: true }
  end
end