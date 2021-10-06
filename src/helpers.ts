const isAuthorized = () => !!localStorage.getItem("token");

export { isAuthorized };
