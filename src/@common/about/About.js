import React from 'react';

import hero from '../../assets/images/hero/hero_about_3.png';
import david from '../../assets/images/id/david.jpg';
import bea from '../../assets/images/id/bea.jpg';
import sam from '../../assets/images/id/sam.jpg';
import kirby from '../../assets/images/id/kirby.jpg';
import red from '../../assets/images/id/red.jpg';
import daniel from '../../assets/images/id/daniel.jpg';
import marlon from '../../assets/images/id/marlon.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import '../../stylesheets/components/About.css';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const About = () => {

    const classes = useStyles();

    return(
        
        <div>
            <img className="Hero-image-about" src={hero} alt ="Hero Image"/>

            
            <h1 className="Meet-devs">Meet The Students Behind ICS Virtual Library</h1>

            <div className="Student-profiles-four">

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={kirby}
                    title="Kirby Leopardas"
                    />
                    <CardContent>
                    <Typography className="Name" gutterBottom variant="h5" component="h2">
                        Kirby Leopardas
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Project Manager
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={david}
                    title="Steven Crespo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Steven Crespo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Front-End Development Team Leader
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={sam}
                    title="Sam Lagrosas"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Samuel Lagrosas
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Database Development Team Leader
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={bea}
                    title="Angela Javier"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Angela Javier
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Back-End Development Team Leader
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

            </div>

            <h1 className="Meet-devs">Front-End Developers</h1>


            <div className="Student-profiles-three">

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={daniel}
                    title="Daniel Aguilar"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Daniel Aguilar
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Front-End Developer
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={marlon}
                    title="Marlon Malonzo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Marlon Malonzo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Front-End Developer
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={red}
                    title="Red Munoz"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Jared Muñoz
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Front-End Developer
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{color: "#0340AD"}}>
                    Contact
                    </Button>
                </CardActions>
                </Card>

                

            </div>

            

            
        </div>

       

    );
}

export default About;