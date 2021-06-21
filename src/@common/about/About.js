import React, {Component} from 'react';

import DetailsCard from './DetailsCard'

import { 
    AboutBanner, 
    David,
    Bea,
    Sam,
    Kirby,
    Red,
    Daniel,
    Marlon,
    CJ,
    EJ,
    Elaine,
    Ged, 
    Quin,
    Robie,
    Alina

} from '../../assets/images';



import '../../stylesheets/components/About.css';

class About extends Component {

    
    render () {

        return(
        
            <div>
                <img className="Hero-image-about" src={AboutBanner} alt ="Hero"/>
    
                
                <h1 className="Meet-devs">Meet The Students Behind ICS Virtual Library</h1>
    
                <div className="Student-profiles-four">

                    <DetailsCard name="Kirby Leopardas" img={Kirby} role="Project Manager"/>
                    <DetailsCard name="Steven Crespo" img={David} role="Front-End Team Leader"/>
                    <DetailsCard name="Samuel Lagrosas" img={Sam} role="Database Team Leader"/>
                    <DetailsCard name="Angela Javier" img={Bea} role="Back-End Team Leader"/>
                    
                </div>
    
                
    
    
                <div className="Student-profiles-three">
                    <DetailsCard name="Marlon Malonzo" img={Marlon} role="Front-End Developer"/>
                    <DetailsCard name="Daniel Aguilar" img={Daniel} role="Front-End Developer"/>
                    <DetailsCard name="Jared Muñoz" img={Red} role="Front-End Developer"/>
                </div>

                <div className="Student-profiles-four">
                    <DetailsCard name="Robie Carlos" img={Robie} role="Back-End Developer"/>
                    <DetailsCard name="Alina Väthbrückner" img={Alina} role="Back-End Developer"/>
                    <DetailsCard name="Elaine Kilala" img={Elaine} role="Back-End Developer"/>
                    <DetailsCard name="CJ Fabregas" img={CJ} role="Back-End Developer"/>
                </div>

                <div className="Student-profiles-three">
                    <DetailsCard name="Ged Malabanan" img={Ged} role="Database Developer"/>
                    <DetailsCard name="EJ Macaldo" img={EJ} role="Database Developer"/>
                    <DetailsCard name="Quin Sabado" img={Quin} role="Database Developer"/>
                </div>

    
                
    
                
            </div>
    
           
    
        );

    }
    
}

export default About;