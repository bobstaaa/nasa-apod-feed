const ROUTES = {
    home: () => '/',
    rover: (id) => id ? `/rover/${id}` : '/rover',
    apod: (id) => id ? `/apod/${id}` : '/apod'
}

export default ROUTES;