import { Avatar } from '@material-ui/core';
import avatarImg from '../images/avatar.png';
import './Entete.scss';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan <Avatar alt="Camille Semaan" src={avatarImg} /></div>
    </header>
  );
}