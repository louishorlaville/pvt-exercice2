import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import BtnAjoutRessource from './BtnAjoutRessource';
import './Appli.scss'

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
        </section>
        <BtnAjoutRessource type="ajout-dossier"/>
    </div>
  );
}
