class User < ApplicationRecord
  validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 3, maximum: 15}
  has_many :messages
  has_secure_password
end
# before_save { self.email = email.downcase }
# has_many :articles, dependent: :destroy
# validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 25 }
# VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
# validates :email, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 100 }, format: { with: VALID_EMAIL_REGEX }
# has_secure_password