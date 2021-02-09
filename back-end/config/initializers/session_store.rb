if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_playground', domain: 'playground'
  else
    Rails.application.config.session_store :cookie_store, key: '_playground'
  end