export const signup = (req, res) => {
    const { username, password } = req.body
    res.send(`signup route: ${username}, ${password}`)
}

export const login = (req, res) => {
    res.send('login route')
}

export const logout = (req, res) => {
    res.send('logout route')
}