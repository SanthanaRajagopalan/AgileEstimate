import tornado.web
import logging

logger = logging.getLogger('MainHandler.' + __name__)
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        logger.info("index.html")
        self.render("../web/index.html")