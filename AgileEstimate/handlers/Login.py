import tornado.web
import logging

logger = logging.getLogger('MainHandler.' + __name__)

class LoginHandler(tornado.web.RequestHandler):
    def post(self):
        logger.info('GET CALL')
        self.write("login")