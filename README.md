# Movie app

This project is a web application to explore movies and series, using the API of TMDB. The homepage still in development so you will get redirected to `/movies` if you try to access it.

# Technologies used

The project uses the following technologies:

* Typescript
* React 19
* Nextjs 15
* Material UI
* Dayjs

### How to run the application

To run the application, you need to have at least Node.js version `20.9` installed on your machine.
1. Clone the repository

````bash
 git clone https://github.com/JBryan98/movie-app-nextjs
````

2. Install the project dependencies using npm
```bash
npm install
```

2. Create an `.env` file on the root of the project with the following values. You can get your own TMDB API KEY at
[https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started).
````env
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
TMDB_MEDIA_BASE_URL=https://media.themoviedb.org/t/p
TMDB_API_KEY=YOUR_API_KEY

NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_MEDIA_BASE_URL=https://media.themoviedb.org/t/p
NEXT_PUBLIC_TMDB_API_KEY=YOUR_API_KEY

````

3. Run the application using npm

````bash
npm run dev
````

## App preview
Desktop preview

<img src="https://i.imgur.com/gqS3VBP.png" alt="desktop_preview">

Mobile preview

<img src="https://i.imgur.com/YGgRlm9.png" alt="mobile-preview">