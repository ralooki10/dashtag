require 'singleton'

class InstagramService
  include Singleton

  def initialize
    @last_update = Time.new(1720)
  end

  def get_grams_by_hashtag(hashtag)
    rate_set_in_env = ENV["API_Rate"] ? ENV["API_Rate"].to_f : nil
    if (Time.now - @last_update > (rate_set_in_env || 15))
      instagram_client_id = ENV["INSTAGRAM_CLIENT_ID"]
      response = HTTParty.get("https://api.instagram.com/v1/tags/#{hashtag}/media/recent?client_id=#{instagram_client_id}")

      GramFactory.make_grams(response.parsed_response)
      @last_update = Time.now
    end
  end
end