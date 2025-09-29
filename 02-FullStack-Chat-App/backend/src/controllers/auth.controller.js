export const signup = (req, res) => {
    const { fullName, email, password } = req.body
    try {

    } catch (error) {

    }
}

export const login = (req, res) => {
    const { username, password } = req.body
    res.send(`login route: ${username}, ${password}`)
}

export const logout = (req, res) => {
    res.send('logout route')
}