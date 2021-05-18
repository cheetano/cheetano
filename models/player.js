import mongoose, { Schema } from "mongoose";

const PlayerSchema = new mongoose.Schema(
{
    _id: {
type:Number,
unique: true
    },
    "player": {
      "id": {
        "type": "Number"
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
        "type": "Mixed"
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
        "type": "String"
      },
      "streak": {
        "type": "String"
      },
      "streak_sum": {
        "type": "Number"
      },
      "t_name": {
        "type": "String"
      },
      "category": {
        "type": "Mixed"
      },
      "description": {
        "type": "Mixed"
      },
      "duration": {
        "type": "Mixed"
      },
      "m_id": {
        "type": "Mixed"
      },
      "public": {
        "type": "Mixed"
      },
      "price": {
        "type": "Mixed"
      },
      "owner": {
        "type": "Mixed"
      },
      "bid": {
        "type": "Mixed"
      },
      "type": {
        "type": "String"
      },
      "gameweeks": {
        "type": "Mixed"
      },
      "player_1": {
        "type": "Mixed"
      },
      "player_2": {
        "type": "Mixed"
      },
      "player_3": {
        "type": "Mixed"
      },
      "id_uc": {
        "type": "Number"
      },
      "floor": {
        "type": "Number"
      },
      "multiplier": {
        "type": "Number"
      },
      "shield": {
        "type": "Number"
      },
      "origin": {
        "type": "String"
      },
      "id_community": {
        "type": "Number"
      },
      "uc_name": {
        "type": "String"
      },
      "color": {
        "type": "Number"
      },
      "fb_id": {
        "type": "Number"
      },
      "picture": {
        "type": "Mixed"
      },
      "id_transfer": {
        "type": "Number"
      },
      "t_price": {
        "type": "Number"
      },
      "date": {
        "type": "String"
      },
      "t_gameweeks": {
        "type": "Number"
      },
      "fav": {
        "type": "Number"
      },
      "age": {
        "type": "Number"
      },
      "height": {
        "type": "Number"
      },
      "weight": {
        "type": "Number"
      },
      "nationality": {
        "type": "String"
      },
      "created": {
        "type": "String"
      },
      "default": {
        "type": "Number"
      },
      "market": {
        "active": {
          "type": "Number"
        },
        "input": {
          "type": "Number"
        }
      },
      "offer": {
        "active": {
          "type": "Number"
        },
        "input": {
          "type": "Mixed"
        }
      },
      "barter": {
        "type": "Array"
      },
      "avatar": {
        "color": {
          "type": "String"
        },
        "initials": {
          "type": "String"
        },
        "pic": {
          "type": "String"
        }
      }
    },
    "player_extra": {
      "matches": {
        "type": "Number"
      },
      "goals": {
        "type": "Number"
      },
      "cards": {
        "type": "Number"
      }
    },
    "points": {
      "type": [
        "Mixed"
      ]
    },
    "points_history": {
      "type": [
        "Mixed"
      ]
    },
    "values": {
      "type": [
        "Mixed"
      ]
    },
    "values_chart": {
      "points": {
        "type": [
          "Mixed"
        ]
      },
      "max": {
        "value": {
          "type": "Number"
        },
        "date": {
          "type": "String"
        }
      },
      "min": {
        "value": {
          "type": "Number"
        },
        "date": {
          "type": "String"
        }
      }
    },
    "next_match": {
      "78": {
        "id": {
          "type": "Number"
        },
        "id_team": {
          "type": "Number"
        },
        "id_match": {
          "type": "Number"
        },
        "id_gameweek": {
          "type": "Number"
        },
        "id_home": {
          "type": "Number"
        },
        "id_away": {
          "type": "Number"
        },
        "date": {
          "ts": {
            "type": "Number"
          },
          "text": {
            "type": "String"
          },
          "format": {
            "type": "String"
          }
        },
        "status": {
          "type": "String"
        },
        "lineup": {
          "type": "Mixed"
        },
        "home": {
          "type": "String"
        },
        "away": {
          "type": "String"
        },
        "place": {
          "type": "String"
        }
      }
    },
    "starter": {
      "type": "Boolean"
    },
    "historico": {
      "type": "Boolean"
    },
    "home": {
      "78": {
        "id": {
          "type": "Number"
        },
        "points": {
          "type": "Number"
        },
        "avg": {
          "type": "Number"
        }
      }
    },
    "away": {
      "78": {
        "id": {
          "type": "Number"
        },
        "points": {
          "type": "Number"
        },
        "avg": {
          "type": "Number"
        }
      }
    },
    "owners": {
      "type": [
        "Mixed"
      ]
    },
    "ads": {
      "adsense": {
        "js": {
          "type": "String"
        },
        "320x50": {
          "type": "String"
        },
        "320x100_top": {
          "type": "String"
        },
        "320x100_top_sw": {
          "type": "String"
        },
        "300x250_content": {
          "type": "String"
        },
        "300x250_content_2": {
          "type": "String"
        },
        "300x250_content_sw": {
          "type": "String"
        },
        "300x600": {
          "type": "String"
        },
        "feed": {
          "type": "String"
        },
        "feed_2": {
          "type": "String"
        },
        "market": {
          "type": "String"
        },
        "300x600_content": {
          "type": "String"
        }
      },
      "dfp": {
        "js": {
          "type": "String"
        },
        "320x50_header": {
          "type": "String"
        }
      },
      "md": {
        "320x50": {
          "type": "String"
        },
        "320x100": {
          "type": "String"
        },
        "320x100_sw": {
          "type": "String"
        },
        "300x250": {
          "type": "String"
        },
        "300x250_sw": {
          "type": "String"
        },
        "300x600": {
          "type": "String"
        },
        "feed_1": {
          "type": "String"
        },
        "feed_2": {
          "type": "String"
        }
      },
      "new_system": {
        "type": "Boolean"
      }
    }
  });
  let PlayerModel = (mongoose.models && mongoose.models["Player"]) ||mongoose.model("Player", PlayerSchema);
  export default PlayerModel;