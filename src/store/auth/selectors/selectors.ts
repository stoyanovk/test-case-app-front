const getToken = (state: any): string => state.auth.token;
const getUser = (state: any): object => state.auth.user;
const getError = (state: any): string => state.auth.error;

export { getToken, getUser, getError };
