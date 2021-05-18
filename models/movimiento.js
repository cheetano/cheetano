import mongoose, { Schema } from "mongoose";

const MovimientoSchema = new mongoose.Schema(
    {
        jugador: {
            type: Schema.Types.ObjectId,
            ref: "Player"
        },
        jugador_id: {
          type: Number
        },
        "from": {
          "type": "String"
        },
        "to": {
          "type": "String"
        },
        "price": {
          "type": "Number"
        },
        "date": {
          "type": "String"
        },
        "type": {
          "type": "String"
        },
        "gameweeks": {
          "type": "Number"
        }
      }
)

let MovimientoModel = (mongoose.models && mongoose.models["Movimiento"]) ||mongoose.model("Movimiento", MovimientoSchema);
  export default MovimientoModel;