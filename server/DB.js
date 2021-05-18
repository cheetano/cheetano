import mongoose from "mongoose";

async function establecerConexion() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    });
  }
}

export {establecerConexion}
