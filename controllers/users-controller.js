const { Users } = require('../models').default;

const usersController = {


    createUsers({ body }, res) {
        Users.create(body)
            .then(dbUData => res.json(dbUData))
            .catch(err => res.status(400).json(err));
    },

    getAllUsers(req, res) {
        Users.find({})
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUData => res.json(dbUData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getUsersById({ params }, res) {
        Users.findOne({ _id: params.id })
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUData => {
                if (!dbUData) {
                    res.status(404).json({ message: 'No User with the ID provided.' });
                    return;
                }
                res.json(dbUData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUData => {
                if (!dbUData) {
                    res.status(404).json({ message: 'No User with the ID provided.' });
                    return;
                }
                res.json(dbUData);
            })
            .catch(err => res.json(err))
    },

    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(dbUData => {
                if (!dbUData) {
                    res.status(404).json({ message: 'No User with the ID provided.' });
                    return;
                }
                res.json(dbUData);
            })
            .catch(err => res.status(400).json(err));
    },

    addFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: ('-__v') })
            .select('-__v')
            .then(dbUData => {
                if (!dbUData) {
                    res.status(404).json({ message: 'No User with the ID provided.' });
                    return;
                }
                res.json(dbUData);
            })
            .catch(err => res.json(err));
    },

    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUData => {
                if (!dbUData) {
                    res.status(404).json({ message: 'No User with the ID provided.' });
                    return;
                }
                res.json(dbUData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = usersController; 