import socket
import uvicorn
from sidestep_engine.gui.server import create_app

def find_free_port():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]

port = find_free_port()
app = create_app(token=None, port=port)
print(f"SIDESTEP_URL=http://127.0.0.1:{port}", flush=True)
uvicorn.run(app, host="127.0.0.1", port=port, log_level="warning")