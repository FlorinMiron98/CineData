# Data Schema

# [Main README.md File](https://github.com/FlorinMiron98/CineData/blob/main/README.md)

## Table of Contents
1. [User](#user)
2. [Watchlist Item](#watchlist-item)
3. [Rating](#rating)
4. [Relationships](#relationships)
  
### User
   | Field | Type | Constraints | Description |
   | ----- | ---- | ----------- | ----------- |
   | id | Integer | Primary Key | Unique identifier for the user |
   | username | String | Unique, max 50 chars | User's unique username |
   | password | String | Required, max 100 chars | Hashed user password |
### Watchlist Item
   | Field | Type | Constraints | Description |
   | ----- | ---- | ----------- | ----------- |
   | movie_id | String | Primary Key | ID of the movie |
   | title | String | Required | Title of the movie |
   | release_date | String | - | Release date |
   | rating | Float | - | IMDb movie rating |
   | poster_url | String | - | URL to movie poster |
   | user_id | Integer | User.id | User who added the movie to watchlist |
### Rating
   | Field | Type | Constraints | Description |
   | ----- | ---- | ----------- | ----------- |
   | movie_id | String | Primary Key | ID of the movie |
   | title | String | Required | Title of the movie |
   | release_date | String | - | Release date |
   | user_rating | Integer | Required | Rating given by the user (1 to 10) |
   | poster_url | String | - | URL to movie poster |
   | user_id | Integer | User.id | User who rated the movie |
### Relationships
- A **User** can have multiple **WatchlistItems** and **Ratings**
- Each **WatchlistItem** and **Rating** belongs to one **User**
