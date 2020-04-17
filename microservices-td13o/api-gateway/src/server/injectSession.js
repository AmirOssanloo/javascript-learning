import UsersService from '#root/adapters/UsersService';

const injectSession = async (req, res, next) => {
  try {
    if (req.cookies.userSessionId) {
      const userSession = await UsersService.fetchUserSession({
        sessionId: req.cookies.userSessionId
      });

      res.locals.userSession = userSession;
    }
  } catch (err) {
    return next(err)
  }

  return next();
};

export default injectSession;
