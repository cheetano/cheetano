import mongoose, { Schema } from "mongoose";

const PlayerResumenSchema = new mongoose.Schema({
  "_id": {
    "type": "Number",
      unique: true
  }, 
  "id": {
      "type": "Number",
        unique: true
    },
    "name": {
      "type": "String"
    },
    "position": {
      "type": "Number"
    },
    "id_team": {
      "type": "Number"
    },
    "id_comunio": {
      "type": "Number"
    },
    "value": {
      "type": "Number"
    },
    "points": {
      "type": "Number"
    },
    "avg": {
      "type": "Number"
    },
    "status": {
      "type": "Mixed"
    },
    "id_competition": {
      "type": "Number"
    },
    "ts_pic": {
      "type": "Number"
    },
    "prev_value": {
      "type": "Number"
    },
    "last_modified": {
      "type": "Date"
    },
    "streak": {
      "type": [
        "Mixed"
      ]
    },
    "streak_sum": {
      "type": "Number"
    },
    "id_uc": {
      "type": "Number",      
      ref: "Raton"
    },
    "uc_name": {
      "type": "String"
    },
    "clause": {
      "type": "Number"
    },
    "shield": {
      "type": "Number"
    },
    "fav": {
      "type": "Number"
    },
    "match_info": {
      "is_home": {
        "type": "Boolean"
      },
      "rival_team_id": {
        "type": "Number"
      }
    }
  });
  let PlayerResumenModel = (mongoose.models && mongoose.models["PlayerResumen"]) ||mongoose.model("PlayerResumen", PlayerResumenSchema);
  export default PlayerResumenModel;

  