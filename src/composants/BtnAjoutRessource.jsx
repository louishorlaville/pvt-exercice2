import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './BtnAjoutRessource.scss';

export default function BtnAjoutRessource() {
  return (
    <Fab className="BtnAjoutRessource" color="primary" aria-label="add">
        <AddIcon />
    </Fab>
  );
}