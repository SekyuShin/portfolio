import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    height:500,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




const AboutMe = () => {
    return (
        <>
            <Typography align='center' variant='h2' color='secondary.light'>ABOUT ME</Typography>
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
                        <div>이름 : 신세규</div>
                        <div>학력사항 : 성결대학교 정보통신공학</div>
                        <div>자격증 : 정보처리기사</div>
                        <div>자격증 : 정보처리기사</div>
                        <div>자격증 : 정보처리기사</div>
                        <div>자격증 : 정보처리기사</div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
  }

  export default AboutMe;