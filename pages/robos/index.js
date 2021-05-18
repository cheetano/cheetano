import { establecerConexion } from "../../server/DB";
import PlayerModel from "../../models/player";
import RatonModel from "../../models/raton";
import { convertirDescripcionAFecha } from "../../server/utils";

export default function Index({ salida }) {
  return (
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">ROBOS!</h1>
      </div>
      {salida.map((r) => (
        <div className="card">
          <div className="card-header">{r.name}</div>
          <div className="card-body">
            <ul className="list-group">
              {r.robos.map((a) => (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-1">
                      <img src={a.src} className="img-fluid img-thumbnail sm" />
                    </div>
                    <div
                      className={"col-md-6 text-white bg-" + a.tipo}
                      dangerouslySetInnerHTML={{ __html: a.descripcion }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  await establecerConexion();
  const ratones = await RatonModel.find({}).lean();
  const jugadores = await PlayerModel.find({ $where: "this.owners.length>1" });
  let salida = [];
  for (let i = 0; i < ratones.length; i++) {
    let raton = { name: ratones[i].name, robos: [] };
    for (let j = 0; j < jugadores.length; j++) {
      let jugador = jugadores[j];
      let ownersDelRaton = jugador.owners.filter(
        (o) => o.type == "clause" && o.to == raton.name
      );
      let ownersAlRaton = jugador.owners.filter(
        (o) => o.type == "clause" && o.from == raton.name
      );
      for (let k = 0; k < ownersDelRaton.length; k++) {
        raton.robos.push({
          src: `https://d1.gomister.com/img/players/${jugador._id}.png?1613576806`,
          tipo: "success",
          descripcion: `Le robas ${jugador.player.name} a <b>${ownersDelRaton[k].from}</b> el ${ownersDelRaton[k].date}`,
          fecha: ownersDelRaton[k].date,
        });
      }
      for (let k = 0; k < ownersAlRaton.length; k++) {
        raton.robos.push({
          src: `https://d1.gomister.com/img/players/${jugador._id}.png?1613576806`,
          tipo: "danger",
          descripcion: `<b>${ownersAlRaton[k].to}</b> te roba a ${jugador.player.name} el ${ownersAlRaton[k].date}`,
          fecha: ownersAlRaton[k].date,
        });
      }
    }
    raton.robos.sort((a, b) => {
      return (
        convertirDescripcionAFecha(a.fecha) -
        convertirDescripcionAFecha(b.fecha)
      );
    });
    salida.push(raton);
  }
  console.log("SALIDA", salida);
  return {
    props: { salida },
  };
}
