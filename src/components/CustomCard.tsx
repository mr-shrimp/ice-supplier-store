import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface CustomCardProps {
  title: string
  description: string
  image: string
}

const CustomCard = (props: CustomCardProps) => {
  return (
    <Card
      variant='outlined'
      sx={{
        width: { xs: '100%', sm: 200, md: 300, lg: 300, xl: 300 },
        height: { xs: 300, sm: 320, md: 300, lg: 300, xl: 300 },
        // maxWidth: 300,
      }}
    >
      <CardMedia
        sx={{ height: 200}}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}


export default CustomCard
CustomCard