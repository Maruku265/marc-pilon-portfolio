import './Contenu.scss';
import {SRLWrapper} from "simple-react-lightbox";

export default function Contenu() {
    
    return(
        <div className="Contenu">
            <h2 id="APropos">À Propos</h2>
            <p>Dans mes études, j'ai reçu les aptitudes du design et de la programmation. Je souhaiterais m'améliorer dans de nouvelles compétences. Je suis une personne qui continu à chercher comment me dépasser.</p>
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