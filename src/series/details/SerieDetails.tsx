import { SerieDetails as SerieDetailsType } from '@/types/Serie.type'
import { formatScoreWithMax } from '@/utils/utils'
import { Box, Link as MuiLink, Typography } from '@mui/material'

interface Props {
    serie: SerieDetailsType
}

const SerieDetails = ({ serie }: Props) => {
  return (
        <Box>
        <Typography variant="h4" gutterBottom fontWeight="bold">{serie.name}</Typography>
        <Typography variant='h6' gutterBottom fontWeight="bold">{serie.production_companies.map(c => c.name).join(", ")}</Typography>
        <Typography variant='body1' gutterBottom>{serie.overview}</Typography>
        <div>            
            <Typography variant='body1' fontWeight="bold" component="span">Fecha de emisión: </Typography>
            <Typography variant='body1' component="span">{serie.first_air_date}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span">Temporadas: </Typography>
            <Typography variant='body1' component="span">{serie.number_of_seasons}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span">Episodios: </Typography>
            <Typography variant='body1' component="span">{serie.number_of_episodes}</Typography>
        </div>        
        <div>
            <Typography variant='body1' fontWeight="bold" component="span">Estado: </Typography>
            <Typography variant='body1' component="span">{serie.status}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Calificación: </Typography>
            <Typography variant='body1' component="span">{formatScoreWithMax(serie.vote_average)}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Categorías: </Typography>
            <Typography variant='body1' component="span">{serie.genres.map(g => g.name).join(", ")}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Dirección: </Typography>
            <Typography variant='body1' component="span">{serie.credits.crew.filter(member => member.known_for_department === "Directing").map(director => director.name).join(", ")}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Escritores: </Typography>
            <Typography variant='body1' component="span">{serie.credits.crew.filter(member => member.known_for_department === "Writing").map(writer => writer.name).join(", ")}</Typography>
        </div>
        <div>
            <Typography variant='body1' fontWeight="bold" component="span"> Sitio web oficial: </Typography>
            <MuiLink variant='body1' href={serie.homepage} target="_blank" rel="noopener noreferrer">{serie.homepage}</MuiLink>
        </div>
    </Box>
  )
}

export default SerieDetails