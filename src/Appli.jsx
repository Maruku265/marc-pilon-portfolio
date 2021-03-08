import './Appli.scss';
import Entete from './Entete.jsx';
import Contenu from './Contenu.jsx';
import PiedDePage from './PiedDePage.jsx';
import SimpleReactLightbox from "simple-react-lightbox";

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
        <SimpleReactLightbox>
          <Contenu />
        </SimpleReactLightbox>
      <PiedDePage />
    </div>
  );
}
