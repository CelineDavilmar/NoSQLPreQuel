const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend,
    getUsersById,
} = require('../../controllers/users-controller');

/* router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Update request successful");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Update request failed.");
    }
});

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("delete request successful");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("delete request failed.");
    }
}); */
router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router; 