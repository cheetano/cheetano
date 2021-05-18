import { hacerLogin, sleep, obtenerIntervalo } from "../../../server/bemanager";
import PlayerResumenModel from "../../../models/playerResumen";
import MovimientoModel from "../../../models/movimiento";
import PlayerModel from "../../../models/player";
import { establecerConexion } from "../../../server/DB";
const extraerDatosJugador = async (auth, cookie, id) => {
  const data = new URLSearchParams();
  data.append("post", "players");
  data.append("id", id);
  let response = await fetch("https://mister.mundodeportivo.com/ajax/sw", {
    method: "POST",
    headers: {
      Accept: "*/*",
      credentials: "include",
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Auth": auth,
      Origin: "https://mister.mundodeportivo.com",
      Host: "mister.mundodeportivo.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      "X-Requested-With": "XMLHttpRequest",
      Cookie: cookie,
    },
    body: data,
  });
  let datos = await response.json();
  //console.log("datos" , datos);
  return datos.data;
};

export default async (req, res) => {
  
  await establecerConexion();
  

  let { auth, cookie } = await hacerLogin();
  let allPlayers = await PlayerResumenModel.find();
  /*allPlayers = allPlayers.filter(p=>!p.owners || p.owners.length<=0);*/
  console.log("allPlayers", allPlayers);

  for (let i = 0; i < allPlayers.length; i++) {
    let datos = null;
    let player = allPlayers[i];
    //let existente = await PlayerModel.findById(player._id);
    // if (existente) {
    //   console.log("Existe => ", player.id);
    //   continue;
    // }
    console.log("player.id => ", player.id);
    datos = await extraerDatosJugador(auth, cookie, player.id);
    //console.log("RESPUESTA ",datos);
    try {
      datos._id = datos.player.id;
      console.log("player._id => ", datos.owners);
      let aux = await PlayerModel.findByIdAndUpdate(datos._id,datos,{
        "new": true
      });
      console.log("AUX ", aux.owners)
      await sleep(await obtenerIntervalo(2200, 6000));
    } catch (e2) {
      console.log("Petado", e2);
      await sleep(6000);
      let res = await hacerLogin();
      auth = res.auth;
      cookie = res.cookie;
      try{
        datos = await extraerDatosJugador(auth, cookie, player.id);
        datos._id = datos.player.id;
        console.log("Desde el catch player._id => ", datos.owners);
        await PlayerModel.findByIdAndUpdate(datos._id,datos,{
          "new": true
        });
      }catch(e3){
        console.log("REPETADO")
      }
    }
  }

  res.json(allPlayers);
};

const procesarPlayers = async (allPlayers) => {};
