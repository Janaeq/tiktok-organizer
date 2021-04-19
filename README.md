# TikTok Organizer

This is an application that organizes TikTok videos into categories.


## How It Works
- Fork and clone this repo, along with the application's [backend API](https://github.com/Janaeq/tiktok-organizer-api.git).

### Backend
Run the following code in your terminal to set up the API and start your server.
```ruby
bundle install
rails db:migrate
rails s
```
You can view the API at http://localhost:3000/categories and http://localhost:3000/videos

### Frontend
In your terminal, run ``` open index.html``` to open the application.
Create a category and begin adding videos!


*** Of Note ***

Embedded videos only play upon document load.
Given that the front end runs from a file server and not from an http server, the video does not play per CORS policy. 
Once deployed, this program will run on an http server that will allow the video to play.

## Contributing
Pull requests are welcome. Please open an issue for major changes.

## License
[MIT License](https://github.com/Janaeq/tiktok-organizer-frontend/blob/main/LICENSE)
