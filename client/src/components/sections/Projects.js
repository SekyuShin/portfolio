import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    height:500,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Projects = () => {
    //역시 관련프로젝트들 DB로 부터 가져와 출력예정
    //간략한 정보
    //자세한 정보는 클릭 이벤트를 통해 다이얼로그 생성 
    const test = Axios.get('http://localhost:3030/test')
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log("error");
        return ({name:'tt'});
    })

    return (
      <>
        <Typography align='center' variant='h2' color='secondary.light'>PROJECTS</Typography>
        <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item >
                        <Card sx={{ width: 'auto'}}>
                            <CardMedia
                                component="img"
                                height="480"
                                image={require('../../assets/images/Portfolio.jpg')}
                            />
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div>포트폴리오 사이트 개발</div>
                        <div>{test.name}</div>
                        <div>자신을 어필하기 위한 포트폴리오 사이트 개발</div>
                        <div>Skill : React, Node.js, HTML, JavaScript, CSS</div>
                    </Item>
                </Grid>
            </Grid>
      </>
    );
  }
  
  export default Projects;