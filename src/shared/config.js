export const getAppUrl = () => process.env.NODE_ENV === 'production' ?
    'https://testas.dviraciumarsrutai.lt/' : 'http://localhost:3000/';