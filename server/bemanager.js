const hacerLogin = async () => {
    let raw = await fetch('https://mister.mundodeportivo.com/api2/auth/signin/email',
  {
    method: 'POST',
    headers:{
      'Accept':'*/*',
      'Content-type': 'application/json',
      'credentials': 'include'
    },
    body: JSON.stringify({method:"email",email:"sergio.bonet@outlook.com",password:"Qwerty_2021"})
  });
  const c = raw.headers.raw()['set-cookie'];
  const {auth, cookie} = await extraerAuth(c);
  return {auth, cookie}
}

const extraerAuth = async (cookie) => {
    console.log("COOKIE en extraerAuth", cookie);
    let raw3 = await fetch('https://mister.mundodeportivo.com/more#players',{
    'method':'GET',
    headers:{
      'credentials':'include',
       cookie: cookie
    }
  });
  const text =await raw3.text(); 
  const auth = extraerAuthDelTexto(text);
  return {auth, cookie: cookie}
  }

const extraerAuthDelTexto = (text) => {
    const start = text.search(`"auth\":\"`);
    const substr1 = text.substr(start + `"auth\":\"`.length,32);
    return substr1;
  }
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function obtenerIntervalo(minimo, maximo) {
    const r = Math.random()*(maximo-minimo) + minimo
    return Math.floor(r)
  }

  export {hacerLogin, sleep, obtenerIntervalo}