const News = require("../models/News");

const NewsController ={
    async create(req,res){
        try {
            const news = await News.create(req.body)
            res.status(201).send(news)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Problem creating news' })
        }
    },
    async getAll(req, res) {
        try {
           const news = await News.find()
           res.status(200).send(news)
        } catch (error) {
            console.error(error);
            res.status(500).send({message: 'Problem loading news'})
        }
    },
    async delete(req, res) {
        try {
            const news = await News.findByIdAndDelete(req.params._id); 
            if (!news) {
                return res.status(404).send({ message: 'News not found' });
            }   
            res.send({ message: 'News deleted', news });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to remove the news' });
        }
    },
    async update(req, res) {
        try {
          const news = await News.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
          );
          res.send({ message: "News successfully updated", news });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Problem to update the news' });
        }
      },
      async like(req, res) {
        try {
          const news = await News.findByIdAndUpdate(
            req.params._id, 
            { $push: { likes: req.params._id } },
            { new: true }
          );
          res.send(news);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your like" });
        }
      },
      async notlike(req, res) {
        try {
          const news = await News.findByIdAndUpdate(
            req.params._id, 
            { $pull: { likes: req.params._id } },
            { new: true }
          );
          res.send(news);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your notlike" });
        }
      },
      async getLikedNews(req, res) {
        try {
          const news = await News.find({ likes: { $exists: true, $ne: [] } });
          res.status(200).send(news);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Problem loading liked news' });
        }
      }
};


module.exports = NewsController;
