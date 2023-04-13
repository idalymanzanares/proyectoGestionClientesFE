//import { setShowMenu, selectShowMenu } from "@store/Slices/appSlice";
//import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { selectAuth, resetSecData } from "@store/Slices/secSlice";

import {BiLogIn, BiLogOut, BiUserPlus } from 'react-icons/bi';

import "./Menu.css";

const Menu = ({setShowMenu, selectShowMenu, showMenu}) => {
  const user = {token: ''}; //useSelector(selectAuth);
  //const showMenu = useSelector(selectShowMenu);
  //const dispatch = useDispatch();
  const classNames = showMenu ? "menu" : "menu hidden";
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    //dispatch(setShowMenu(!showMenu));
    setShowMenu(!showMenu);
    navigate((e.target as HTMLAnchorElement).getAttribute("href")||'');
  };
  const onLogoutHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    //dispatch(resetSecData());
    //dispatch(setShowMenu(!showMenu));
    setShowMenu(!showMenu);
    //navigate("/login");
  };
  if (!user?.token) {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/login" onClick={(e)=>{}}>
              <BiLogIn />&nbsp;Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Crear Cuenta
            </a>
          </li>
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Agregar Cuenta
            </a>
          </li>
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Editar Cuenta
            </a>
          </li> 
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Eliminar Cuenta
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/home" onClick={onLogoutHandler}>
              <BiLogOut/>&nbsp;Home
            </a>
          </li>
           <li>
            <a href="/version" onClick={onClickHandler}>
              <BiLogOut/>&nbsp;Version
            </a>
          </li>
           <li>
            <a href="/another" onClick={onClickHandler}>
              <BiLogOut/>&nbsp;Not Page Yet
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Menu;
