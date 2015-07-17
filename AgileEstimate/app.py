#!/usr/bin/env python
#
# Runs a Tornado web server with a django project
# Make sure to edit the DJANGO_SETTINGS_MODULE to point to your settings.py
#
# http://localhost:8000/hello-django
# http://localhost:8080

import sys
import os
import signal
import logging
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.wsgi
import tornado.websocket
from tornado.options import define, options

from django.core.wsgi import get_wsgi_application

from handlers.Main import MainHandler
from handlers.Login import LoginHandler
from handlers.Channel import WebSocketHandler
from handlers.Save import SaveGameHandler

define('port', type=int, default=8000)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

root = os.path.dirname(__file__)
is_closing = False
clients = dict()
def signal_handler(signum, frame):
    global is_closing
    logger.info('exiting...')
    is_closing = True

def try_exit(): 
    global is_closing
    if is_closing:
        # clean up here
        tornado.ioloop.IOLoop.instance().stop()
        logger.info('exit success')

def main():
    os.environ['DJANGO_SETTINGS_MODULE'] = 'agilepoker.settings' # TODO: edit this
    sys.path.append('./agilepoker') # path to your project if needed



    wsgi_app = get_wsgi_application()
    container = tornado.wsgi.WSGIContainer(wsgi_app)
    settings = {
        "debug": True,
        "template_path": os.path.join(os.path.dirname(__file__), "web"),
        "static_path": os.path.join(os.path.dirname(__file__), "web"),
    }
    tornado_app = tornado.web.Application(
        [
            ('/login', LoginHandler),
            (r"/", MainHandler),
            ('/save', SaveGameHandler),
            (r'/channel', WebSocketHandler),
            ('.*', tornado.web.FallbackHandler, dict(fallback=container)),
        ], **settings)

    signal.signal(signal.SIGINT, signal_handler)
    server = tornado.httpserver.HTTPServer(tornado_app)
    server.listen(options.port)
    tornado.ioloop.PeriodicCallback(try_exit, 100).start()
    logger.info('Startin Tornado')
    tornado.ioloop.IOLoop.instance().start()
    print 'Tornado flush'


if __name__ == '__main__':
    main()
