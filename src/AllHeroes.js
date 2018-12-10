import React from 'react';

export default function AllHeroes() {
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(function (responseJson){
        return responseJson.json();
    }).then(function (response) {
      return <td>response</td>
    });
}