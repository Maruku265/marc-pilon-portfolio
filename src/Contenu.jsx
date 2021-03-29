import './Contenu.scss';
import {SRLWrapper} from "simple-react-lightbox";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

export default function Contenu() {
    const classes = useStyles();
    
    return(
        <div className="Contenu">
            <h2 id="APropos">À Propos</h2>
            <p>Dans mes études, j'ai reçu les aptitudes du design et de la programmation. Je souhaiterais m'améliorer dans de nouvelles compétences. Je suis une personne qui continu à chercher comment me dépasser.</p>
            <h3 id="Competences">Compétences</h3>
            
            <div className="Competences">
                <div className="NomComp">
                    <h4>Logiciels graphiques</h4>
                    <h6>Premiere Pro, After Effects, Logic Pro X, Photoshop, Illustrator, Adobe XD</h6>
                </div>
                <div className="Slider">
                    <Slider
                    defaultValue={50}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>Travail collaboratif</h4>
                    <h6>Microsoft Teams, Trello</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={40}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>Langages de programmation</h4>
                    <h6>JavaScript, HTML, PHP, CSS</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>Base de données</h4>
                    <h6>MySQL/SQL, CouchDB</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>Gestion de code source</h4>
                    <h6>Git/ GitHub</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>3D</h4>
                    <h6>Maya</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={20}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
                <div className="NomComp">
                    <h4>Unity</h4>
                    <h6>C#, 2D, 3D</h6>
                </div>
                <div className="Slider">
                <Slider
                    defaultValue={20}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={50}
                    disabled
                />
                </div>
            </div>

            <SRLWrapper>
                <h2 id="Projets">Projets</h2>
                <div className="Projets">
                    <a href={'images-projets/affiche-jour-de-la-terre.jpg'} data-attribute={'SRL'}>
                        <img src={'images-projets/affiche-jour-de-la-terre-small.jpg'} alt="Une affiche d'un jeux fictif qui a été conçu pour le jour de la Terre." />
                    </a>
                    <a href={'images-projets/site-pizza.png'} data-attribute={'SRL'}>
                        <img src={'images-projets/site-pizza-small.png'} alt="Un des premier sites que j'ai fait un nouveau design. Le site du pizza2pour1montreal." />
                    </a>
                    <a href={'images-projets/aigle.jpg'} data-attribute={'SRL'}>
                        <img src={'images-projets/aigle-small.jpg'} alt="Un aigle fait en 3D avec la méthode voxel." />
                    </a>
                    <a href={'images-projets/pestilence-high.png'} data-attribute={'SRL'}>
                        <img src={'images-projets/pestilence-high-small.png'} alt="Un jeux créé en équipe. Le but de ce projet c'était d'utiliser nos compétences aquis." />
                    </a>
                    <a href={'images-projets/site-departement.jpg'} data-attribute={'SRL'}>
                        <img src={'images-projets/site-departement-small.jpg'} alt="Un projet où nous avons fait un nouveau design pour le site du TIM du Collège de Maisonneuve." />
                    </a>  
                </div>
            </SRLWrapper>
        </div>
    );
}