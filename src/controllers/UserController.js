const User = require('../models/User');

module.exports = {
  async create(req, res){
    const { name, age } = req.body;

    try {
      const user = await User.create({
        name,
        age,
      });

      return res.json({ user });

    } catch(err){
      return res.status(400).send({ error: 'Error on create user.' });
    }
  },

  async destroy(req, res){
    const { id } = req.params;
    
    try{
      await User.findByIdAndRemove(id);

      return res.json({ message: 'User removed sucessfully.' });

    }catch(err){
      return res.status(400).send({ error: 'Error on remove user.' });
    }
  },

  async index(req, res) {
    try{
      const users = await User.find();

      return res.json(users);

    }catch(err){
      return res.status(400).send({ error: 'Error on listing users.' });
    }
  },

  async update(req, res) {
    const { id } = req.params; 
    const { name, age } = req.body;

    try{
      await User.findByIdAndUpdate(id, {
        name, 
        age
      });

      return res.json({ message: 'User updated sucessfully.' });

    }catch(err){
      return res.status(400).send({ error: 'Error on listing users.' });
    }
  }
}