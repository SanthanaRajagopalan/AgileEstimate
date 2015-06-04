import tornado.web
import logging

logger = logging.getLogger('WebSocketHandler.' + __name__)
clients = dict()
class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self, *args):
        logger.info('socket open')
        self.id = self.get_argument("Id")
        self.stream.set_nodelay(True)
        clients[self.id] = {"id": self.id, "object": self}

    def on_message(self, message):        
        """
        when we receive some message we want some message handler..
        for this example i will just print message to console
        """
        logger.info('socket on message')
        print "Client %s received a message : %s" % (self.id, message)
        self.write_message("Passing message from server got a message: " + str(message))
        
    def on_close(self):
        if self.id in clients:
            del clients[self.id]