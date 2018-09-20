import Typography from '@material-ui/core/Typography'

const UnderConstruction = () => (
  <div>
    <img src='/static/images/construction-image.svg' alt='construction-image' />
    <Typography gutterBottom variant={'display4'} component='h3'>
      Under Construction!
    </Typography>
    <Typography gutterBottom variant={'caption'} component='h4'>
      This page is under construction
    </Typography>
  </div>
)

export default UnderConstruction
