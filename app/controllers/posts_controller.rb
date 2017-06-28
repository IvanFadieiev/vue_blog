class PostsController < ApplicationController
  before_action :authenticate

  def index
    posts = Post.includes(:user).all.order(created_at: :desc).map { |post| { post: post, author: post.user} }
    render json: posts
  end

  def create
    post = @current_user.posts.new(post_params)
    if post.save
      render json: { success: true, new_post: { post: post, author: post.user } }
    else
      render json: { errors: post.errors.full_messages }
    end
  end

  def destroy

  end

  private

  def authenticate
    @current_user ||= User.find_by_token(request.headers['Access-Token'])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end