// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { establecerConexion } from "../../server/DB";
import PlayerResumenModel from "../../models/playerResumen"
import RatonModel from "../../models/raton";
export default async (req, res) => {
  await establecerConexion();
  let raw = await fetch(
    "https://mister.mundodeportivo.com/api2/auth/signin/email",
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({
        method: "email",
        email: "sergio.bonet@outlook.com",
        password: "Qwerty_2021",
      }),
    }
  );
  let players = [];
  const c = raw.headers.raw()["set-cookie"];
  const { auth, cookie } = await extraerAuth(c);
  console.log("AUTH", auth, cookie);
  let sigue = true;
  let offset = 0;
  do {
    let data = new URLSearchParams();
    data.append("post", "players");
    data.append("offset", offset);
    data.append("order", "0");
    data.append("filtered", "0");
    data.append("filters[position]", "0");
    data.append("filters[value]", "0");
    data.append("filters[team]", "0");
    data.append("filters[injured]", "0");
    data.append("filters[favs]", "0");
    data.append("filters[owner]", "0");
    data.append("filters[benched]", "0");
    data.append("name", "");
    console.log("DATA", data);

    let raw2 = await fetch("https://mister.mundodeportivo.com/ajax/sw", {
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
    let res = null;
    try {
      res = await raw2.json();

      offset = offset + res.data.players.length;      
      players.push(...res.data.players);      
      console.log("OFFSET", offset);
      sigue = res.data.players.length > 0;
      await sleep(3500);
    } catch (error) {
      console.log("error", raw2);
      sigue = false;
    }
  } while (sigue);

  const idTitulares = [...new Set(players.map(item => item.id_uc))];
  console.log(idTitulares);
  const titulares = idTitulares
    .map(id=>{
      return {
        _id: id,
        name: players.find(s=>s.id_uc === id).uc_name
      }
    }).filter(r => r.name != null);

  console.log("TITULARES => ", titulares);
  players = players.map(p=> {
    p._id = p.id;
    return p;
  })
  let ratones = await RatonModel.insertMany(titulares);
  let validos = await PlayerResumenModel.insertMany(players);
  
  //console.log("Validos", validos);

  res.send({validos, ratones});
};

const extraerAuth = async (cookie) => {
  console.log("COOKIE en extraerAuth", cookie);
  let raw3 = await fetch("https://mister.mundodeportivo.com/more#players", {
    method: "GET",
    headers: {
      credentials: "include",
      cookie: cookie,
    },
  });
  const text = await raw3.text();
  const auth = extraerAuthDelTexto(text);
  return { auth, cookie: cookie };
};

const extraerAuthDelTexto = (text) => {
  const start = text.search(`"auth\":\"`);
  const substr1 = text.substr(start + `"auth\":\"`.length, 32);
  return substr1;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*

post:players
filters[position]:0
filters[value]:0
filters[team]=0
filters[injured]=0
filters[favs]=0
filters[owner]=0
filters[benched]=0
offset=50
order=0
name=
filtered=0:

*/
