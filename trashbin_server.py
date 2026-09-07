#!/usr/bin/env python3
"""Local server for the neocities-le-trashbin site."""
import http.server
import os
import socketserver

PORT = 8000
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "neocities-le-trashbin")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)


with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving neocities-le-trashbin at http://localhost:{PORT}")
    httpd.serve_forever()
