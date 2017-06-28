class User < ApplicationRecord
  has_secure_password

  has_many :posts

  validates :name, :email, :password, presence: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  before_create :set_auth_token

  def update_token
    update_attribute(:token, generate_auth_token)
  end

  private

  def set_auth_token
    return if token.present?
    self.token = generate_auth_token
  end

  def generate_auth_token
    SecureRandom.uuid.gsub(/\-/,'')
  end
end
