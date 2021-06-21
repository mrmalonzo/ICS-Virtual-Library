import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const DetailsCard = ({name, img, role}) => {
    
    
    const classes = useStyles();

    return(
    
        <div>

                <Card className={classes.root} style={{width:300}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:250}}
                    className={classes.media}
                    image={img}
                    title={name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {role}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        </div>
    );




    
}

export default DetailsCard