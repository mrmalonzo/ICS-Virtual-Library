import React from 'react';

import { 
    AboutBanner, 
    David,
    Bea,
    Sam,
    Kirby,
    Red,
    Daniel,
    Marlon

} from '../../assets/images';

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
            <img className="Hero-image-about" src={AboutBanner} alt ="Hero"/>

            
            <h1 className="Meet-devs">Meet The Students Behind ICS Virtual Library</h1>

            <div className="Student-profiles-four">

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={Kirby}
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
                    image={David}
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
                    image={Sam}
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
                    image={Bea}
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
                    image={Daniel}
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
                    image={Marlon}
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
                    image={Red}
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