const users = {};

exports.create = async (socket, newId) => {
      const id = await newId;
      console.log("5",id)
      users[id] = socket;
      return id;
};

exports.get = (id) => users[id];

exports.remove = (id) => delete users[id];