import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { positions } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    height:500,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Introduction = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={7}>
                <Item >
                    <Card sx={{ width: 'auto'}}>
                    <CardMedia
                        component="img"
                        height="480"
                        image={require('../../assets/images/sekyu.jpg')}
                    />
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={5}>
                <Item>
                    <div>끊임없이 노력하는 개발자 신세규 입니다.</div>
                </Item>
            </Grid>
        </Grid>
    );
  }
  
  export default Introduction;