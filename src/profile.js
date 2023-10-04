import { useEffect, useState } from "react";
import CardComp from "./card";
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

function Profile() {

  let {isAuthenticated, user} = useAuth0()
  console.log(user)
  let stringedFavorites = localStorage.getItem("favorites");
  let favorites = JSON.parse(stringedFavorites);
  let [favoritesState, setFavoritesState] = useState(favorites);

  function handleDelete(index) {
    favorites.splice(index, 1);
    let favoritesCopy = [...favorites];
    setFavoritesState(favoritesCopy);
    let storedData = JSON.stringify(favoritesCopy);
    localStorage.setItem("favorites", storedData);
  }
}


export default Profile;