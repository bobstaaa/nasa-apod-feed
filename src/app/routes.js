const ROUTES = {
    home: () => '/',
    donki: (id) => id ? `/donki/${id}` : '/donki',
    apod: (id) => id ? `/apod/${id}` : '/apod'
}

export default ROUTES;