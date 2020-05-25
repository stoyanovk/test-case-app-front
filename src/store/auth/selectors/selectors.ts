const getToken = (state: any): string => state.auth.token;
const getUser = (state: any): object => state.auth.user;
const getServerMessage = (state: any): string => state.auth.serverMessage;
const getErrorMessage = (state: any): string => state.auth.errorMessage;
const getAuth = (state: any): boolean => state.auth.auth;

export { getToken, getUser, getServerMessage, getAuth, getErrorMessage };
