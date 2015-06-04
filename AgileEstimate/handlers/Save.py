import tornado.web
import logging

logger = logging.getLogger('SaveGameHandler.' + __name__)

class SaveGameHandler(tornado.web.RequestHandler):
    def post(self):
        logger.info('Save CALL')
        self.write("Saved")