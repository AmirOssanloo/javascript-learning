import { Listing } from '#root/db/models';

const setupRoutes = app => {
  app.post('/listings', async (req, res, next) => {
    const { title, description } = req.body;

    if (!title && !description) {
      return next(new Error('Invalid body'));
    }

    try {
      const listing = await Listing.create({
        title, description
      });

      return res.json(listing);
    } catch (err) {
      next(err);
    }
  });

  app.get('/listings', async (req, res) => {
    try {
      const listings = await Listing.findAll();
      return res.json(listings);
    } catch (err) {
      next(err);
    }
  });
};

export default setupRoutes;
