from subprocess import call, Popen, PIPE

call("echo upgrade permission", shell=True)
call("chmod +X ngrok", shell=True)
call("echo start server.js", shell=True)
#call("node server.js", shell=True)
Popen(['node', 'server.js'], stdout=PIPE, stderr=PIPE, stdin=PIPE)
call("echo node server.js", shell=True)
call("echo ngrok activate", shell=True)
#call("./ngrok http 1877", shell=True)
Popen(['./ngrok', 'http','1877'], stdout=PIPE, stderr=PIPE, stdin=PIPE)
call("echo /ngrok http 1877", shell=True)