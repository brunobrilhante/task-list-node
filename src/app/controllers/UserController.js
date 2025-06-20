import User from "../models/User";

class UserController {
  async store(req, res) {
    
    const userExists = await User.findOne({
      where: { email: req.body.email }
    });

    if(userExists) {
      res.status(400).json({ error: 'Usuário já existe' });
    }

    const {id, name, email} = await User.create(req.body);

    return res.json({
      id,
      name,
      email })
  }

  async update(req, res) {
    console.log(req.userId)
    return res.json({ok:true})
  }
}

export default new UserController();