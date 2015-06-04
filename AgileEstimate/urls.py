from handlers.MainHandler import MainHandler
from handlers.Login import LoginHandler
from handlers.Channel import WebSocketHandler

import tornado.web
import tornado.wsgi
from django.core.wsgi import get_wsgi_application
"""wsgi_app = get_wsgi_application()
container = tornado.wsgi.WSGIContainer(wsgi_app)"""

""" TODO """	
url_patterns =[
            ('/login', LoginHandler),
			(r"/", MainHandler),
            (r'/channel', WebSocketHandler),
            ('.*', tornado.web.FallbackHandler, dict(fallback=container)),
        ]