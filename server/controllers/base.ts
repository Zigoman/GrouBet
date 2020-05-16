abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = async (req, res) => {
    try {
      const docs = [{
        "id": "1",
        "image": "../../../../assets/images/gettyimages-961697338.jpg",
        "fullName": "Nir Zigdon",
        "shortTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
        "status": "test me",
        "numberOfFriends": null,
        "numberOfPhotos": null,
        "numberOfLikes": null
      }];
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default BaseCtrl;
