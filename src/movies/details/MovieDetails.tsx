import GenreChips from '@/components/genders/GenreChips';
import { Movie } from '@/types/Movie.type';
import { formatScoreWithMax } from '@/utils/utils';
import { Box, Link as MuiLink, Typography } from '@mui/material';

interface Props {
    movie: Movie;
}

const MovieDetails = ({ movie }: Props) => {
  return (
    <Box>
        <Typography variant="h4" gutterBottom fontWeight="bold">{movie.title}</Typography>
        <GenreChips type='movie' genres={movie.genres}/>
        <Typography variant='body1' gutterBottom>{movie.overview}</Typography>
        <div>            
            <Typography variant='body1' fontWeight="bold" component="span">Fecha de lanzamiento: </Typography>
            <Typography variant='body1' component="span">{movie.release_date}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Duración: </Typography>
            <Typography variant='body1' component="span">{movie.runtime} minutos</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Estado: </Typography>
            <Typography variant='body1' component="span">{movie.status}</Typography>            
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Calificación: </Typography>
            <Typography variant='body1' component="span">{formatScoreWithMax(movie.vote_average)}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Productoras: </Typography>
            <Typography variant='body1' component="span">{movie.production_companies.map(c => c.name).join(", ")}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Presupuesto: </Typography>
            <Typography variant='body1' component="span">${movie.budget.toLocaleString()}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Ingresos: </Typography>
            <Typography variant='body1' component="span">${movie.revenue.toLocaleString()}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Director: </Typography>
            <Typography variant='body1' component="span">{movie.credits.crew.find(member => member.job === "Director")?.name}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Sitio web oficial: </Typography>
            <MuiLink variant='body1' href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</MuiLink>
        </div>
    </Box>
  )
}

export default MovieDetails